import React from 'react';
import Header from '../../Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='banner'>
            <Header></Header>
            <div className="min-h-[calc(100vh-100px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default HomeLayout;