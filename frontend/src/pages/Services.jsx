import ServicesList from '../components/Services/ServicesList';

const Services = () => {
  return (
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical services</h2>
          <p className='text__para text-center'>Welcome to the Heart of Quality Healthcare: Explore Our Comprehensive Range of Medical Services</p>
        </div>
        <ServicesList/>
      </div>
    </section>
  )
}

export default Services
