"use client";
import {Typography,EyeIcon } from '@/components/RemoteComponents';
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react';
const archiViewDetailPopup = ({ open, onclose,architect}) => {
  
  const [requestDetails,setData]=useState(architect)
useEffect(()=>{
  setData(architect)
},[architect])
useEffect(()=>{
  console.log(requestDetails)
},[requestDetails])

  
return (  <div onClick={onclose} className={`fixed top-0 left-0  w-full h-full flex justify-center items-center
  ${open ? "visible bg-black bg-opacity-50" : "invisible"}`}>
       {/*  modal*/}

       {requestDetails && (  <div  onClick={(e) => e.stopPropagation()}
          className='bg-white rounded-xl shodow p-6 transition-all w-auto '  >
          <div className='flex flex-row  justify-between mt-3'>
             <div className='flex flex-row items-center gap-2'>
             <EyeIcon className=' size-6 text-[#212121]'/>
             <Typography className=' text-lg font-bold text-[#212121]'>
             Détails Archhitecte
             </Typography> </div>
             <div onClick={onclose} className="cursor-pointer  ">
                <IoMdClose   className="size-6 text-[#212121]" />
                </div> </div>
          
          <div className=' flex flex-row  mt-5 border-solid border-2 border-[#DFDFDF] rounded-lg   p-5  bg-[#fdfdfd] '>
          <div className='flex flex-col  gap-7  font-semibold'>
          <p>Nom et prénom </p>
<p>Email </p>
<p>Adresse </p>
<p>Identificateur </p>
<p>Matricule fiscale </p>
<p>Numéro de téléphone</p>
</div>
<div className='flex flex-col ml-9  gap-7 ' >
  <div className='flex flex-row gap-2' > 
  <p>{requestDetails.first_name}</p>
  <p>{requestDetails.last_name}</p>
  </div>
   <p>{requestDetails.email}</p>
   <p>{requestDetails.adresse}</p>
   <p>{requestDetails.arch_identifier}</p>
   <p>{requestDetails.registration_number}</p>
   <p>{requestDetails.phone_number}</p>
</div>
       <div className='flex flex-col  ml-16  gap-7  font-semibold '>
   <p>Type d’architecte</p>
<p>Date de réunion </p>
<p>heure de réunion </p>
<p>Responsable </p>
<p>Décision </p>
</div>
<div className='flex flex-col ml-9  gap-7 ' >
<p>{requestDetails.architect_type}</p>
   <p>{new Date(requestDetails.meeting_date).toLocaleDateString()}</p>
   <p>{requestDetails.meeting_time}</p>
   <p>.....</p>
   <p>
  {requestDetails.status && <span style={{ color: requestDetails.status === "Accepted" ? "#16B364" : requestDetails.status === "Refused" ? "#B71D18" : "#E18000" }}>{requestDetails.status}</span>}
</p>
       </div>
      </div></div>)}
     </div>
 )
   

 
}
// Assuming `requestDetails.data` is an array of architect objects

export default archiViewDetailPopup