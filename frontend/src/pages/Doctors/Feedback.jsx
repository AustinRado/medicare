import { useState, useEffect, } from 'react';
import wasabi from '../../assets/images/wasabi.jpeg';
import { formatDate } from '../../utils/formatDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className='mb-[30px]'>
        <h4 className='text-[20px] leading-7 font-bold text-headingColor mb-7'>All reviews (272)</h4>
     
      <div className='flex justify-between gap-10 mb-7'>
        <div className='flex gap-3'>
            <figure className='w-10 h-10'>
              <img src={wasabi} className='w-full rounded-full'/>
            </figure>

            <div>
                <h5 className='text-[16px] leading-7 text-primaryColor font-bold'>Gideon Ogot</h5>
                <p className='text-[14px] leading-6 text-textColor'>{formatDate('2023-01-01')}</p>
                <p className='text__para mt-3 font-medium text-[15px]'>Eradicated my madness, 100% recommend</p>
            </div>
        </div>

        <div className='flex gap-1 '>{[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#0067FF'/>)}
        </div>
     </div>

    </div>
        {!showFeedbackForm && <div className='text-center'>
        <button 
        onClick={()=>setShowFeedbackForm(true)}
        className='btn'>Give feedback</button>
        </div> }
        {showFeedbackForm && <FeedbackForm/>}
    </div>
  )
}

export default Feedback
