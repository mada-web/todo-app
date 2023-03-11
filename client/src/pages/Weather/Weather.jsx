import React from 'react';

import City from '../../components/City/City';
import Container from '../../components/Container/Container';
import useGetWeather from '../../helpers/useWeather';

const Weather = () => {
    const { weather, loading, error } = useGetWeather();

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <City
                city={weather}
                loading={loading}
            />
        </Container>
    );
};

export default Weather;
