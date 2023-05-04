import React from 'react';
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-6 bg-slate-100'>
            <div className="">
                <h1 className='text-4xl font-bold font-mono animate-text bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 bg-clip-text text-transparent '> Indian Foods Restaurant</h1>
            </div>
            <div className="">
                <h4 className='text-2xl mb-4 font-bold font-mono underline text-amber-500'>My Restaurant Foods</h4>
                <ul className='text-gray-400'>
                    <li>Mughali Chicken</li>
                    <li>Samosas</li>
                    <li>Curry Shrimp and Rice</li>
                    <li>Bruschetta Chicken</li>
                    <li>Chicken Broccoli Casserole</li>
                    <li>Creamy Lemon Herb Chicken</li>
                </ul>
            </div>
            <div className="">
                <div className="flex gap-4">
                    <FaFacebook className='w-8 h-8 '></FaFacebook>
                    <FaYoutube className='w-8 h-8' ></FaYoutube>
                    <FaTwitter className='w-8 h-8 '></FaTwitter>
                    <FaInstagram className='w-8 h-8 '></FaInstagram>
                </div>
                <p className='flex items-center gap-1 mt-3'><FaCopyright></FaCopyright> <small className='text-gray-400'>Copyright by inforubel251@gmail.com</small></p>
            </div>
        </div>
    );
};

export default Footer;