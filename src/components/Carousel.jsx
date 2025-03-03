import { useState, useEffect } from "react";

const Carousel = () => {
  const img = [
    { name: "New York", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/800px-New_york_times_square-terabass.jpg" },
    { name: "Paris", image: "https://viajes.nationalgeographic.com.es/medio/2024/02/14/torre-eiffel_6e9796fd_278483323_240214093442_1280x853.jpg" },
    { name: "Tokyo", image: "https://img.static-kl.com/images/media/216337E7-BFE5-4AA6-9C9E180C3E5AC6A2" },
    { name: "London", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg" },
    { name: "Sydney", image: "https://cdnblog.fly.homes/uploads/2023/10/Interesting-Facts-About-Sydney.webp" },
    { name: "Rome", image: "https://res.cloudinary.com/picolo/image/fetch/f_webp,q_90,w_1600/https://res.cloudinary.com/picolo/image/upload/v1669217815/Picolo/City/Rome/First%2520time%2520in%2520Rome/Italy_Rome_Saint-Peters-Square_Travel_Picolo_Skyline_View.jpg" },
    { name: "Barcelona", image: "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1731921511557-L5CRLG4W4KBL7NWQWR2H/que-ver-en-barcelona.jpg?format=1500w" },
    { name: "Dubai", image: "https://mediaim.expedia.com/destination/9/cd8a3f3db7149b0ce36d052aea1182df.jpg" },
    { name: "Berlin", image: "https://img.static-kl.com/images/media/E3863523-06A1-4EAB-9DBF903C52C4A87D" },
    { name: "Los Angeles", image: "https://blog.viajemos.com/wp-content/uploads/2023/06/Que-hacer-en-Los-Angeles-en-5-dias.png" },
    { name: "Toronto", image: "https://www.airtransat.com/getmedia/c561ff6f-e480-4b8c-8b27-361d2b1e5ad3/Toronto-downtown-skyline-1000x600.aspx?width=1000&height=600&ext=.jpg" },
    { name: "Buenos Aires", image: "https://img2.rtve.es/i/?w=1600&i=1647853330789.jpg" }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      let newImagesPerSlide = window.innerWidth < 426 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      setImagesPerSlide(newImagesPerSlide);
    };

    updateImagesPerSlide();
    window.addEventListener("resize", updateImagesPerSlide);
    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  useEffect(() => {
    setStartIndex((prevIndex) => Math.floor(prevIndex / imagesPerSlide) * imagesPerSlide);
  }, [imagesPerSlide]);

  const prevSlide = () => {
    setIsManual(true);
    setStartIndex((prevIndex) =>
      prevIndex - imagesPerSlide < 0 ? img.length - imagesPerSlide : prevIndex - imagesPerSlide
    );
  };

  const nextSlide = () => {
    setIsManual(true);
    setStartIndex((prevIndex) =>
      prevIndex + imagesPerSlide >= img.length ? 0 : prevIndex + imagesPerSlide
    );
  };

  useEffect(() => {
    if (isManual) {
      const timeout = setTimeout(() => setIsManual(false), 5000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + imagesPerSlide >= img.length ? 0 : prevIndex + imagesPerSlide
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex, imagesPerSlide, isManual]);

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-black">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
        </svg>
      </button>

      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-transform duration-500 ease-in-out">
          {img.slice(startIndex, startIndex + imagesPerSlide).map((city, index) => (
            <div key={index} className="p-2">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h2 className="text-center mt-2 font-bold text-white">
                {city.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;