import React from 'react';

const RecipeCard = ({ item }) => {

    const { foodName, img, howMake, ratting } = item
    return (

        <div className="card w-90 shadow-xl bg-slate-100 ">
            <img className='w-80 m-3 rounded h-48 mx-auto' src={img} alt="Shoes" />
            <div className="px-2 my-2 flex flex-col">
                <div className="mb-12">
                    <h2 className="card-title ">
                        {foodName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{howMake}</p>
                </div>
                <div className="card-actions  absolute  bottom-0">
                    <p className='text-secondary '> {ratting}</p>
                    <button className="btn btn-sm btn-outline btn-secondary ">Favorite </button>
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;