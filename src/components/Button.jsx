import React from 'react';

const Button = ({ width = '32', height = '10', text,border='Card-border', }) => {
  const buttonClasses = `w-${width} h-${height} bg-Primary-color text-Font-white pl-4 pr-4 pt-2 pb-2 rounded-md border border-${border}`;
  
  return (
    <button className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
