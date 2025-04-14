import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BodyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [city, setCity] = useState(null);
  const [itineraries, setItineraries] = useState([]); 

  useEffect(() => {
    console.log("ID de ciudad en la URL:", id);

    fetch(`http://localhost:8080/api/city/id/${id}`)
      .then((response) => response.json())
      .then((data) => setCity(data.response))
      .catch((error) => console.error("Error fetching city:", error));
  }, [id]);

  useEffect(() => {
    if (!city) return;

    fetch("http://localhost:8080/api/itinerary/allitinerary")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.response.filter(
          (itinerary) => itinerary.cityId === city._id
        );
        console.log("Itinerarios filtrados:", filtered); 
        setItineraries(filtered);
      })
      .catch((error) => console.error("Error fetching itineraries:", error));
  }, [city]);

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
      <button
        onClick={() => navigate("/cities")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
      >
        Back to Cities
      </button>

      {/* Itinerarios */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Itineraries in this City</h2>
        {itineraries.length === 0 ? (
          <p>No itineraries found for this city.</p>
        ) : (
          itineraries.map((itinerary) => (
            <div key={itinerary._id} className="border p-4 mb-4 rounded shadow">
              <img
                src={itinerary.photo}
                alt={itinerary.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-xl font-semibold">{itinerary.name}</h3>
              <p>{itinerary.Hashtags}</p>
              <p>Price: ${itinerary.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BodyDetails;

