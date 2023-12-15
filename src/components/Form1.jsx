import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Button from './Button';
import { setData } from '../store/DataSlice';

const validationSchema = Yup.object().shape({
  JobTitle: Yup.string().required('Job title is required'),
  CompanyName: Yup.string().required('Company name is required'),
  Industry: Yup.string().required('Industry is required'),
  Location: Yup.string(),
  RemoteType: Yup.string(),
});



const MyForm = ({ postman, singledata }) => {
  
  const { JobTitle, CompanyName, Industry, Location, RemoteType } = singledata[0] ||{};
  const initialValues = { JobTitle: JobTitle || '', CompanyName:CompanyName|| '', Industry:Industry || '', Location:Location || '', RemoteType:RemoteType || '',};


  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(setData(values));
    postman(true);
  };

  return (
    <div className="w-[577px] p-[32px] h-[564px] border border-solid border-Card-border rounded-md bg-Card-color flex flex-col fixed z-10 ">
    <div className="flex justify-between w-full h-[52px] overflow-hidden">
        <h1 className="text-xl text-Font-dark">Create a job</h1>
        <h1 className="text-xl text-Font-dark">Step 1</h1>
      </div>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true}>
      <Form >
        <div className='w-full h-[61px]  mt-6 overflow-hidden'>
          <label htmlFor="JobTitle" className="block text-xs font-medium text-Font-dark">Job title<span className="text-Font-error" >*</span></label>
          <Field type="text" id="JobTitle" name="JobTitle" placeholder="ex.UX UI Designer" className="mt-1 p-1 border rounded-md w-full" />
          <ErrorMessage name="JobTitle" component="div" className="text-Font-error text-xs mt-0 absolute" />
        </div>

        <div className="w-full h-[61px]  mt-6 overflow-hidden">
          <label htmlFor="CompanyName" className="block text-xs font-medium text-Font-dark">Company name<span className="text-Font-error" >*</span></label>
          <Field type="text" id="CompanyName" name="CompanyName" placeholder="ex.Google" className="mt-1 p-1 border rounded-md w-full" />
          <ErrorMessage name="CompanyName" component="div" className="text-Font-error text-xs mt-0 absolute" />
        </div>

        <div className="w-full h-[61px]  mt-6 overflow-hidden">
          <label htmlFor="Industry" className="block text-xs font-medium text-Font-dark">Industry<span className="text-Font-error" >*</span></label>
          <Field type="text" id="Industry" name="Industry" placeholder="ex.Information Technology" className="mt-1 p-1 border rounded-md w-full"/>
          <ErrorMessage name="Industry" component="div" className="text-Font-error text-xs mt-0 absolute" />
        </div>

        <div className="flex w-full h-[61px]  mt-6 overflow-hidden">
          <div className="w-1/2 mr-6">
            <label htmlFor="Location" className="block text-xs font-medium text-Font-dark">Location</label>
            <Field type="text" id="Location" name="Location" placeholder="ex. Chennai" className="mt-1 p-1 border rounded-md w-full" />
          </div>

          <div className="w-1/2">
            <label htmlFor="RemoteType" className="block text-xs font-medium text-Font-dark">Remote type</label>
            <Field type="text" id="RemoteType" name="RemoteType" placeholder="ex. In-office" className="mt-1 p-1 border rounded-md w-full"/>
          </div>
        </div>

        <div className="flex justify-end w-[70px] h-[36px]  mt-24 ml-[450px]"><Button type="submit" width="13" height="10" text="Next" /></div>
      </Form>
    </Formik>
    </div>
  );
};

export default MyForm;
