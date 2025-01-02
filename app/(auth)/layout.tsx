import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen bg-auth-light dark:bg-auth-dark bg-cover bg-center items-center justify-center px-4 py-10 bg-no-repeat">
      <div className="size-20 bg-auth-dark"></div>
      <section className="min-w-full h-fit rounded-[10px] border dark:bg-[#0F1116] bg-[#F4F6F8] dark:border-gray-800 px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        {children}
      </section>
    </main>
  );
};

export default layout;
