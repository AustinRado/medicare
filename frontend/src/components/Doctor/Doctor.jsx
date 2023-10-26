import DoctorList from "./DoctorList";

const Doctor = () => {
  return (
    <section>
     <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our great doctors</h2>
            <p className='text__para text-center'>Meet Our Exceptional Team of Healthcare Professionals – Your Trusted Partners in Wellness</p>
        </div>
        <DoctorList/>
     </div>
    </section>
  )
}

export default Doctor
