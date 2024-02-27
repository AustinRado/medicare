import {useEffect, useState} from 'react';
import { token } from '../config';
import { toast } from'react-toastify';

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    headers:{Authorization: `Bearer ${token}`}
                });
                const result = await res.json();
                if (!res.ok) {
                    throw new Error(result.message);
                }
             setData(result.data);
             setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            } 
         };
            fetchData(); 
        }, [url]);
    
  return (
    {
        data, 
        isLoading, 
        error,
    }
  );
};

export default useFetchData;