import React from 'react';

const Button = ({ width, height, text }) => {
  const buttonClasses = `${width || '32'} ${height || '10'} bg-Primary-color text-white ml-5 pl-4 pr-4 pt-2 pb-2 rounded-md`;

  return (
    <button className={buttonClasses} >
      {text}
    </button>
  );
};

export default Button;
