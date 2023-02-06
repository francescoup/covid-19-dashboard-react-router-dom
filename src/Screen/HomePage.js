import React from "react";
import { useGlobalContext } from "../Context";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  const { isOpen } = useGlobalContext();
  const { listaRegioni } = useLoaderData();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#1a2035] max-w-[1680px]">
      <aside
        className={`${
          isOpen
            ? "max-sm:translate-x-0 -translate-x-96"
            : "max-sm:-translate-x-96 translate-x-0"
        } fixed max-sm:w-[288px] w-[288px] z-10 overflow-y-auto  bg-cyan-900 h-[calc(100vh_-_20px)] p-5 pt-8 m-[10px] rounded-xl duration-300 dark:bg-slate-900`}
      >
        <Sidebar data={listaRegioni} />
      </aside>
      <main
        className={`${
          !isOpen ? "ml-[288px]" : "ml-0"
        } max-sm:ml-0 lg:p-7 md:pl-5 p-3 transition-all min-h-screen animate-jumps`}
      >
        <div className="gap-y-6">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
