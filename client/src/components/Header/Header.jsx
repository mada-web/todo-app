import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from './constants';

const Header = () => {
    const inActiveClassName =
        'flex align-center justify-center rounded-xl hover:bg-violet-600 mr-10 p-2 h-10 min-w-[30%] hover:text-white';
    const activeClassName =
        'flex align-center justify-center rounded-xl hover:bg-violet-600 bg-violet-600 h-10 min-w-[30%] mr-10 p-2 text-white';

    return (
        <header className="flex items-center justify-center h-20 w-screen ">
            <div className="flex justify-between w-4/5">
                <div className="flex flex-col">
                    <span className='font-sans text-4xl after:content-[""] after:bg-slate-500 after:h-px after:block'>
                        Artsem Rubashka
                    </span>
                    <span className="font-mono">SOFTWARE DEVELOPMENT</span>
                </div>
                <nav className="flex items-center">
                    {navigation.map((el) => (
                        <NavLink
                            to={el.to}
                            children={el.name}
                            className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
                            key={Math.random()}
                        />
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
