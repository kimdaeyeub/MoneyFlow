import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return new Response("Missing 'code' parameter", {
      status: 400,
    });
  }

  const accessTokenURL = "https://github.com/login/oauth/access_token";
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();

  const response = await fetch(`${accessTokenURL}?${accessTokenParams}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return new Response("Failed to fetch access token from GitHub", {
      status: 500,
    });
  }

  const { error, access_token } = await response.json();
  if (error || !access_token) {
    return new Response(
      "Invalid response from GitHub: Unable to retrieve access token",
      {
        status: 400,
      }
    );
  }

  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });

  if (!userProfileResponse.ok) {
    return new Response("Failed to fetch user profile from GitHub", {
      status: 500,
    });
  }

  const { id, avatar_url, login } = await userProfileResponse.json();

  if (!id || !avatar_url || !login) {
    return new Response("Incomplete user data received from GitHub", {
      status: 400,
    });
  }

  let user = await db.user.findUnique({
    where: { github_id: id + "" },
    select: { id: true },
  });

  if (!user) {
    user = await db.user.create({
      data: {
        github_id: id + "",
        avatar: avatar_url,
        username: login,
      },
      select: { id: true },
    });
  }

  const session = await getSession();
  session.id = user.id;
  await session.save();

  return redirect("/");
}
