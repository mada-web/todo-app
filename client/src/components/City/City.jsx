import React from 'react';
import direction from './north.png';
import humidity from './humidity.png';
import windIcon from './wind.png';
import pressure from './resilience.png';

const City = ({ city, loading }) => {
    let wind;

    if (loading) {
        return <h2 className="flex items-center justify-center h-4/5">Loading...</h2>;
    }

    const { deg } = city.wind;

    if (deg > 340 && deg < 360) {
        wind = 'North';
    }
    if (deg > 0 && deg < 20) {
        wind = 'North';
    }
    if (deg > 40 && deg < 60) {
        wind = 'Northeast ';
    }
    if (deg > 60 && deg < 120) {
        wind = 'East';
    }
    if (deg > 120 && deg < 160) {
        wind = 'Southeast ';
    }
    if (deg > 160 && deg < 220) {
        wind = 'South';
    }
    if (deg > 220 && deg < 260) {
        wind = 'Southwest ';
    }
    if (deg > 260 && deg < 300) {
        wind = 'West ';
    }
    if (deg > 300 && deg < 340) {
        wind = 'Northwest ';
    }

    return (
        <div className="w-10/12 h-96 flex bg-center justify-between self-center items-center rounded-3xl m-8 bg-[url('./components/City/atmosfera.jpg')]">
            <div className="flex flex-col p-20 text-white">
                <div className="flex flex-col justify-center">
                    <p className="text-6xl">{city?.name}</p>
                    <div className="flex justify-between">
                        <p>{`${new Date().toDateString()}`}</p>
                        <p>{`Update As Of ${new Date(city?.dt * 1000).toLocaleTimeString()}`}</p>
                    </div>
                </div>

                <div className="flex bg-gray-50/75 text-black rounded-3xl mt-10 h-36">
                    <div className="flex flex-col ">
                        <div className="flex items-center p-4">
                            <img
                                src={humidity}
                                alt="humidityIcon"
                                className="h-10 w-10 bg-violet-600 rounded-md p-2 mr-4"
                            />
                            <p>{`Humidity ${city?.main?.humidity} %`}</p>
                        </div>
                        <div className="flex items-center p-4">
                            <img
                                src={pressure}
                                alt="pressureIcon"
                                className="h-10 w-10 bg-violet-600 rounded-md p-2 mr-4"
                            />
                            <p>{`Pressure ${Math.round(city?.main?.pressure)} GPa`}</p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex items-center p-4">
                            <img
                                src={windIcon}
                                alt="windIcon"
                                className="h-10 w-10 bg-violet-600 rounded-md p-2 mr-4"
                            />
                            <p>{`Wind ${Math.round(city?.wind?.speed)} m/s`}</p>
                        </div>
                        <div className="flex items-center p-4">
                            <img
                                src={direction}
                                alt="directionIcon"
                                className="h-10 w-10 bg-violet-600 rounded-md p-2 mr-4"
                            />
                            <p>{`${wind || 'North'}`}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center items-end m-20 p-8 text-white bg-gradient-to-b from-violet-400 to-violet-600 rounded-3xl">
                <p className="text-5xl pb-3">{`${Math.round(city?.main?.temp)} ℃`}</p>
                <p>{city?.weather[0].description.toUpperCase()}</p>
                <img
                    src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                    alt={'weather_icon'}
                    width={64}
                    height={64}
                />
                <p>
                    <span>
                        {Math.round(city?.main?.temp_min)}
                        <sup>℃</sup> -{' '}
                    </span>
                    <span>
                        {Math.round(city?.main?.temp_max)}
                        <sup>℃</sup>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default City;
