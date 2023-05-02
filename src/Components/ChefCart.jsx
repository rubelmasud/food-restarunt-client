import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

const ChefCart = ({ singleChef }) => {
    const { id, img, ChefName, Years_of_experience, Numbers_of_recipes, Likes } = singleChef
    return (
        <div>
            <div className="shadow lg:h-52 hover:text-orange-700 my-2 rounded lg:flex gap-2 hover:-translate-y-4 duration-500 hover:bg-orange-100">
                <img className='h-48 w-48 mb-2 mt-2 rounded mx-auto' src={img} alt="" />
                <div className="text-center lg:text-left mr-2 mt-2 flex flex-col justify-between">
                    <div className="text-center">
                        <h3 className='text-1xl font-mono font-semibold'>{ChefName}</h3>
                        <p><small>Experience : {Years_of_experience} year</small></p>
                        <p><small>Recipes Items :{Numbers_of_recipes}</small></p>
                        <p className='flex items-center gap-2 ml-16 lg:ml-4'><HandThumbUpIcon className="h-4 w-4 text-blue-500" /><small>{Likes}</small></p>
                    </div>
                    <div className="mb-5 ">

                        <button className="btn btn-outline  btn-sm btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCart;