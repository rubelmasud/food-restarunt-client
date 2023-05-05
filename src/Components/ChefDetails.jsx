import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { FaCalculator, FaFacebook, FaInstagram, FaShoppingBag, FaTwitter, FaUserAlt, FaYoutube } from 'react-icons/fa';
import useTitle from '../Hooks/useTitle';

const ChefDetails = () => {

    // const { id } = useParams();
    const ChefData = useLoaderData();
    useTitle('chef-Details')

    const { img, ChefName, Years_of_experience, Numbers_of_recipes, Likes, description, recipe } = ChefData

    return (
        <div className='mb-12 rounded card-body bg-slate-100'>
            <div className=" w-11/12 mx-auto lg:flex mt-12 bg-slate-100 shadow-xl">
                <img className='w-96 h-60 ml-2 mt-2 rounded' src={img} alt="Movie" />
                <div className="mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{ChefName}</h2>
                        <p className='text-gray-500'>{description}</p>
                    </div>
                    <div className="ml-8 mb-3 flex text-orange-500">
                        <p className='flex gap-2 items-center'><FaCalculator className='w-3 h-3 text-blue-600'></FaCalculator><small>Experience : {Years_of_experience} year</small></p>
                        <p className='flex gap-2 items-center'><FaShoppingBag className='w-4 h-4 text-blue-600'></FaShoppingBag><small> Recipes Items : {Numbers_of_recipes} </small></p>
                        <p className='flex items-center '>
                            <HandThumbUpIcon className='w-5 h-5 text-blue-600'></HandThumbUpIcon>
                            <small>  {Likes} Likes</small>
                        </p>
                    </div>
                    <div className="flex  gap-8 ml-8 ">
                        <Link to='https://web.facebook.com/'>    <FaFacebook className='w-5 h-5 text-blue-600'></FaFacebook></Link>
                        <Link to='https://www.youtube.com/'>  <FaYoutube className='w-5 h-5 text-rose-600' ></FaYoutube></Link>
                        <Link to='https://twitter.com/'><FaTwitter className='w-5 h-5 text-slate-500'></FaTwitter></Link>
                        <Link to='https://www.instagram.com/'>    <FaInstagram className='w-5 h-5 text-red-400'></FaInstagram></Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 mb-6">
                {
                    recipe.map(item =>
                        <RecipeCard key={item.id} item={item}></RecipeCard>
                    )
                }
            </div>
        </div >
    );
};

export default ChefDetails;