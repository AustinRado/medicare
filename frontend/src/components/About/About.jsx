import { Link } from 'react-router-dom';
import docHer from '../../assets/images/docHer.png';

const About = () => {
  return (
    <section className='pt-[60px] 2xl:pt-[100px]'>
        <div className="container">
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>About Us</h2>
                <p className='text__para text-center'>Get to know us</p>
            </div>
            <div className="flex justify-between pt-[40px] gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/*==========about img==========*/}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1">
                    <img src={docHer} className='h-[90%]' alt="about"/>
                </div>

                {/*==========about img==========*/}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nations best</h2>
                    <div className='text__para' >
                    MediCare, one of the nation's premier healthcare providers, is committed to delivering top-tier medical services with unwavering standards of quality and compassion.
                    </div>
                    <div className='text__para' >
                    This recognition motivates us to innovate and enhance our healthcare offerings, reaffirming our commitment to your well-being. We eagerly anticipate the opportunity to care for you with dedication and expertise, making your health our top priority.
                    </div>
                    <Link to='/'>
                        <button className='btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About