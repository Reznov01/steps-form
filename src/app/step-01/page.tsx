"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function pageStep01() {
  const router = useRouter();
  localStorage.clear();

  const [userData, setUserData] = useState({
    user: "",
    email: "",
    phone: "",
  });

  const [validingData, setValidigData] = useState({
    nameUser: "hidden",
    emailUser: "hidden",
    phoneUser: "hidden",
  });

  const handleDataUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setUserData({
        ...userData,
        user: e.target.value,
      });
    }
    if (e.target.name === "addresUser") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
    }
    if (e.target.name === "phoneUser") {
      setUserData({
        ...userData,
        phone: e.target.value,
      });
    }
  };

  const handlePageBtn = () => {
    if (
      userData.user.length > 0 &&
      validEmail(userData.email) &&
      validPhone(userData.phone)
    ) {
      localStorage.clear();
      const selectedOptionsString = localStorage.getItem("selectedOptions");
      const selectedOptions = selectedOptionsString
        ? JSON.parse(selectedOptionsString)
        : [];

      // Agregar la nueva opción seleccionada
      selectedOptions.push({
        user: userData.user,
        email: userData.email,
        phone: userData.phone,
      });

      // Guardar las opciones seleccionadas actualizadas en el localStorage
      localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));

      router.push("/step-02");
    }
  };
  const validEmail = (email: string) => {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(patron.test(email));
    return patron.test(email);
  };

  const validPhone = (phoneNumber: string) => {
    const phoneRegex = /^(\+)?(?:[0-9] ?){6,14}[0-9]$/;

    return phoneRegex.test(phoneNumber);
  };

  const verificInputs = (element: React.ChangeEvent<HTMLInputElement>) => {
    switch (element.target.name) {
      case "name":
        setValidigData({
          ...validingData,
          nameUser: userData.user.length <= 0 ? "show" : "hidden",
        });
        break;
      case "addresUser":
        setValidigData({
          ...validingData,
          emailUser: validEmail(userData.email) ? "hidden" : "show",
        });

        break;
      case "phoneUser":
        setValidigData({
          ...validingData,
          phoneUser: validPhone(userData.phone) ? "hidden" : "show",
        });
        break;
    }
  };

  const goBack = () => {
    router.back();
  };

  // validando campos

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
          <div className="flex flex-col gap-3 mb-4">
            <h2 className="text-bold text-3xl text-">Personal info</h2>
            <p className="text-[18px] text-gray-400">
              Please provide your name, email address and phone number.
            </p>
          </div>
          <form action="#">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col ">
                <div className="flex justify-between w-full">
                  <label htmlFor="name" className="text-gray-600 font-bold">
                    Name
                  </label>
                  <p
                    className={` text-Strawberry-red ${
                      validingData.nameUser === "show"
                        ? " block animate-shake"
                        : "hidden"
                    }`}
                  >
                    This field is required
                  </p>
                </div>
                <input
                  type="text"
                  name="name"
                  id="nameUser"
                  placeholder="e.g. Stephen King"
                  className="flex items-center border border-gray-400 p-3 rounded-[4px]"
                  onChange={handleDataUser}
                  onBlur={verificInputs}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between w-full">
                  <label htmlFor="name" className="text-gray-600 font-bold">
                    Email address
                  </label>
                  <p
                    className={` text-Strawberry-red ${
                      validingData.emailUser === "show"
                        ? " block animate-shake"
                        : "hidden"
                    }`}
                  >
                    This field is required
                  </p>
                </div>
                <input
                  type="text"
                  name="addresUser"
                  id="addresUser"
                  placeholder="e.g. stephenking@lorem.com"
                  className="flex items-center border border-gray-400 p-3 rounded-[4px]"
                  onChange={handleDataUser}
                  onBlur={verificInputs}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between w-full">
                  <label htmlFor="name" className="text-gray-600 font-bold">
                    Phone Number
                  </label>
                  <p
                    className={` text-Strawberry-red ${
                      validingData.phoneUser === "show"
                        ? " block animate-shake"
                        : "hidden"
                    }`}
                  >
                    This field is required
                  </p>
                </div>
                <input
                  type="tel"
                  name="phoneUser"
                  id="phoneUser"
                  placeholder="e.g. +1 234 567 890"
                  className="flex items-center border border-gray-400 p-3 rounded-[4px]"
                  onChange={handleDataUser}
                  onBlur={verificInputs}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[80px] bg-white flex items-center justify-between px-8 sm:bottom-6">
        <div>
          <p
            className={`font-blod text-gray-600/90 font-700 `}
            onClick={goBack}
          ></p>
        </div>
        <div>
          <button
            className="w-[140px] h-[55px] text-[18px] bg-Marine-blue text-white rounded-md "
            onClick={handlePageBtn}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
