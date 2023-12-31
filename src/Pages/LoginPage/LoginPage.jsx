import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaGithub, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Providar/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const LoginPage = () => {


    const [showPassword, setShowPassword] = useState(false)
    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    useTitle('login')


    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')

        if (password < 6) {
            setError('The password is less than 6 characters')
        }

        signIn(email, password)
            .then((result) => {
                result.user;
                navigate(from, { replace: true })
                alert('Login SussesFully ')
                toast("Login Is Susses fully!");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
            })

    }

    const handleSignInToGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                toast("Login Is Susses fully!");
                alert('Login SussesFully ')
            })
            .catch((error) => {
                console.log(error);

            })
    }

    const handleSignInToGithub = () => {
        signInGithub()
            .then((result) => {
                const githubUser = result.user
                console.log(githubUser);
                navigate(from, { replace: true })
                toast("Login Is Susses fully!");
                alert('Login SussesFully ')
            })
            .catch((error) => {
                console.log(error);

            })
    }

    return (
        <div className='bg-base-200 mb-0'>
            <div className="hero ">
                <div className="hero-content flex-col lg:w-6/12 ">
                    <div className="text-center">
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
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                                <p onClick={() => setShowPassword(!showPassword)}><small>
                                    {
                                        showPassword ? <small className='flex items-center gap-1 mt-2'><FaEye></FaEye> Show password</small>
                                            : <small className='flex items-center gap-1 mt-2'><FaEye></FaEye> Hide Password</small>
                                    }
                                </small></p>
                            </div>
                            <p>Dont’t Have An Account ? <Link to='/register' className="link link-primary">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-red-600'>{error}</p>

                        </Form>
                    </div>
                </div>
            </div>
            <div className="px-12">
                <div className=" rounded-xl lg:w-4/12 mx-auto bg-slate-400">
                    <Link> <button onClick={handleSignInToGoogle} className="btn glass w-full text-black "><FaGoogle className='mx-4 w-7 h-7 text-green-600'></FaGoogle> Continue with Google </button></Link>
                </div>
                <div className="rounded-xl bg-slate-400 mb-6 lg:w-4/12 mx-auto my-4">
                    <button onClick={handleSignInToGithub} className="btn glass w-full text-black "><FaGithub className='mx-4 w-7 h-7 text-white'></FaGithub> Continue with Github</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LoginPage