import React, { useState } from 'react';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Button from './components/Button';

const App = () => {
  const [isForm1Visible, setForm1Visible] = useState(false);
  const [isForm2Visible, setForm2Visible] = useState(false);

  const openForm = () => {
    setForm1Visible(true);
  };
  const toggleForm2 = () => {
    setForm2Visible(!isForm2Visible);
  };

  const postman = (obj) => {
    setForm1Visible(!obj);
    setForm2Visible(obj);
  };
  const postman2 = (obj) => {
    setForm2Visible(!obj);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div onClick={openForm} className="absolute top-0 left-0 m-4">
        <Button width="12" height="10" text="Create Job" />
      </div>
      {isForm1Visible && <Form1 postman={postman}/>}
      {isForm2Visible && <Form2 postman2={postman2}/>}
    </div>
  );
}

export default App;
