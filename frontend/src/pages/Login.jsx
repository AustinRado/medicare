import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section className='px-5 lg:px-0'>
     <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:px-10'>
      <h3 className='text-headingColor text-center text-[22px] p-3 leading-9 font-bold mb-4'>
        Hello <span className='text-primaryColor'>Welcome</span> Back
      </h3> 

       <form className='py-4 md:py-0'>
        <div className='mb-5 px-4 md:px-2'>
         <input
          className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
          type='email'
          placeholder='Enter your email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
         />
        </div>
        <div className='mb-5 px-4 md:px-2'>
         <input
          className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
          type='password'
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          required
         />
        </div>
        <div className='mt-4 px-4 md:px-2'>
          <button 
          className='btn px-2 py-3 w-full rounded-md text-[18px] leading-[30px] rounded:lg'
          type='submit'
          >Login
          </button>
        </div>

        <p className='mt-5 text-textColor text-center'>
          Don&apos;t have an account?
          <Link to='/register'
            className='text-primaryColor font-medium ml-2'
          >Register</Link>
        </p>
       </form>
     </div>
    </section>
  )
}

export default Login
