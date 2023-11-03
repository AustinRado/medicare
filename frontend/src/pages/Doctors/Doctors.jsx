import React from 'react';
import Doctor from '../../components/Doctor/Doctor';
import Testimonials from '../../components/Testimonials/Testimonials';

const Doctors = () => {
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a doctor</h2>
          <div className='max-w-[570px] mt-7 mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input 
              type='search' 
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none'
               placeholder='Search for a doctor' />
               <button className='btn text-black mt-0 rounded-[0px] rounded-r-md'>Search</button>
          </div>
        </div>
        
      </section>
      <Doctor/>
      <Testimonials/>
    </>
  )
}

export default Doctors
