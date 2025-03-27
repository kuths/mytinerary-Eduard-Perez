import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BodyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/city/id/${id}`)
      .then((response) => response.json())
      .then((data) => setCity(data.response))
      .catch((error) => console.error("Error fetching city:", error));
  }, [id]);

  if (!city) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <img
        src={city.img}
        alt={city.name}
        className="w-full max-w-md h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{city.name}</h1>
      <p className="text-lg mt-2"><strong>Country:</strong> {city.country}</p>
      <p className="text-lg mt-2"><strong>Continent:</strong> {city.continent}</p>
      <p className="text-lg mt-2"><strong>Currency:</strong> {city.currency}</p>
      <p className="text-lg mt-2">Under construction</p>
      <button
        onClick={() => navigate("/cities")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
      >
        Back to Cities
      </button>
    </div>
  );
};

export default BodyDetails;