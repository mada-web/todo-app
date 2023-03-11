import React, { useEffect, useState } from 'react';

import gift from './middle.gif';
import greeting from './bean.gif';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import axios from 'axios';

const Home = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState();

    const showOnClick = () => {
        setShow((state) => !state);
    };

    const buttonName = !show ? 'FIND YOUR GIFT' : 'GOTCHA';

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:8888');
            setData(response.data);
        };

        getData();
    }, []);

    return (
        <Container>
            <div className="flex flex-col items-center justify-center w-full h-full">
                {!show && <h1 className="text-5xl p-6">VELCOM!</h1>}
                {show && <h1 className="text-5xl p-6">YOU WIN! CONGRATULATIONS!</h1>}
                {!show && (
                    <img
                        src={greeting}
                        alt="Hello!"
                        style={{ height: 252 }}
                    />
                )}
                {show && (
                    <img
                        src={gift}
                        alt="Gift"
                        style={{ height: 252 }}
                    />
                )}

                <div className="absolute bottom-1/4">
                    <Button
                        children={buttonName}
                        onClick={showOnClick}
                    />
                </div>

                {data && (
                    <span className="absolute bottom-32 ">
                        Server: <span className="text-green-500">{data}</span>
                    </span>
                )}
                {!data && (
                    <span className="absolute bottom-32 ">
                        Server: <span className="text-red-500 ">OFF</span>
                    </span>
                )}
            </div>
        </Container>
    );
};

export default Home;
