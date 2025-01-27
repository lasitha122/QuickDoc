import logo from '../assets/Logo1.png';
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white p-6 mt-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg ml-5 mr-5 mb-10 bottom-1">
      <footer className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6">
        <div className="flex items-center justify-start mb-4 md:mb-0">
          <Link to="/">
            <img src={logo} alt="quickDoc Logo" className="h-10 w-28" />
          </Link>
        </div>
        <ul className="flex flex-wrap md:flex-row justify-center items-center gap-y-2 gap-x-8 mb-4 md:mb-0">

        <li>
            <Link
              to="/Help"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              0760220426
            </Link>
          </li>

          <li>
            <Link
              to="/Help"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              QuickDoc123@gmail.com
            </Link>
          </li>

          <li>
            <Link
              to="/FindDoctor"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              FindDoctor
            </Link>
          </li>
          <li>
            <Link
              to="/FindDoctor"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              Payment
            </Link>
          </li>
          <li>
            <Link
              to="/MedicalGuidance"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              Medical Guidance
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Help"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              Help
            </Link>
          </li>
          
        </ul>
        <div className="flex justify-center items-center gap-x-4">
          <a href="https://facebook.com">
            <FaFacebookSquare size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="1.5rem" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube size="1.5rem" />
          </a>
        </div>
      </footer>
      <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs">
        COPYRIGHT: &copy; 2024 QuickDoc
      </div>
    </div>
  );
}

export default Footer;