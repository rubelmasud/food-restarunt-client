import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providar/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {

    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                toast("Login Is Sussesfully!");
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
            })

    }

    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-6/12 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p>Dont’t Have An Account ? <Link to='/register' className="link link-primary">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-red-600'>{error}</p>
                        </Form>
                        <ToastContainer></ToastContainer>
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