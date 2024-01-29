import slides from "../data/slides";
import { useEffect, useState } from "react";
import group from "../assets/group.png";
import right from "../assets/left.png";
import left from "../assets/right.png";
import alternateImage1 from "../assets/screen.png";
import alternateImage2 from "../assets/group.png";
import alternateImage3 from "../assets/people.png";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlides = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => handleSlides("next"), 4000);
    return () => clearInterval(interval);
  }, []);

  const alternateImages = [alternateImage1, alternateImage2, alternateImage3];

  return (
    <section className="bg-gray-50 my-28">
      <div className="flex flex-col md:flex-row justify-between items-center container py-8 gap-40">
        <main className="flex flex-col gap-8 transition duration-500 transform hover:scale-105">
          <img src={slides[currentSlide].image} alt="" />
          <span className="text-[#FDB022] text-xl">★★★★★</span>
          <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl ">
            {slides[currentSlide].testimony}
          </h1>
          <div className="flex gap-8 sm:justify-between sm:items-center flex-col sm:flex-row">
            <div className="flex items-center gap-4">
              <img src={slides[currentSlide].avatar} alt="" />
              <div className="flex flex-col">
                <h4 className="text-gray-900 font-semibold text-lg">
                  {slides[currentSlide].name}
                </h4>
                <p className="text-gray-600">{slides[currentSlide].role}</p>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <img
                src={left}
                alt=""
                className="w-10 h-10 cursor-pointer"
                onClick={() => handleSlides("prev")}
              />

              <img
                src={right}
                alt=""
                className="w-10 h-10 cursor-pointer"
                onClick={() => handleSlides("next")}
              />
            </div>
          </div>
        </main>
        <img
          src={currentSlide === slides.length - 1 ? alternateImages[currentSlide % alternateImages.length] : group}
          alt="group"
          className="hidden md:block object-contain h-[400px] transition duration-500 transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Testimonial;
