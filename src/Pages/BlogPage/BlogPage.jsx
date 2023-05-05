import React, { useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const BlogPage = () => {
    useTitle('blog')

    const [loader, setLoader] = useState(false)

    const DownloadPDF = () => {
        const capture = document.querySelector('.blog-page')
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imageData = canvas.toDataURL('img/png')
            const doc = new jsPDF('p', 'mm', 'a4')
            const componentsWidth = doc.internal.pageSize.getWidth();
            const componentsHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imageData, "PNG", 0, 0, componentsWidth, componentsHeight);
            setLoader(false)
            doc.save('blog-page')
        })
    }

    return (

        <div className='  bg-slate-100 py-12'>
            <div className="  px-12 flex flex-col  mb-6 blog-page">
                <h1 className='text-center headding'>Simple Fourth Quertion !!!</h1>
                <div className="blog-card">
                    <h3 className='question'>1- Tell us the differences between uncontrolled and controlled components?</h3>

                    <p>  In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally!</p>
                </div>

                <div className="blog-card">
                    <h3 className='question'>2- How to validate React props using PropTypes</h3>
                    <p>1- The prop can be of any data type.<br />
                        2- PropTypes.bool : The prop should be a Boolean.<br />
                        3- PropTypes.number : The prop should be a number.<br />
                        4- PropTypes.string : The prop should be a string.<br />
                        5- PropTypes.func : The prop should be a function.<br />
                        6- PropTypes.array : The prop should be an array.!</p>
                </div>
                <div className="blog-card">
                    <h3 className='question'>3- Tell us the difference between nodejs and express js.</h3>
                    <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"
                    </p>
                </div>
                <div className="blog-card">
                    <h3 className='question'>4- What is a custom hook, and why will you create a custom hook?.</h3>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code
                    </p>
                </div>

            </div>


            < div className="mb-6 text-center" >
                <button
                    onClick={DownloadPDF}
                    disabled={(!loader === false)}
                    className="btn btn-sm btn-warning btn-outline "><FaDownload className='mx-2 text-blue-700'></FaDownload>
                    {loader ? (<span>Downloading</span>) : (<span>Download</span>)}
                </button>
            </div >

            <hr />
        </div >




    );
};

export default BlogPage;