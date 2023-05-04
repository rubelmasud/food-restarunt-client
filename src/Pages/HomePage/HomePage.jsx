import React, { useEffect, useState } from 'react';
import img from '../../Images/R__1_-removebg-preview.png'
import FoodSlider from '../../Components/FoodSlider';
import ChefCart from '../../Components/ChefCart';
import AboutUs from '../../Components/AboutUs';



const HomePage = () => {

    const [allChef, setAllChef] = useState([])

    useEffect(() => {
        fetch(`https://server-rubelmasud.vercel.app/allChefData`)
            .then(res => res.json())
            .then(data => setAllChef(data))
    }, [])


    return (
        <>
            <div className='lg:flex grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto my-20 items-center'>
                <div className="lg:w-6/12">
                    <h1 className='text-4xl font-mono font-bold text-warning'>Welcome To Your <span className=' text-4xl'>Food Restaurant</span></h1>
                    <p className='text-white my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae ad obcaecati. Eos libero itaque necessitatibus hic alias magnam tempore earum modi, consequuntur repellendus odio neque ratione ex rerum tempora.</p>
                    <button className="btn btn-outline btn-warning btn-sm">Check Menu</button>
                </div>
                <div className="mx-5">
                    <img className='rounded' src={img} alt="" />
                </div>
            </div>
            <main className=''>
                {/* foods section */}
                <div className="mt-36 mx-12 bg-slate-100 text-amber-500 px-6 font-mono rounded">
                    <h1 className='text-center text-3xl font-bold underline pt-6 my-12'>My Restaurant Foods !!!</h1>
                    <FoodSlider></FoodSlider>
                </div>

                {/* Restaurant Chef section */}
                <div className="bg-slate-100 mb-12 mx-12 rounded px-3">
                    <h1 className='text-center text-amber-500 font-mono pt-6 text-3xl font-bold underline my-12'>Restaurant Chef Services !!!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                        {
                            allChef.map(singleChef =>
                                <ChefCart
                                    key={singleChef.id}
                                    singleChef={singleChef}
                                >
                                </ChefCart>
                            )
                        }
                    </div>
                </div>
                {/* about section */}
                <AboutUs></AboutUs>

            </main>
        </>
    );
};

export default HomePage;