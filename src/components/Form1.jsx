import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Button from './Button';
import { setData } from '../store/DataSlice';

const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required('Job title is required'),
  companyName: Yup.string().required('Company name is required'),
  industry: Yup.string().required('Industry is required'),
  location: Yup.string(),
  remoteType: Yup.string(),
});

const initialValues = { jobTitle: '', companyName: '', industry: '', location: '', remoteType: '',};




const MyForm = ({postman}) => {

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(setData(values));
    postman(true);
};

  return (
    <div className="w-577 h-564 p-8 border border-solid border-Card-border rounded-md bg-Card-color flex flex-col ">
    <div className="flex justify-between">
        <h1 className="text-2xl text-Font-dark">Create a job</h1>
        <h1 className="text-2xl text-Font-dark">Step 1</h1>
      </div>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="max-w-screen-md mx-auto mt-6">
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-Font-dark">Job title<span className="text-Font-error" >*</span></label>
          <Field type="text" id="jobTitle" name="jobTitle" placeholder="ex.UX UI Designer" className="mt-1 p-2 border rounded-md w-full"/>
          <ErrorMessage name="jobTitle" component="div" className="text-Font-error text-xs mt-0 absolute" />
        </div>

        <div className="mt-6">
          <label htmlFor="companyName" className="block text-sm font-medium text-Font-dark">Company name<span className="text-Font-error" >*</span></label>
          <Field type="text" id="companyName" name="companyName" placeholder="ex.Google" className="mt-1 p-2 border rounded-md w-full"/>
          <ErrorMessage name="companyName" component="div" className="text-Font-error text-xs mt-0 absolute" />
        </div>

        <div className="mt-6">
          <label htmlFor="industry" className="block text-sm font-medium text-Font-dark">Industry<span className="text-Font-error" >*</span></label>
          <Field type="text" id="industry" name="industry" placeholder="ex.Information Technology" className="mt-1 p-2 border rounded-md w-full"/>
          <ErrorMessage name="industry" component="div" className="text-Font-error text-xs mt-0 absolute" />
        </div>

        <div className="flex mt-6">
          <div className="w-1/2 mr-6 mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-Font-dark">Location</label>
            <Field type="text" id="location" name="location" placeholder="ex. Chennai" className="mt-1 p-2 border rounded-md w-full"/>
          </div>

          <div className="w-1/2 mb-4">
            <label htmlFor="remoteType" className="block text-sm font-medium text-Font-dark">Remote type</label>
            <Field type="text" id="remoteType" name="remoteType" placeholder="ex. In-office" className="mt-1 p-2 border rounded-md w-full"/>
          </div>
        </div>

        <div className="flex justify-end mt-24"><Button type="submit" width="12" height="10" text="Next" /></div>
      </Form>
    </Formik>
    </div>
  );
};

export default MyForm;
