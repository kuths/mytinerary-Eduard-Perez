import { useEffect, useState } from "react";

const BodyCities = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScale(1 + window.scrollY * 0.0005);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center text-blue-400 text-4xl font-bold overflow-hidden">
      <div className="relative h-screen flex flex-col justify-center items-center w-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
          style={{
            backgroundImage: "url('https://cdn.elviajerofisgon.com/wp-content/uploads/2024/04/La-Playa-las-Catedrales-es-uno-de-los-seis-paisajes-naturales-mas-impresionantes-de-Espana.-Adobe-Stock.jpg')",
            transform: `scale(${scale})`,
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">We are under construction, soon you will be able to discover all my tinerari.</h1>

        </div>
      </div>
    </div>
  );
};

export default BodyCities;