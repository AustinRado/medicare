import { Link } from 'react-router-dom';
import medicare from '../../assets/images/medicare.jpg';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

const socialLinks = [
  {
    path: "https://github.com/AustinRado/medicare",
    display:<AiFillGithub className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path: "https://twitter.com/omburo_",
    display: <AiFillTwitterCircle className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.linkedin.com/in/austin-omburo-527919268/",
    display: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: "/",
    display:"Home"
  },
  {
    path:'/',
    display:'About Us'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/',
    display:'Blog'
  },
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display:"Find a Doctor"
  },
  {
    path:'/',
    display:'Request an Appointment'
  },
  {
    path:'/',
    display:'Find a Location'
  },
  {
    path:'/',
    display:'Get a Opinion'
  },
];
const quickLinks03 = [
  {
    path: "/",
    display:"Donate"
  },
  {
    path:'/contact',
    display:'Contact Us'
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <div className='flex flex-col justify-between  md:flex-row flex-wrap gap-[30px]'>
          
          <div>
            <img src={medicare} alt='logo'/>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright © {year} developed by Rado, all rights reserved.</p>

            <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index)=><Link to={link.path} key={index}>{link.display}</Link>)}
          </div>
            </div>

         

          <div>
            <h className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'> Quick Links </h>
            <ul className='mt-3'>
              {quickLinks01.map((link, index) =>
                <li 
                key={index} 
                className='mb-4'><Link to={link.path} >{link.display}</Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'> I want to: </h>
            <ul className='mt-3'>
              {quickLinks02.map((link, index) =>
                <li 
                key={index} 
                className='mb-4'><Link to={link.path} >{link.display}</Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'> Support </h>
            <ul className='mt-3'>
              {quickLinks03.map((link, index) =>
                <li 
                key={index} 
                className='mb-4'><Link to={link.path} >{link.display}</Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
