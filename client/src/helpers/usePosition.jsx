import { useState, useEffect } from 'react';

export const useCurrentPosition = () => {
    const [position, setPosition] = useState({});

    useEffect(() => {
        const success = (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition({ latitude, longitude });
        };

        const error = () => {
            console.log('Unable to retrieve location');
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    return position;
};