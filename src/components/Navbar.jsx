import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 shadow-md fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold flex-1">My Tinerary</a>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Cities</a>
          <button className="bg-blue-600 text-black px-4 py-2 rounded-md  hover:bg-blue-200">Login</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 border-2 border-gray-700 rounded-md"
        >
          ☰
        </button>
      </div>
      
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-all duration-300 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="bg-gray-300 w-full h-full p-5 shadow-lg transform transition-all duration-300 ease-in-out"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
        >
          <div className="flex justify-between items-center mb-5">
            <span className="text-xl font-bold">MY tinerary</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl">✖</button>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Cities</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

