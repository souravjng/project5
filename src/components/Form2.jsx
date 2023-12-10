import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { setData2 } from '../store/DataSlice';

const validationSchema = Yup.object().shape({
  applyType: Yup.string().required('Apply type is required'),
});

const initialValues = {
  MinimumExperience: '',
  MaximumExperience: '',
  MinimumSalary: '',
  MaximumSalary: '',
  TotalEmployee: '',
  applyType: '',
};

const Form2 = ({ postman2 }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    postman2(true);
    dispatch(setData2(values));};

  return (
    <div className="w-577 h-564 p-8 border border-solid border-Card-border rounded-md bg-Card-color flex flex-col">
      <div className="flex justify-between h-13">
        <h1 className="text-2xl font-medium text-Font-dark">Create a job</h1>
        <h1 className="text-2xl font-medium text-Font-dark">Step 2</h1>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="mt-6">
            <label htmlFor="Experience" className="block text-sm font-medium text-Font-dark">Experience</label>
            <div className="flex space-x-4 mt-1">
              <Field type="number" id="MinimumExperience" name="MinimumExperience" placeholder="Minimum" className="p-2 border rounded-md w-1/2" />
              <Field type="number" id="MaximumExperience" name="MaximumExperience" placeholder="Maximum" className="p-2 border rounded-md w-1/2" />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="salary" className="block text-sm font-medium text-Font-dark">Salary</label>
            <div className="flex space-x-4 mt-1">
              <Field type="number" id="MinimumSalary" name="MinimumSalary" placeholder="Minimum" className="p-2 border rounded-md w-1/2" />
              <Field type="number" id="MaximumSalary" name="MaximumSalary" placeholder="Maximum" className="p-2 border rounded-md w-1/2" />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="TotalEmployee" className="block text-sm font-medium text-Font-dark">Total employee</label>
            <Field type="number" id="TotalEmployee" name="TotalEmployee" placeholder="ex.100" className="mt-1 p-2 border rounded-md w-full" />
          </div>

          <h1 className="text-Font-dark font-medium mt-6">Apply type</h1>
          <div className="flex space-x-4 mt-1">
            <div className="flex items-center">
              <Field type="radio" id="quickApply" name="applyType" value="quickApply" className="mr-1 w-5 h-5 cursor-pointer" />
              <label htmlFor="quickApply" className="mr-4 cursor-pointer">Quick Apply</label>
            </div>

            <div className="flex items-center">
              <Field type="radio" id="externalApply" name="applyType" value="externalApply" className="mr-1 w-5 h-5 cursor-pointer" />
              <label htmlFor="externalApply" className='cursor-pointer'>External Apply</label>
            </div>
          </div>
          <ErrorMessage name="applyType" component="div" className="text-Font-error text-xs mt-7 absolute" />

          <div className="flex justify-end mt-24">
            <Button type="submit" width="12" height="10" text="Save" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Form2;
