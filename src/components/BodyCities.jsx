import { useEffect, useState } from "react";

const BodyCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/city/allCity")
      .then((response) => response.json())
      .then((data) => setCities(data.response))
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  return (
    <div className="relative flex flex-col items-center text-blue-400 text-4xl font-bold overflow-hidden">
      <h1 className="text-5xl font-bold my-8">Discover Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {cities.map((city) => (
          <div key={city._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={city.img} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{city.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyCities;