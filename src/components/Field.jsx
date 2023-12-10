import React, { useState } from 'react';

const Field = ({ headline, placeholder, must }) => {
  const [real, change] = useState('');
  React.useEffect(() => {
    if (must === 'True') {
      change("*");
    }
  }, [must]);

  return (
    <div className="mt-6">
      <h1 className="text-Font-dark font-medium">{headline}<span className='text-Font-error'>{real}</span></h1>
      <input
        type='text'
        placeholder={placeholder}
        className="w-full h-10 border border-Card-border px-2 rounded mt-1 text-Font-placeholder"
      />
    </div>
  );
};

export default Field;
