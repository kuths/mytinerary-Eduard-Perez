import { NavLink } from "react-router-dom";

const routes = [
  { path: "/", name: "Home" },
  { path: "/Cities", name: "Cities" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-300 shadow-md w-full py-6">
      <div className="w-full flex justify-between items-center px-4 md:px-16">
        <div className="space-y-2">
          <p className="text-xl font-bold">Contact Us</p>
          <p>123 Street, City</p>
          <p>Email: contact@mytinerary.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="space-y-2 font-bold flex flex-col justify-center items-center">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className="text-black hover:underline"
              activeClassName="text-blue-600 font-bold"
            >
              {route.name}
            </NavLink>
          ))}
          <p>
            <a href="#" className="text-black hover:underline">Login</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
