import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import team from '../assets/images/team.png';
import fdoctors from '../assets/images/fdoctors.png';
import location1 from '../assets/images/location1.png';
import Book from '../assets/images/Book.png';
import About from '../components/About/About';
import Feature from '../components/Feature/Feature';
import ServicesList from '../components/Services/ServicesList';
import Doctor from '../components/Doctor/Doctor';
import Faq from '../components/Faq/Faq';
import Testimonials from '../components/Testimonials/Testimonials';


const Home = () => {
  return (
    <>
      {/*=====hero section =======*/}

        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
          <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between '>
              {/*========hero content=======*/}
              <div className='hero__section'>
                <div className='lg:w-[570px]'>
                  <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>Welcome to MediCare, Your Journey to Better Health.</h1>
                  <p className='text__para'>
                  Your Path to Better Health and Well-Being. We are dedicated to providing you with accessible, comprehensive healthcare services designed to meet your unique needs. With a team of skilled healthcare professionals and a commitment to quality patient care, we're here to support you on your journey to optimal health. Discover a world of healthcare services that prioritize your well-being and convenience.
                  </p>
                  <button className='btn'>Request an Appointment</button>
                  </div>

                {/*========hero counter=======*/}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                  <div>
                    <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]text-headingColor'>30+</h2>
                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-16px]'></span>
                    <p className='text__para'>Years of Experience</p>
                    </div>

                    <div>
                    <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]text-headingColor'>15+</h2>
                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-16px]'></span>
                    <p className='text__para'>Clinic Location</p>
                    </div>

                    <div>
                    <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]text-headingColor'>100%</h2>
                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-16px]'></span>
                    <p className='text__para'>Patient Satisfaction</p>
                    </div>
                </div>
              </div>
              {/*========hero content=======*/}
              <div className='flex gap-[30px] justify-end'>

                  <img className='w-full h-full' src={team} alt='doctor'/>
                
              </div>
            </div>
          </div>
        </section>
        {/*=======hero section end=======*/}

        <section className='pt-[60px] 2xl:pt-[100px]'>
          <div className='container'>
              <div className='lg:w-[470px] mx-auto'>
                <h2 className='heading text-center'>
                  Providing the best medical services
                </h2>
                <p className='text__para text-center'>World-class care for everyone. Our Health System offers unmatched, expert health care.</p>
              </div> 
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-'>
                   <img src={fdoctors} alt='find a doctor'/>
                  </div>

                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Caring starts with finding the right doctor. Discover your ideal healthcare partner at MediCare.</p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full boarder boarder-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                  </div>
                </div>

                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-'>
                   <img src={location1} alt='find a doctor'/>
                  </div>

                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Locating healthcare services made easy. Discover our conveniently situated facilities.</p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full boarder boarder-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                  </div>
                </div>

                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-'>
                   <img src={Book} alt='find a doctor'/>
                  </div>

                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Seamless healthcare at your fingertips. Book an Appointment and safeguard your well-being.</p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full boarder boarder-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                  </div>
                </div>
              </div>   
          
              </div>
        </section>
        <About/>

        {/*=====service section =======*/}
        <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our medical services</h2>
            <p className='text__para text-center'>Welcome to the Heart of Quality Healthcare: Explore Our Comprehensive Range of Medical Services</p>
          </div>
          <ServicesList/>
        </div>
        </section>
        {/*=====service section end =======*/}
        {/*=====feature section=======*/}
        <Feature />
        {/*======Doctor section =======*/}
        <Doctor/>
        {/*======Faq section =======*/}
        <Faq/>
        
        {/*======Testimonials section =======*/}
        <section>
          <div className="container">
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>Testimonials</h2>
                <p className='text__para text-center'>Hear from Our Satisfied Patients: Testimonials of Exceptional Care</p>
            </div>
          </div>
          <Testimonials/>
        </section>
        

    </>
  );
};

export default Home
