import React from 'react';
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-6 bg-slate-100'>
            <div className="">
                <h1 className='text-4xl font-mono font-bold text-amber-500'> Indian Foods Restaurant</h1>
            </div>
            <div className="">
                <h4 className='text-2xl  mb-4 font-bold font-mono underline text-amber-500'>My Restaurant Foods</h4>
                <div className="flex gap-6">
                    <div className='text-blue-600'>
                        <li>Mughali Chicken</li>
                        <li>Samosas</li>
                        <li>Curry Shrimp and Rice</li>
                        <li>Bruschetta Chicken</li>
                        <li>Chicken Broccoli Casserole</li>
                        <li>Creamy Lemon Herb Chicken</li>
                    </div>
                    <div className='text-blue-600'>
                        <li>Mughali Chicken</li>
                        <li>Samosas</li>
                        <li>Curry Shrimp and Rice</li>
                        <li>Bruschetta Chicken</li>
                        <li>Chicken Broccoli Casserole</li>
                        <li>Creamy Lemon Herb Chicken</li>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="flex gap-8 ml-6">
                    <Link to='https://web.facebook.com/'>    <FaFacebook className='w-5 h-5 text-blue-600'></FaFacebook></Link>
                    <Link to='https://www.youtube.com/'>  <FaYoutube className='w-5 h-5 text-rose-600' ></FaYoutube></Link>
                    <Link to='https://twitter.com/'><FaTwitter className='w-5 h-5 text-slate-500'></FaTwitter></Link>
                    <Link to='https://www.instagram.com/'>    <FaInstagram className='w-5 h-5 text-red-400'></FaInstagram></Link>
                </div>

                <div className="ml-6 mt-6 ">
                    <p className='text-gray-400 text-xs mb-1'>Email : inforubel251@gmail.com</p>
                    <p className='text-gray-400 text-xs'>Phone : 001168-73287886-23</p>
                </div>
                <div className="border mt-2"></div>
                <p className='flex items-center gap-1 mt-3 ml-6'><FaCopyright className='text-amber-500'></FaCopyright> <small className='text-gray-400'>Copyright by Foods Restaurant</small></p>
            </div>
        </div>
    );
};

export default Footer;