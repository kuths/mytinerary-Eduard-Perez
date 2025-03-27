import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CityList = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/city/allCity")
      .then((response) => response.json())
      .then((data) => {
        setCities(data.response);
        setFilteredCities(data.response);
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    if (query === "") {
      setFilteredCities(cities);
    } else {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().startsWith(query)
      );
      setFilteredCities(filtered);
    } 
  };



  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={handleSearch}
        className="w-full p-2 border rounded-lg mb-4"
      />
      
      {filteredCities.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No cities found with that name.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCities.map((city) => (
            <Link key={city._id} to={`/cities/${city._id}`}>
              <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition">
                <img
                  src={city.img}
                  alt={city.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold mt-2">{city.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default CityList;