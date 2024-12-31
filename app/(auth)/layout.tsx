import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  // TODO: Form의 border가 다크모드일때 너무 밝음.
  return (
    <main className="flex h-screen items-center justify-center px-4 py-10">
      <section className="min-w-full h-3/4 rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        {children}
      </section>
    </main>
  );
};

export default layout;
