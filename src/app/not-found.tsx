// pages/404.js (o 404.tsx)
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="z-29 w-screen h-screen bg-black text-white absolute top-0 left-0 flex items-center flex-col justify-center">
      <div className="flex items-center justify-center text-center">
        <h1 className="text-6xl ">
          <span className="text-9xl text-gray-400"> 404</span>- Página no
          encontrada
        </h1>
      </div>
      <p className="text-4xl mt-4">
        {" "}
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        href="/"
        className="text-blue-800 text-2xl cursor-pointer animate-shake mt-4 hover:text-blue-300"
      >
        Volver a la página de inicio
      </Link>
    </div>
  );
}
