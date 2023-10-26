import healthTeam from '../../assets/images/healthTeam.png';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between gap-[50px] lg:gap-0'>
            <div className='w-3/4 md:w-auto mx-auto text-center'>
                <img src={healthTeam} alt='team'/>
            </div>
            <div className='w-full md:w-1/2'>
                <h2 className='heading'>Frequently asked questions by our beloved patients</h2>
                <FaqList/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
