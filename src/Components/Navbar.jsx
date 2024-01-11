// Navbar.js
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4 fixed w-[100%]">
      <div className="container mx-auto flex justify-between items-center h-[54px]">
        <div className="text-white font-bold text-xl">BHAGYAJ</div>
        <div className="flex flex-col">
          <div className="lg:hidden h-[54px]">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none focus:shadow-outline"
              
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18C3 18 3 18 3 18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V17H3V18ZM3 12C3 12 3 12 3 12C3 13.1046 3.89543 14 5 14H19C20.1046 14 21 13.1046 21 12V11H3V12ZM3 6C3 6 3 6 3 6C3 7.10457 3.89543 8 5 8H19C20.1046 8 21 7.10457 21 6V5H3V6Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V7H4V6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12V13H4V12ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18V19H4V18Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? "flex" : "hidden"} items-center fixed lg:static -translate-x-28 lg:translate-x-0 translate-y-8 lg:translate-y-0 border border-slate-800 rounded p-2`}>
            <div className="flex flex-col lg:flex-row">
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                Portfolio
              </a>
              <a href="#" className="text-white mx-4 hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
