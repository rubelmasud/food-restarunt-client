import React, { useContext, useState } from 'react';
import { Form, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providar/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleRegister = (event) => {
        event.preventDefault()

        setError('')

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Place add at least Uppercase');
            return
        }

        createUser(email, password)
            .then((result) => {
                result.user;
                setError('')
                event.target.reset();
                toast("Your Register Sussesfully!");
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })


        // user profile
        updateUserProfile({ displayName: name, photoURL: photoUrl })
            .then((result) => {
                const profile = result.user
                console.log(profile);
            }).catch((error) => {
                console.log(error);
                // An error occurred
                // ...
            });
    }

    return (
        <div>
            <div className="hero lg:min-h-screen  bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Place Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Photo url" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p>Already Have An Account ? <Link to='/login' className="link link-primary">Login</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='text-red-600'>{error}</p>

                        </Form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RegisterPage;