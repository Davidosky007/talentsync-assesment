// Removed unused import statement
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

import PropTypes from 'prop-types';

const Button = ({ value, styles, link }) => {
  return (
    <Link
      to={link}
      className={`${styles} rounded-full text-center py-3 font-semibold px-6 w-max`}
    >
      {value}
    </Link>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;


