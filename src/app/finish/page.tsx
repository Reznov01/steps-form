import iconFinish from "../../../assets/images/icon-thank-you.svg";
import Image from "next/image";
export default function pageFinish() {
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
        <div className="p-4 flex items-center justify-center  h-full">
          <div className="flex flex-col items-center justify-center gap-3 mb-3">
            <Image src={iconFinish} alt="icon finish" width={60} height={60} />
            <h3 className="text-3xl font-bold">Thank you!</h3>
            <p className="text-gray-500 text-[20px] text-center w-[80%]">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. if you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
