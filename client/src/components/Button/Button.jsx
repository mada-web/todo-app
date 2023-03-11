import React from 'react';

const Button = ({ children, onClick, type }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="rounded-xl border-2 border-solid bg-violet-600 p-3 min-w-[32] m-4 hover:bg-violet-900 hover:text-white"
        >
            {children}
        </button>
    );
};

export default Button;
