import React from 'react';
import Header from '../../Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="lg:min-h-[calc(100vh-100px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;