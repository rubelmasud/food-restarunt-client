import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const BlogPage = () => {
    return (
        <div className='mt-12 px-12 '>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <div className=" pt-6 flex flex-col  mb-6 ref={ref}">
                <h1 className='text-center headding'>Simple Fourth Quertion !!!</h1>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn my-3 lg:w-6/12">1- Tell us the differences between uncontrolled and controlled components?</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Answer:</h3>
                        <p className="py-4">In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally!</p>
                    </div>
                </div>
                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn my-3 lg:w-6/12">2- How to validate React props using PropTypes</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Answer:</h3>
                        <p className="py-4">1- The prop can be of any data type.<br />
                            2- PropTypes.bool : The prop should be a Boolean.<br />
                            3- PropTypes.number : The prop should be a number.<br />
                            4- PropTypes.string : The prop should be a string.<br />
                            5- PropTypes.func : The prop should be a function.<br />
                            6- PropTypes.array : The prop should be an array.!</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">close</label>
                        </div>
                    </div>
                </div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn  my-3 lg:w-6/12">3- Tell us the difference between nodejs and express js.</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Answer :</h3>
                        <p className="py-4">Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">close!</label>
                        </div>
                    </div>
                </div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-4" className="btn  my-3 lg:w-6/12">4- What is a custom hook, and why will you create a custom hook?</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h3 className="text-lg font-bold">Answer :</h3>
                        <p className="py-4">Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</p>
                    </label>
                </label>
            </div>

            {/* pdf button */}
            <div className="justify-end">
                <button className="btn btn-sm btn-warning"><FaDownload className=''></FaDownload> Download pdf</button>
            </div>

        </div >
    );
};

export default BlogPage;