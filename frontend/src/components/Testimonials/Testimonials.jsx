import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'Swiper/css';
import 'Swiper/css/pagination';
import star from '../../assets/images/star.png';
import brownskin from '../../assets/images/brownskin.jpeg';
import wasabi from '../../assets/images/wasabi.jpeg';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640:{
          slidesPerView:1,
          spaceBetween:0,
        },
        768:{
          slidesPerView:2,
          spaceBetween:20,
        },
        1024:{
          slidesPerView:3,
          spaceBetween:30,
        },
      }}
    >
    <SwiperSlide>
      <div className='py-[30px] px-5 rounded-[13px]'>
        <div className='flex items-center gap-[13px]'>
          <img src={brownskin} className='w-1/4 h-1/4 rounded-full' alt='logo'/>
          <div>
            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Hellen Karuga</h4>
            <div className='flex items-center gap-[2px]'>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
            </div>
          </div>
        </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "I have recieved the best medical care I could possibly get for my skin. All thanks to Dr. Mitchelle Jepkorir"
          </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='py-[30px] px-5 rounded-[13px]'>
        <div className='flex items-center gap-[13px]'>
          <img src={brownskin} className='w-1/4 h-1/4 rounded-full' alt='logo'/>
          <div>
            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Hellen Karuga</h4>
            <div className='flex items-center gap-[2px]'>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
              <HiStar className='text-yellowColor w-[18px] h-5'/>
            </div>
          </div>
        </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "I have recieved the best medical care I could possibly get for my skin. All thanks to Dr. Mitchelle Jepkorir"
          </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='py-[30px] px-5 rounded-[13px]'>
      <div className='flex items-center gap-[13px]'>
        <img src={wasabi} className='w-1/4 h-1/4 rounded-full' alt='logo'/>
        <div>
          <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Gideon Ogot</h4>
          <div className='flex items-center gap-[2px]'>
            <HiStar className='text-yellowColor w-[18px] h-5'/>
            <HiStar className='text-yellowColor w-[18px] h-5'/>
            <HiStar className='text-yellowColor w-[18px] h-5'/>
            <HiStar className='text-yellowColor w-[18px] h-5'/>
            <HiStar className='text-yellowColor w-[18px] h-5'/>
          </div>
        </div>
      </div>
        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
          "Dr. Jack Okotto saved my liver and most of my organs. I am forever indebted to his excellent services."
        </p>
    </div>
    </SwiperSlide>
  
    </Swiper>
    </div>
  )
}

export default Testimonials
