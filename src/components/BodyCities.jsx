import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch, setCities } from "../cities/actions/cityActions"; 
import { Link } from "react-router-dom";

const CityList = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.city.city); 
  const search = useSelector((state) => state.city.search); 

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().startsWith(search.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:8080/api/city/allCity")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCities(data.response));
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, [dispatch]);

  const handleSearch = (event) => {
    dispatch(changeSearch(event.target.value));
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
