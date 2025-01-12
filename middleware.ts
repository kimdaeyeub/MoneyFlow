import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/sign-in": true,
  "/create-account": true,
  "/github/start": true,
  "/github/complete": true,
};

const bothUrls: Routes = {
  "/": true,
  "/sample/dashboard": true,
  "/sample/graph": true,
  "/sample/this-week": true,
  "/sample/today": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  const samplePage = bothUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists && !samplePage) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
}
export const config = {
  matcher: ["/((?!_next|icons|images|favicon.ico|sitemap.xml).*)"],
};
