"use client";

import bg_mobile from "../../../assets/images/bg-sidebar-mobile.svg";
import bg_desktop from "../../../assets/images/bg-sidebar-desktop.svg";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

import { usePathname } from "next/navigation";
export default function Nav() {
  const pathName = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Obtenemos el ancho inicial de la ventana

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="sm:h-full sm:w-[300px]  relative sm:p-4 ">
        <div className="">
          <Image
            src={windowWidth < 768 ? bg_mobile : bg_desktop}
            width={1000}
            height={600}
            alt="background image"
            className="h-full object-cover"
          />
          <ul className="flex sm:flex-col w-full gap-6 absolute top-10 justify-center sm:mx-8 sm:mt-6">
            <div className="sm:flex ">
              <li
                className={`flex  items-center justify-center w-12 h-12 rounded-full  text-xl font-bold  ${
                  pathName === "/step-01" || pathName === "/"
                    ? "bg-Light-blue text-black"
                    : "bg-transparent border border-white text-white"
                }`}
              >
                1
              </li>
              <div className="hidden sm:block ml-4">
                <p className="text-Cool-gray uppercase">step 1</p>
                <p className="text-Alabaster font-blod">YOUR INFO</p>
              </div>
            </div>
            <div className="sm:flex ">
              <li
                className={`flex items-center justify-center w-12 h-12 rounded-full   text-xl font-bold  ${
                  pathName === "/step-02"
                    ? "bg-Light-blue text-black"
                    : "bg-transparent border border-white text-white"
                }`}
              >
                2
              </li>
              <div className="hidden sm:block ml-4">
                <p className="text-Cool-gray uppercase">step 2</p>
                <p className="text-Alabaster font-blod">SELECT PLAN</p>
              </div>
            </div>
            <div className="sm:flex ">
              <li
                className={`flex items-center justify-center w-12 h-12 rounded-full   text-xl font-bold  ${
                  pathName === "/step-03"
                    ? "bg-Light-blue text-black"
                    : "bg-transparent border border-white text-white"
                }`}
              >
                3
              </li>
              <div className="hidden sm:block ml-4">
                <p className="text-Cool-gray uppercase">step 3</p>
                <p className="text-Alabaster font-blod">ADD-ONS</p>
              </div>
            </div>
            <div className="sm:flex ">
              <li
                className={`flex items-center justify-center w-12 h-12 rounded-full   text-xl font-bold  ${
                  pathName === "/step-04" || pathName === "/finish"
                    ? "bg-Light-blue text-black"
                    : "bg-transparent border border-white text-white"
                }`}
              >
                4
              </li>
              <div className="hidden sm:block ml-4">
                <p className="text-Cool-gray uppercase">step 4</p>
                <p className="text-Alabaster font-blod">SUMMARY</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
