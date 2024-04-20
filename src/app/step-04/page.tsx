"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function pageStep04() {
  const router = useRouter();
  const [allUserData, setAllUserData] = useState({
    plan: "",
    time: "",
    onlineService: false,
    largeStorage: false,
    customProfile: false,
  });

  const [totalMoney, setTotalMoney] = useState({
    plan: 0,
    total: 0,
  });

  useEffect(() => {
    // Aquí dentro puedes realizar acciones que deseas llevar a cabo después de que el componente se haya renderizado

    const dataPlanUser = localStorage.getItem("planUser");
    const datapickAddOns = localStorage.getItem("pickAddOns");
    const resultPlanUser = dataPlanUser ? JSON.parse(dataPlanUser) : [];
    const resultPickAddOns = datapickAddOns ? JSON.parse(datapickAddOns) : [];

    setAllUserData((allUserData) => ({
      ...allUserData,
      plan: resultPlanUser[0].plan,
      time: resultPlanUser[0].planTime,
      onlineService: resultPickAddOns[0].onlineService,
      largeStorage: resultPickAddOns[0].largeStorage,
      customProfile: resultPickAddOns[0].customizableProfile,
    }));
  }, []);

  useEffect(() => {
    let total = 0;
    let planCost = 0;

    total += allUserData.onlineService
      ? allUserData.time === "monthly"
        ? 1
        : 10
      : 0;
    total += allUserData.largeStorage
      ? allUserData.time === "monthly"
        ? 2
        : 20
      : 0;
    total += allUserData.customProfile
      ? allUserData.time === "monthly"
        ? 2
        : 20
      : 0;

    if (allUserData.plan === "arcade") {
      planCost = allUserData.time === "monthly" ? 9 : 90;
    } else if (allUserData.plan === "advanced") {
      planCost = allUserData.time === "monthly" ? 12 : 120;
    } else if (allUserData.plan === "pro") {
      planCost = allUserData.time === "monthly" ? 15 : 150;
    }

    setTotalMoney({
      ...totalMoney,
      plan: planCost,
      total: total + planCost,
    });
  }, [allUserData]);

  const changeBtn = () => {
    setAllUserData({
      ...allUserData,
      time: allUserData.time === "monthly" ? "yearly" : "monthly",
    });
  };

  const ConfirmBtn = () => {
    router.push("/finish");
  };
  const goBack = () => {
    localStorage.removeItem("pickAddOns");
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
          <div className="flex flex-col gap-3 mb-3">
            <h2 className="font-bold text-2xl text-800">Finishing up</h2>
            <p className="text-[18px] text-gray-400">
              Double-check everything looks OK before confirming.
            </p>
          </div>
          <div className="flex flex-col gap-3 px-4">
            <div className="flex justify-between items-center border-b border-b-gray-300 pb-2 animate-fade-right ">
              <div>
                <p className="text-Marine-blue font-bold">{`${allUserData.plan} (${allUserData.time}) `}</p>
                <div className="border-b border-gray-500 inline-block">
                  <p
                    className="text-gray-500 cursor-pointer hover:font-bold sm:hover:text-purple-800"
                    onClick={changeBtn}
                  >
                    Change
                  </p>
                </div>
              </div>
              <p className="text-Marine-blue font-bold">{`$${totalMoney.plan}/${
                allUserData.time === "yearly" ? "yr" : "mo"
              }`}</p>
            </div>
            <div className="flex flex-col  gap-4">
              <div
                className={`flex justify-between ${
                  allUserData.onlineService
                    ? "show animate-fade-right"
                    : "hidden"
                } `}
              >
                <p className="text-gray-500 ">Online Service</p>
                <p className="text-black font-bold">{`+$${
                  allUserData.time === "monthly" ? 1 : 10
                }/${allUserData.time === "monthly" ? "mo" : "yr"} `}</p>
              </div>
              <div
                className={`flex justify-between ${
                  allUserData.largeStorage
                    ? "show animate-fade-right"
                    : "hidden"
                } `}
              >
                <p className="text-gray-500">Larger Storage</p>
                <p className="text-black font-bold">{`+$${
                  allUserData.time === "monthly" ? 2 : 20
                }/${allUserData.time === "monthly" ? "mo" : "yr"} `}</p>
              </div>
              <div
                className={`flex justify-between ${
                  allUserData.customProfile
                    ? "show animate-fade-right"
                    : "hidden"
                } `}
              >
                <p className="text-gray-500">Customizable profile</p>
                <p className="text-black font-bold">{`+$${
                  allUserData.time === "monthly" ? 2 : 20
                }/${allUserData.time === "monthly" ? "mo" : "yr"} `}</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 animate-fade-right sm:mt-8 ">
              <p className="text-[18px] sm:text-[22px] text-gray-500">
                {`Total (per ${
                  allUserData.time === "monthly" ? "month" : "year"
                })`}{" "}
              </p>
              <p className="text-Purplish-blue font-bold text-[18px] sm:text-[22px]">
                {`+$${totalMoney.total}/${
                  allUserData.time === "monthly" ? "mo" : "yr"
                }`}
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
            className={`font-blod text-gray-600/90 font-700 hover:text-gray-600  cursor-pointer`}
          >
            Go Back
          </p>
        </div>
        <div>
          <button
            className="w-[140px] h-[55px] text-[18px] bg-Purplish-blue text-white rounded-md"
            onClick={ConfirmBtn}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
