import {useContext, useState} from 'react';
import { authContext } from '../../context/AuthContext';
import docAvatar from '../../assets/images/docAvatar.png'

const MyAccount = () => {

    const {dispatch} = useContext(authContext);
    const [tab, setTab] = useState('bookings');

    /**
     * handleLogout - logout functionality
     */
    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
    }

  return (
    <div className = 'max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className = 'pb-[50px] px-[30px] rounded-md'>
                <div className='flex items-center justify-center'>
                    <figure className='w-[100px] h-[100px] rounded-full border-solid border-2 border-primaryColor'>
                        <img
                            className = 'w-full h-full object-cover rounded-full'
                            src={docAvatar}
                            alt=''    
                        />
                    </figure>
                </div>

                <div className='text-center mt-4'>
                    <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>Austin Rado</h3>
                    <p className=' text-textColor text-[18px] leading-6 font-medium'>example@gmail.com</p>
                    <p className=' text-textColor text-[18px] leading-6 font-medium'>Blood Type:
                        <span className='ml-2 text-headingColor text-[22px] leading-8'>O</span>
                    </p>
                </div>
                <div className='mt-[50px] md:mt-[100px] text-white'>
                    <button 
                        className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md'
                        onClick={handleLogout}>
                        Logout
                    </button>
                    <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md'>Delete account</button>
                </div>
            </div>

            <div className='md:col-span-2 md:px-[30px]'>
                <div>
                    <button 
                        onClick={()=>setTab('bookings')}
                        className={`${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 mr-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                        My Bookings
                        </button>
                    <button
                        onClick={()=>setTab('settings')} 
                        className={`${tab==='settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>
                        Profile Settings
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAccount
