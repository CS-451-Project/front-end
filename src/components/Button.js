import React from 'react';
// import PropTypes from "prop-types"

// the ...props is a spread operator
// it takes all the props and puts them into the button
const Button = ({ title, ...props }) => {
  return (
    <button 
      className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-700" 
      onClick={props.click}
    {...props}
    >
      {title}
    </button>
  );
};

export default Button;

