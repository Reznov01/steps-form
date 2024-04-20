"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./style.css";

export default function pageStep03() {
  const router = useRouter();
  const [pickAddOns, setPickAddOns] = useState({
    onlineService: false,
    largeStorage: false,
    customizableProfile: false,
  });
  const [planUser, setPlanUser] = useState("");
  useEffect(() => {
    // Esta función se ejecutará al renderizar el componente
    getUserPlan();
  }, []);
  const getUserPlan = () => {
    const selectedOptionsString = localStorage.getItem("planUser");
    const planUserLocalStorage = selectedOptionsString
      ? JSON.parse(selectedOptionsString)
      : [];
    setPlanUser(planUserLocalStorage[0].planTime);
  };

  const handleCheckboxChange = (
    element: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (element.target.name === "onlineServices") {
      setPickAddOns({
        ...pickAddOns,
        onlineService: element.target.checked,
      });
    }
    if (element.target.name === "largeStorage") {
      setPickAddOns({
        ...pickAddOns,
        largeStorage: element.target.checked,
      });
    }
    if (element.target.name === "customizableProfile") {
      setPickAddOns({
        ...pickAddOns,
        customizableProfile: element.target.checked,
      });
    }
  };

  // useEffect(() => {
  //   // Lógica adicional que deseas realizar después de que el estado pickAddOns cambie
  //   // Por ejemplo, puedes mostrar una alerta o realizar alguna acción basada en el nuevo estado pickAddOns
  //   console.log("El estado pickAddOns ha cambiado:", pickAddOns);
  // }, [pickAddOns]);

  const handlePageBtn = () => {
    const selectedOptionsString = localStorage.getItem("pickAddOns");
    const selectedOptions = selectedOptionsString
      ? JSON.parse(selectedOptionsString)
      : [];

    // Eliminar los campos si es que existen

    // Agregar la nueva opción seleccionada
    selectedOptions.push({
      onlineService: pickAddOns.onlineService,
      largeStorage: pickAddOns.largeStorage,
      customizableProfile: pickAddOns.customizableProfile,
    });

    // Guardar las opciones seleccionadas actualizadas en el localStorage
    localStorage.setItem("pickAddOns", JSON.stringify(selectedOptions));

    router.push("/step-04");
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
        <div className="p-5">
          <div className="flex flex-col gap-3 mb-3">
            <h2 className="font-bold text-[26px] text-800">Pick add-ons</h2>
            <p className="text-[18px] text-gray-400">
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:mt-8">
            <div
              className={`flex items-center justify-between  p-4 border border-gray-300 rounded-lg sm:justify-start sm:pl-8 ${
                pickAddOns.onlineService
                  ? "border-purple-700 bg-Light-blue/20"
                  : "border-gray-300"
              }`}
              id="itemOnlineServices"
            >
              <input
                id="online-services"
                type="checkbox"
                value=""
                name="onlineServices"
                checked={pickAddOns.onlineService}
                className="w-5 h-5  bg-gray-800 border-gray-800 accent-Purplish-blue inputsPick"
                onChange={handleCheckboxChange}
              />
              <div className="flex flex-col ml-4 sm:ml-14">
                <p className="font-bold text-[16px]">Online Services</p>
                <p className="text-gray-600 text-[14px]">
                  Access to multiplayer games
                </p>
              </div>
              <p className={` pl-3 font-bold text-Purplish-blue sm:ml-[156px]`}>
                {planUser === "monthly" ? "+$1/mo" : "+$10/yr"}
              </p>
            </div>

            <div
              className={`flex items-center  p-4 border border-gray-300 rounded-lg justify-between  sm:justify-normal sm:pl-8 ${
                pickAddOns.largeStorage
                  ? "border-purple-700 bg-Light-blue/15"
                  : "border-gray-300"
              }`}
              id="itemLargerStorage"
            >
              <input
                id="largeStorage"
                type="checkbox"
                value=""
                name="largeStorage"
                checked={pickAddOns.largeStorage}
                className="w-5 h-5  bg-gray-800 border-gray-800 accent-Purplish-blue inputsPick "
                onChange={handleCheckboxChange}
              />
              <div className="flex flex-col ml-[-8px] sm:ml-14">
                <p className="font-bold text-[16px]">Larger storage</p>
                <p className="text-gray-600 text-[14px]">
                  Extra 1TB of cloud save
                </p>
              </div>
              <p className={` font-bold text-Purplish-blue sm:ml-[200px]`}>
                {planUser === "monthly" ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>

            <div
              className={`flex items-center  p-4 border border-gray-300 rounded-lg justify-between  sm:justify-normal   ${
                pickAddOns.customizableProfile
                  ? "border-purple-700 bg-Light-blue/15"
                  : "border-gray-300"
              }`}
              id="itemCustomProfile"
            >
              <input
                id="customProfile"
                type="checkbox"
                value=""
                name="customizableProfile"
                checked={pickAddOns.customizableProfile}
                className="w-5 h-5  bg-gray-800 border-gray-800 accent-Purplish-blue inputsPick sm:ml-[14px]"
                onChange={handleCheckboxChange}
              />
              <div className="flex flex-col ml-3 sm:pl-14">
                <p className="font-bold text-[16px]">Customizable profile</p>
                <p className="text-gray-600 text-[14px]">
                  Custom theme on your profile
                </p>
              </div>
              <p className={` font-bold text-Purplish-blue sm:ml-[148px]`}>
                {planUser === "monthly" ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute z-1 bottom-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-8">
        <div
          className="sm:hover:-translate-y-[5px] transition-transform duration-300"
          onClick={goBack}
        >
          <p
            className={`font-blod text-gray-600/90 font-700 hover:text-gray-600  sm:text-[18px]  
            cursor-pointer `}
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
