import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from '../../components/loader/Loading';
import Error from '../../components/Error/Error';
import DoctorCard from '../../components/Doctor/DoctorCard';

const MyBooking = () => {

  const {
    data:appointments, 
    loading, 
    error
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointment`);

  return (
    <div>
    {loading && !error && <Loading/>}
    {error && !loading && <Error errMessage={error}/>}
    {!loading && !error && (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          appointments.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor}/>
        ))}
      </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className='mt-5 text-center text-primaryColor text-[20px] leading-7 font-semibold'>
        No Appointments!
        </h2>
      )}
    </div>
  )
}

export default MyBooking