import { formatDate } from "../../../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'> About <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Dr. Kiiru Thagichu</span></h3>
            <p className='text__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate("2005-06-14")} - {formatDate("2009-09-21")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor '>PhD in Neuroscience </p>
                        
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor '>Oxford University</p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate("1997-03-18")} - {formatDate("2000-11-20")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor '>Masters in Neuroscience </p>
                        
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor '>University of Yale</p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate("1987-02-02")} - {formatDate("1995-09-27")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor '>Bsc in Neuroscience </p>
                        
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor '>University of Nairobi</p>
                </li>
            </ul>
        </div>
        
        <div className="mt-[12px]">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formatDate("1995-10-12")} - {formatDate("1997-04-21")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor '>Resident Surgeon</p>
                    <p className='text-[12px] leading-6 font-medium text-textColor '>Kenyatta Hospital. Nairobi, Kenya</p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formatDate("1997-05-12")} - {formatDate("2004-04-21")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor '>Sr. Surgeon</p>
                    <p className='text-[12px] leading-6 font-medium text-textColor '>Yale New Haven Hospital. New Haven, Connecticut</p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout
