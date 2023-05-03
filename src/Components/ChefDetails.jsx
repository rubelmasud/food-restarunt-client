import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {

    // const { id } = useParams();
    const ChefData = useLoaderData();

    const { img, ChefName, Years_of_experience, Numbers_of_recipes, Likes, description, recipe } = ChefData

    return (
        <div className='mb-12 rounded card-body bg-slate-100'>
            <div className=" w-11/12 mx-auto lg:flex mt-12 bg-slate-100 shadow-xl">
                <img className='w-96 h-48 ml-2 mt-2 rounded' src={img} alt="Movie" />
                <div className="">
                    <div className="card-body">
                        <h2 className="card-title">{ChefName}</h2>
                        <p className='text-gray-500'>{description}</p>
                    </div>
                    <div className="ml-8 mb-3 flex gap-5 text-orange-500">
                        <p><small>Experience : {Years_of_experience} year</small></p>
                        <p><small>Recipes Items : {Numbers_of_recipes} </small></p>
                        <p className='flex items-center '>
                            <HandThumbUpIcon className='w-4 h-4'></HandThumbUpIcon>
                            <small>  {Likes} Likes</small>
                        </p>
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
        </div>
    );
};

export default ChefDetails;