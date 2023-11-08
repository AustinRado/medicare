import doctor1 from "../../assets/images/doctor1.jpeg";
import star from "../../assets/images/star.png";

const DoctorDetails = () => {
  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px]">
              <img src={doctor1}
              className="w-[full] h-[100px]"
              alt=""/>
            </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">Neurologist</span>
                <h3 className="text-headingColor text-[22px]">Dr. Kiiru Thagichu</h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={star}/>
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
