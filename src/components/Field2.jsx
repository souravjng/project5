import React from 'react';

const Field2 = ({ headline, placeholder1, placeholder2 }) => {
  return (
    <div className="mt-6 flex">
      <div className="flex-1 pr-2 mr-1">
        <h1 className="text-Font-dark font-medium">{headline}</h1>
        <input type='text' placeholder={placeholder1} className="w-full h-10 border border-Card-border px-2 rounded mt-1 text-Font-placeholder" />
      </div>
      <div className="flex-1 pl-2 mt-6">
        <input type='text' placeholder={placeholder2} className="w-full h-10 border border-Card-border px-2 rounded mt-1 text-Font-placeholder" />
      </div>
    </div>
  );
};

export default Field2;
