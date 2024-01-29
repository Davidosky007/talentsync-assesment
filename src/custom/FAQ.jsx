import PropTypes from "prop-types";
import { useState } from "react";
import minus from "../assets/minus-circle.svg";
import plus from "../assets/plus-circle.svg";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`faq ${
        isOpen
          ? "bg-gray-50 border border-gray-200 rounded-md"
          : "bg-white border-b  border-gray-200 "
      } transition-all ease-in-out duration-300 p-4 mb-2`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gay-900">{question}</h2>
        <button
          onClick={toggleFAQ}
          className="transition-all ease-in-out duration-300 "
        >
          {isOpen ? (
            <img src={minus} alt="" className="w-8 h-8" />
          ) : (
            <img src={plus} alt="" className="w-8 h-8" />
          )}
        </button>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </section>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQ;
