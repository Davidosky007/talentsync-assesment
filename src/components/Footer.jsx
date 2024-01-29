import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import play from "../assets/play.png";
import app from "../assets/app.png";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import github from "../assets/github.svg";
const Footer = () => {
  return (
    <footer className=" text-gray-600 pt-12">
      <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12">
        <div className="sm:col-span-2 flex flex-col gap-4">
           <div className="flex items-center gap-1">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <Link to="/"> 
            <p className="text-gray-900 font-semibold text-lg">ClearLink</p>
            </Link>
          </div>
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div>
          <p className="font-semibold   text-gray-500  mb-4">Product</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold   text-gray-500  mb-4">Company</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-500  mb-4">Resources</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>Blog</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold   text-gray-500  mb-4">Legal</p>
          <ul className="flex flex-col gap-8  cursor-pointer">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-semibold text-blue">Get the app</span>
          <img src={app} alt="" />
          <img src={play} alt="" />
        </div>
      </div>
      <aside className="bg-gray-50 mt-8">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          <p>© 2023 ClearLink. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="group">
              <img src={linkedin} alt="" className="group-hover:text-blue" />
            </a>
            <a href="#" className="group">
              <img src={twitter} alt="" className="group-hover:text-blue" />
            </a>
            <a href="#" className="group">
              <img src={facebook} alt="" className="group-hover:text-blue" />
            </a>
            <a href="#" className="group">
              <img src={instagram} alt="" className="group-hover:text-blue" />
            </a>
            <a href="#" className="group">
              <img src={github} alt="" className="group-hover:text-blue" />
            </a>
            <a href="#" className="group">
              <img src={youtube} alt="" className="group-hover:text-blue" />
            </a>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
