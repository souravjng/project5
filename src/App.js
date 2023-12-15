import React, { useEffect, useState } from 'react';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Button from './components/Button';
import Card from './components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlldata } from './store/CURDSlice';

const App = () => {
  const [isForm1Visible, setForm1Visible] = useState(false);
  const [isForm2Visible, setForm2Visible] = useState(false);
  
  const singleData = useSelector((state) => state.data.SingleData);
  const getdata = useSelector((state) => state.data.Fetchdata);


  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchAlldata());}, [dispatch]);
  useEffect(() => {if (singleData !== null && Object.keys(singleData).length > 0) {setForm1Visible(true);}}, [singleData]);
  

  const openForm = () => {
    setForm1Visible((prevState) => !prevState);};

  const postman = (obj) => {
    setForm1Visible(!obj);
    setForm2Visible(obj);};

  const postman2 = (obj) => {
    setForm2Visible(!obj);};

  return (
    <div className="flex mt-20 justify-center h-fit">
      <div onClick={openForm} className="absolute top-0 left-0 m-4">
        <Button width="25" height="10" text="Create Job" />
      </div>
      {isForm1Visible && <Form1 singledata={singleData} postman={postman} />}
      {isForm2Visible && <Form2 singledata={singleData} postman2={postman2} />}
      <div className="flex flex-wrap">
        {getdata.map((curr) => {
          return <Card key={curr.id} {...curr} />;
        })}
      </div>
    </div>
  );
};

export default App;
