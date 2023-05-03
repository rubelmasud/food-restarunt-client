import React, { useContext } from 'react';
import { AuthContext } from '../Providar/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='w-11/12 mx-auto justify-center text-center '><button className="btn loading  justify-center bg-amber-400">loading</button></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;