import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';

const RecipeCard = ({ item }) => {
    const { foodName, img, howMake, ratting } = item
    // const [rating, setRating] = useState(ratting)
    const [disabled, setDisabled] = useState(false)

    const handleDesible = () => {
        toast(" This Chef Favorite Sussesfully!");
        setDisabled(true)
    }

    return (

        <div className="card w-90 shadow-xl bg-slate-100 my-6">
            <img className='w-80 m-3 rounded h-48 mx-auto' src={img} alt="Shoes" />
            <div className="px-2 my-2 flex flex-col">
                <div className="mb-12">
                    <h2 className="card-title ">
                        {foodName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p >{howMake}</p>
                </div>
                <div className="card-actions  absolute  bottom-0">
                    <p className='text-secondary flex items-center gap-3'><Rating style={{ maxWidth: 100 }} value={ratting} /> {ratting}</p>
                    <button onClick={handleDesible} disabled={disabled} className="btn btn-sm btn-outline btn-secondary ">Favorite </button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div >

    );
};

export default RecipeCard;