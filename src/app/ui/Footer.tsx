"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function back_next() {
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    // Inicializar currentPage según la ruta actual
    const currentPageNumber = parseInt(pathName.replace("/step-0", ""));
    setCurrentPage(currentPageNumber);
  }, [pathName]);

  const handlePageBtn = () => {
    if (currentPage < 5) {
      const nextPage = `/step-0${currentPage + 1}`;
      router.push(nextPage);
      setCurrentPage(currentPage + 1); // Actualizar el estado después de que la navegación se complete
    }
  };
  const goBack = () => {
    router.back(); // Esta función navegará hacia atrás en el historial del navegador
  };

  return (
    <div className="absolute bottom-3 w-screen h-[80px] bg-white flex items-center justify-between px-4">
      <div>
        <p
          className={`font-blod text-gray-600/90 font-700 ${
            pathName === "/step-01" ? "hidden" : "inline-block"
          }`}
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
          {pathName === "/step-04" ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
}
