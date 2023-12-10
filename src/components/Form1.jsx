import React from 'react';
import Field from './Field';
import Button from './Button';

const Form1 = () => {
  
  return (
    <div className="w-577 h-564 p-8 border border-solid border-Card-border rounded-md bg-Card-color flex flex-col ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium text-Font-dark">Create a job</h1>
        <h1 className="text-2xl font-medium text-Font-dark">Step 1</h1>
      </div>
      <Field headline={'Job title'} placeholder={'ex.UX UI Designer'} must={"True"} />
      <Field headline={'Company name'} placeholder={'ex.Google'} must={"True"} />
      <Field headline={'Industry'} placeholder={'ex.Information Technology'} must={"True"} />
      <div className="w-full flex">
        <div className="w-1/2 mr-6">
          <Field headline={'Location'} placeholder={'ex. Chennai'} />
        </div>
        <div className="w-1/2">
          <Field headline={'Remote type'} placeholder={'ex. In-office'} />
        </div>
      </div>
      <div className="ml-auto mt-24">
        <Button width="12" height="10" text="Next" />
      </div>
    </div>
  );
};

export default Form1;
