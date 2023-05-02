import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-6/12 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>Dont’t Have An Account ? <Link to='/register' className="link link-primary">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" rounded-xl w-4/12 mx-auto bg-slate-400">
                <Link> <button className="btn glass w-full text-black "><FaGoogle className='mx-4 w-7 h-7 text-green-600'></FaGoogle> Continue with Google </button></Link>
            </div>
            <div className="rounded-xl bg-slate-400  w-4/12 mx-auto my-4">
                <button className="btn glass w-full text-black "><FaGithub className='mx-4 w-7 h-7 text-white'></FaGithub> Continue with Github</button>
            </div>

        </div>
    );
};

export default LoginPage;