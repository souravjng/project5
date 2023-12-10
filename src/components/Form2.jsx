import React, { useState } from 'react';
import Field from './Field';
import Button from './Button';
import Field2 from './Field2';

const Form2 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-577 h-564 p-8 border border-solid border-Card-border rounded-md bg-Card-color flex flex-col ">
      <div className="flex justify-between h-13 ">
        <h1 className="text-2xl font-medium text-Font-dark">Create a job</h1>
        <h1 className="text-2xl font-medium text-Font-dark">Step 2</h1>
      </div>
      <Field2 headline={'Experience'} placeholder1={'Minimum'} placeholder2={'Maximum'} />
      <Field2 headline={'Salary'} placeholder1={'Minimum'} placeholder2={'Maximum'} />
      <Field headline={'Total emplyee'} placeholder={'ex.100'} />
      <h1 className="text-Font-dark font-medium mt-6">Apply type</h1>

<div className="flex space-x-4 mt-1">
<label className="flex items-center  cursor-pointer">
    <input type="radio" value="quickApply" checked={selectedOption === 'quickApply'} onChange={handleOptionChange} className='font-medium text-Font-dark w-5 h-5'/>
    <span className='text-Font-placeholder ml-1 mt-[0.1rem]'>Quick Apply</span>
  </label>
  <label className="flex items-center  cursor-pointer">
    <input type="radio" value="externalApply" checked={selectedOption === 'externalApply'} onChange={handleOptionChange} className='font-medium text-Font-dark w-5 h-5'/>
    <span className='text-Font-placeholder ml-1 mt-[0.1rem]'>External Apply</span>
  </label>
</div>

      <div className="ml-auto mt-24">
        <Button width="12" height="10" text="Save" />
      </div>
    </div>
  );
};

export default Form2;
