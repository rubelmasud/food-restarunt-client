import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="h-screen relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="">
                <h1 className='text-5xl text-center pt-12 font-mono font-bold underline'>OoPs! Data Is Not Fount!!!!</h1>
            </div>
            <div className=" flex  justify-center  ">
                <img src="https://i.ibb.co/YjCbzfX/404-removebg-preview.png" alt="404-removebg-preview" border="0"></img>
            </div>
            <div className=" text-center absolute top-[400px] right-[600px]">

                <Link><button className="btn btn-warning hover:btn-outline mx-5 btn-sm px-4">Go back</button></Link>

            </div>
        </div>
    );
};

export default ErrorPage;