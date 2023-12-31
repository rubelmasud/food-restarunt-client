import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providar/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import img from '../../Images/3.jpg'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((error) => {
                console.log(error);
            })
    }

    return (

        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <input type="text" className='search form-control' style={{ background: 'transparent', color: 'white', }} placeholder='Search Your Foods Name' />
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "default"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "default"
                            }
                        >
                            Blogs
                        </NavLink>


                    </ul>
                </div>
                <a className="logo text-2xl lg:text-4xl text-warning">Foods Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal lg:flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "default"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "default"
                        }
                    >
                        Blogs
                    </NavLink>

                </ul>
            </div>
            <div className="navbar-end">

                {user && <img title={user?.displayName} className='w-10 h-10 rounded-full' src={user?.photoURL} alt='' />}

                {
                    user ?
                        <Link>< button onClick={handleLogout} className="btn btn-warning mx-3 btn-sm px-2">Log out</button></Link>
                        : <Link to='login'><button className="btn btn-warning mx-3 btn-sm px-4">Login</button></Link>
                }

            </div >
        </div >

    );
};

export default Header;