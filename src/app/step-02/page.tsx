"use client";

import Image from "next/image";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advanceIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function pageStep02() {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState("monthly");
  const [itemActive, setItemActive] = useState("arcade");
  console.log(isChecked);
  const handleToggle = () => {
    setIsChecked(isChecked === "monthly" ? "yearly" : "monthly");
    console.log(isChecked);
  };
  const handleItemSelect = (e: string) => {
    setItemActive(e);
  };

  const handlePageBtn = () => {
    localStorage.removeItem("planUser");
    const selectedOptionsString = localStorage.getItem("planUser");
    const selectedOptions = selectedOptionsString
      ? JSON.parse(selectedOptionsString)
      : [];

    // Eliminar los campos si es que existen

    // Agregar la nueva opción seleccionada
    selectedOptions.push({
      plan: itemActive,
      planTime: isChecked,
    });

    // Guardar las opciones seleccionadas actualizadas en el localStorage
    localStorage.setItem("planUser", JSON.stringify(selectedOptions));

    router.push("/step-03");
  };

  const goBack = () => {
    router.back();
  };
  return (
    <div className="relative w-screen h-screen sm:h-[590px]">
      <div
        className="absolute w-[360px] h-[440px] bg-white
     inset-x-0 mx-auto top-[-76px] rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
     animate-fade-down
     sm:top-12 sm:w-[90%]
    sm:shadow-none
    sm:font-bold
    
     "
      >
        <div className="p-6">
          <div className="flex flex-col gap-3 mb-3 sm:mb-12 ">
            <h2 className="font-bold text-2xl text-800">Select your plan</h2>
            <p className="text-[18px] text-gray-400">
              You have the option of monthly or yearly billing.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <div
              className={`flex items-center  p-4 border border-gray-300 rounded-lg 
              cursor-pointer sm:flex-col sm:w-[150px] sm:h-[180px] sm:gap-8 sm:hover:border-Marine-blue transition duration-200
              ${itemActive === "arcade" ? "activeItem" : ""}`}
              id="itemArcade"
              onClick={() => {
                handleItemSelect("arcade");
              }}
            >
              <Image src={arcadeIcon} alt="image icon" width={40} height={40} />
              <div className="flex flex-col ml-4  sm:w-full sm:items-center">
                <p className="font-bold text-[19px]">Arcade</p>
                <p className="text-gray-400 text-[17px]">
                  {isChecked === "monthly" ? "$9/mo" : "$90/yr"}
                </p>
                <p
                  className={`sm:mt-2 ${
                    isChecked === "monthly"
                      ? "hidden "
                      : "inline-block animate-fade-right"
                  }`}
                >
                  2 months free
                </p>
              </div>
            </div>
            <div
              className={`flex items-center  p-4 border border-gray-300 rounded-lg cursor-pointer sm:flex-col sm:justify-center sm:w-[150px] 
              sm:h-[180px]  sm:gap-8 sm:hover:border-Marine-blue transition duration-200  ${
                itemActive === "advanced" ? "activeItem" : ""
              }`}
              onClick={() => {
                handleItemSelect("advanced");
              }}
            >
              <Image
                src={advanceIcon}
                alt="image icon"
                width={40}
                height={40}
              />
              <div className="flex flex-col ml-4 sm:w-full sm:items-center">
                <p className="font-bold text-[19px]">Advanced</p>
                <p className="text-gray-400 text-[17px]">
                  {isChecked === "monthly" ? "$9/mo" : "$120/yr"}
                </p>
                <p
                  className={`sm:mt-2 ${
                    isChecked === "monthly"
                      ? "hidden "
                      : "inline-block animate-fade-right"
                  }`}
                >
                  2 months free
                </p>
              </div>
            </div>
            <div
              className={`flex items-center  p-4 border border-gray-300 rounded-lg cursor-pointer sm:flex-col sm:justify-center sm:w-[150px] sm:h-[180px] sm:gap-8 sm:hover:border-Marine-blue transition duration-200 ${
                itemActive === "pro" ? "activeItem" : ""
              }`}
              onClick={() => {
                handleItemSelect("pro");
              }}
            >
              <Image src={proIcon} alt="image icon" width={40} height={40} />
              <div className="flex flex-col ml-4 sm:w-full sm:items-center">
                <p className="font-bold text-[19px]">Pro</p>
                <p className="text-gray-400 text-[17px]">
                  {isChecked === "monthly" ? "$15/mo" : "$150/yr"}
                </p>
                <p
                  className={` sm:mt-2 ${
                    isChecked === "monthly"
                      ? "hidden "
                      : "inline-block animate-fade-right"
                  }`}
                >
                  2 months free
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full h-[60px] sm:w-[90%] ">
            <div className="flex items-center gap-6">
              <p
                className={`font-bold ${
                  isChecked === "monthly" ? "text-gray-400" : ""
                } `}
              >
                Monthly
              </p>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onClick={handleToggle}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>

              <p
                className={` ${
                  isChecked === "yearly" ? " font-bold" : "text-gray-400"
                }`}
              >
                Yearly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[80px] bg-white flex items-center justify-between px-8 hover:font-[20px]">
        <div className="sm:hover:-translate-y-[5px] transition-transform duration-300">
          <p
            className={`font-blod text-gray-600/90 font-700  sm:text-[18px] cursor-pointer `}
            onClick={goBack}
          >
            Go Back
          </p>
        </div>
        <div>
          <button
            className="w-[140px] h-[55px] text-[18px] bg-Marine-blue text-white rounded-md"
            onClick={handlePageBtn}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
