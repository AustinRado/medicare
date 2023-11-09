import { useState } from "react";
import doctor1 from "../../assets/images/doctor1.jpeg";
import star from "../../assets/images/star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";


const DoctorDetails = () => {

  const [tab, setTab] = useState("about");
  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px]">
            <img src={doctor1}
            className="w-[full] h-[200px]"
            alt=""/>
            </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">Neurologist</span>
                <h3 className="text-headingColor text-[22px]">Dr. Kiiru Thagichu</h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={star} className='w-[10px] h-1/4 pb-[2px]'/> 4.5
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">(272)</span>
                </div>

                <p className="text__para text-[14px] leading-6 lg:text-[16px] md:text-[16px] lg:leading-7 font-[400] text-textColor lg:max-w-[390px]">Dr. Kiiru Thagichu is one of the countries leading Neurologist with an unspoken reputation and wide array of clients.</p>

              </div>
          </div>

          <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
            <button
            onClick={()=>setTab('about')} 
            className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>About</button>
            <button 
            onClick={()=>setTab('feedback')}
            className={` ${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>Feedback</button>
          </div>

          <div className="mt-[50px]">
           {tab === 'about' && <DoctorAbout/>}
           {tab === 'feedback' && <Feedback/>}
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
