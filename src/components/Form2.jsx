import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { Setdata2Async } from '../store/DataSlice';
import { addnewuser, fetchAlldata ,Putdata} from '../store/CURDSlice';

const validationSchema = Yup.object().shape({
  ApplyType: Yup.string().required('Apply type is required'),
});

const Form2 = ({ postman2, singledata  }) => {

  const {id, MinimumExperience, MaximumExperience, MinimumSalary, MaximumSalary, TotalEmployee } = singledata[0] || {};
  const initialValues = { MinimumExperience: MinimumExperience || '', MaximumExperience:MaximumExperience|| '', MinimumSalary:MinimumSalary || '', MaximumSalary:MaximumSalary || '', TotalEmployee:TotalEmployee || '',ApplyType:""};

  const dispatch = useDispatch();

  const onSubmit = async (obj) => {
   if(id===undefined){
    try {
      await dispatch(Setdata2Async(obj));
      await dispatch(async (dispatch, getState) => {
        const Alldata = getState().data.Form2data;
        await dispatch(addnewuser(Alldata));});
      await dispatch(fetchAlldata());
      postman2(true);
    } catch (error) {
      console.error('Error in onSubmit:', error);
    }}
   else{
    try {
      await dispatch(Setdata2Async(obj));
      await dispatch(async (dispatch, getState) => {
        const newdata = { ...getState().data.Form2data, id };
        await dispatch(Putdata(newdata));});
      await dispatch(fetchAlldata());
      postman2(true);
    } catch (error) {
      console.error('Error in onSubmit:', error);
    }}


  };


  return (
    <div className="w-[577px] p-[32px] h-[564px] border border-solid border-Card-border rounded-md bg-Card-color flex flex-col fixed z-10">
    <div className="flex justify-between w-full h-[52px] overflow-hidden">
        <h1 className="text-xl text-Font-dark">Create a job</h1>
        <h1 className="text-xl text-Font-dark">Step 2</h1>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="w-full h-[61px]  mt-6 overflow-hidden">
            <label htmlFor="Experience" className="block text-xs font-medium text-Font-dark">Experience</label>
            <div className="flex space-x-4 mt-1">
              <Field type="number" id="MinimumExperience" name="MinimumExperience" placeholder="Minimum" className="p-1 border rounded-md w-1/2" />
              <Field type="number" id="MaximumExperience" name="MaximumExperience" placeholder="Maximum" className="p-1 border rounded-md w-1/2" />
            </div>
          </div>

          <div className="w-full h-[61px]  mt-6 overflow-hidden">
            <label htmlFor="salary" className="block text-xs font-medium text-Font-dark">Salary</label>
            <div className="flex space-x-4 mt-1">
              <Field type="number" id="MinimumSalary" name="MinimumSalary" placeholder="Minimum" className="p-1 border rounded-md w-1/2" />
              <Field type="number" id="MaximumSalary" name="MaximumSalary" placeholder="Maximum" className="p-1 border rounded-md w-1/2" />
            </div>
          </div>

          <div className="w-full h-[61px]  mt-6 overflow-hidden">
            <label htmlFor="TotalEmployee" className="block text-xs font-medium text-Font-dark">Total employee</label>
            <Field type="text" id="TotalEmployee" name="TotalEmployee" placeholder="ex.100" className="mt-1 p-1 border rounded-md w-full" />
          </div>

          <h1 className="text-Font-dark font-medium mt-6">Apply type</h1>
          <div className="flex space-x-4 mt-1">
            <div className="flex items-center">
              <Field type="radio" id="QuickApply" name="ApplyType" value="QuickApply" className="mr-1 w-5 h-5 cursor-pointer" />
              <label htmlFor="QuickApply" className="mr-4 cursor-pointer">Quick Apply</label>
            </div>

            <div className="flex items-center">
              <Field type="radio" id="ExternalApply" name="ApplyType" value="ExternalApply" className="mr-1 w-5 h-5 cursor-pointer" />
              <label htmlFor="ExternalApply" className='cursor-pointer'>External Apply</label>
            </div>
          </div>
          <ErrorMessage name="ApplyType" component="div" className="text-Font-error text-xs mt-1 absolute" />

          <div  className="flex justify-end w-[70px] h-[36px]  mt-24 ml-[450px]">
            <Button type="submit" width="13" height="10" text="Save" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Form2;
