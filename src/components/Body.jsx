import { useEffect, useState } from "react";

const Body = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScale(1 + window.scrollY * 0.0005);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center text-white text-4xl font-bold overflow-hidden">
      {/* Sección principal con imagen de fondo */}
      <div className="relative h-screen flex flex-col justify-center items-center w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
          style={{
            backgroundImage: "url('https://cdn.elviajerofisgon.com/wp-content/uploads/2024/04/La-Playa-las-Catedrales-es-uno-de-los-seis-paisajes-naturales-mas-impresionantes-de-Espana.-Adobe-Stock.jpg')",
            transform: `scale(${scale})`,
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">My Tinerary</h1>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-200">
            Explore Now!
          </button>
        </div>
      </div>

      {/* Nueva sección de Explore */}
      <div className="relative z-10 w-full bg-gray-200 text-gray-900 py-16 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">EXPLORE</h2>
        <p className="text-lg text-center max-w-lg">
          Have the pleasure of getting to know these great cities in the world and travel around the world, click and learn more.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-200">
          View More
        </button>
      </div>
    </div>
  );
};

export default Body;



