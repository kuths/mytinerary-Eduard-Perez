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
        <div className="space-y-2 font-bold">
          <p>
            <a href="#" className="text-black hover:underline">Home</a>
          </p>
          <p>
            <a href="#" className="text-black hover:underline">Cities</a>
          </p>
          <p>
            <a href="#" className="text-black hover:underline">Login</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



  
  