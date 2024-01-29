import hero from "../assets/frame.png";
import Button from "../custom/Button";
import { Link } from "react-router-dom";
import bot from "../assets/bot.svg";
import avatars from "../assets/avatars.png";
import star from "../assets/star.png";

const Header = () => {
  return (
    <header className="container flex flex-col md:flex-row items-center  justify-center p-4 gap-8 mt-32">
      <main className="md:w-4/6 flex flex-col gap-8 text-center md:text-start">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1D2939]">
          Uniting the world,
          <br />
          one video call at a time
        </h1>
        <p className="text-gray-500 max-w-md">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Button
            value="Start your free trial"
            link=""
            styles="bg-blue text-white"
          />
          <Link href="" className="flex items-center gap-4 text-blue">
            <img src={bot} alt="bot" />
            Discover AI assistant
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 ">
          <img src={avatars} alt="avatars" />
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              5.0
            </div>
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </main>
      <img src={hero} alt="hero" className="w-full md:w-3/6" />
    </header>
  );
};

export default Header;
