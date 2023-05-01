import React from 'react';

const BlogPage = () => {
    return (
        <div className='w-11/12 mx-auto mt-24 mb-0 flex flex-col justify-center gap-4'>
            <h1 className='text-center headding'>Simple Fourth Quertion !!!</h1>

            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn my-3 w-6/12">1- Tell us the differences between uncontrolled and controlled components?</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Answer:</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn my-3 w-6/12">2- How to validate React props using PropTypes?</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Answer:</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn my-3 w-6/12">3- Tell us the difference between nodejs and express js.?</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Answer:</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn w-6/12">4- What is a custom hook, and why will you create a custom hook??</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Answer:</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </div >
    );
};

export default BlogPage;