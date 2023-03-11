import React from 'react';
import Header from "../Header/Header";

const Container = ({children}) => {
    return (
        <div className='flex flex-col w-screen min-h-screen '>
            <Header />
            {children}
        </div>
    );
};

export default Container;
