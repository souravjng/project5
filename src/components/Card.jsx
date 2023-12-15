import React from 'react';
import Button from './Button';
import TrashIconComponent from '../icons/TrashIcon';
import PencilIconComponent from '../icons/PencilIcon';
import { useDispatch } from 'react-redux';
import {deleteUser} from '../store/CURDSlice';
import {EditData} from '../store/DataSlice';


const Card = (curr) => {
  const { id, JobTitle, CompanyName,Industry,RemoteType, Location, MinimumSalary,MaximumSalary,MinimumExperience,MaximumExperience,TotalEmployee,ApplyType, } = curr;
  const dispatch = useDispatch();
   const deleteitem=(id)=>{
    dispatch(deleteUser(id));
  }
  const changedata=(id)=>{
    dispatch(EditData(id));
  }

  return (
    <div className="w-782 h-288 p-4 ml-10 mt-5 bg-Card-color rounded-lg flex border border-Card-border ">
      <div className="flex-shrink-0">
        <img src="https://about.netflix.com/images/meta/netflix-symbol-black.png" alt="Netflix Logo" className="w-12 h-12 object-cover rounded "/>
      </div>
      <div key={id} style={{ width: '422px' }} className="ml-8 flex flex-col w-722">
        <p className="text-xl text-Font-dark">{JobTitle}</p>
        <p className="text-l text-Font-dark">{CompanyName} - {Industry}</p>
        <p className="text-l text-Font-placeholder">{Location}({RemoteType})</p>
        <p className="text-l mt-6 text-Font-dark">Part-Time (9:00 am - 5:00 pm IST)</p>
        <p className="text-l mt-2 text-Font-dark">Experience ({MinimumExperience}-{MaximumExperience} years)</p>
        <p className="text-l mt-2 text-Font-dark">INR(₹) {MinimumSalary}-{MaximumSalary} / Month</p>
        <p className="text-l mt-2 text-Font-dark">{TotalEmployee} employees</p>
        <div className="flex mt-6 text-Font-dark">
          <div className="mr-4">
            <Button type="submit" width="29" height="10" text="Apply Now" />
          </div>
          <div >
            <button className='w-34 h-10 bg-none text-Primary-color pl-4 pr-4 pt-2 pb-2 rounded-md border border-Primary-color ' type="submit" width="29" height="10" >{ApplyType}</button>
          </div>
        </div>
      </div>
      <div style={{ width: '300px' }} className="relative">
  <div onClick={()=>deleteitem(id)} className="absolute top-0 right-0 cursor-pointer">
    <TrashIconComponent />
  </div>
  <div onClick={()=>changedata(id)} className="absolute top-0 right-10 cursor-pointer">
    <PencilIconComponent />
  </div>
</div>
    </div>
  );
};

export default Card;
