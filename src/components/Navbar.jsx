import { useState } from "react";
import { FiMenu, FiChevronDown, } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "../custom/Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 border border-gray-300 mt-12 container rounded-full relative ">
      {/* Desktop Navigation */}
      <div className="md:flex justify-between items-center w-[95%] mx-auto hidden py-2 flex-wrap">
        <Link to="/" className="flex items-center gap-1 text-gray-900 font-semibold text-lg">
          <img src={Logo} alt="" />
          ClearLink
        </Link>
        <ul className="text-gray-500 flex gap-8 items-center cursor-pointer">
          <li className="group">
            <Link to="/products" className="flex items-center">
              Products
              <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                <FiChevronDown />
              </span>
            </Link>
          </li>
          <li className="group">
            <Link to="/solutions" className="flex items-center">
              Solutions
              <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                <FiChevronDown />
              </span>
            </Link>
          </li>
          <li className="group">
            <Link to="/resources" className="flex items-center">
              Resources
              <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                <FiChevronDown />
              </span>
            </Link>
          </li>
          <li className="group">
            <Link to="/pricing" className="flex items-center">
              Pricing
              <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                <FiChevronDown />
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Button
            value="Talk to sales"
            styles="text-gray-900 bg-white border border-gray-400"
            link="/#"
          />
          <Button
            value="Sign up for free"
            styles="text-white bg-blue"
            link="/#"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-1 text-gray-900 font-semibold text-lg">
          <img src={Logo} alt="" />
          ClearLink
        </Link>
        {isMobileMenuOpen ? (
          <CgClose
            onClick={toggleMobileMenu}
            className="text-gray-700 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
        ) : (
          <FiMenu
            onClick={toggleMobileMenu}
            className="text-gray-700 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-8 absolute top-20 left-0 right-0 z-50 w-full rounded-md ">
          <ul className="text-gray-700  cursor-pointer">
            <li className="py-2">
              <Link to="/products" className="flex items-center">
                Products
                <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                  <FiChevronDown />
                </span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/solutions" className="flex items-center">
                Solutions
                <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                  <FiChevronDown />
                </span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/resources" className="flex items-center">
                Resources
                <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                  <FiChevronDown />
                </span>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/pricing" className="flex items-center">
                Pricing
                <span className="ml-1 transition-transform transform group-hover:-rotate-180">
                  <FiChevronDown />
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex  flex-col gap-4  mt-4">
            <Button
              value="Talk to sales"
              styles="text-gray-900 bg-white border border-gray-400"
              link="/#"
            />
            <Button
              value="Sign up for free"
              styles="text-white bg-blue"
              link="/#"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
