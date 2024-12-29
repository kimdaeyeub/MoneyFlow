import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        {children}
      </section>
    </main>
  );
};

export default layout;
