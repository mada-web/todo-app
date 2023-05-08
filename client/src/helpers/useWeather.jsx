import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCurrentPosition } from './usePosition';

const useGetWeather = () => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);
    const { latitude, longitude } = useCurrentPosition();

    const token = 'change_me';
    
    useEffect(() => {
        const getData = async () => {
            try {
                const ulr = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid={token}}`;

                if (latitude && longitude) {
                    const response = await axios.get(ulr);

                    setWeather(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [latitude, longitude]);

    return { weather, loading };
};

export default useGetWeather;
