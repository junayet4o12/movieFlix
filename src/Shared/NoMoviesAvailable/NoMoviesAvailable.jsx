import React from 'react';
import { TbMoodEmpty } from "react-icons/tb";
const NoMoviesAvailable = () => {
    return (
        <div className='flex justify-center items-center gap-5 flex-col text-white'>
            <h2 className='text-8xl'><TbMoodEmpty/></h2>
            <h3 className='text-xl'>No Movie Found!!</h3>
        </div>
    );
};

export default NoMoviesAvailable;