import React from 'react'
import aboutImage from '../assets/about.png'
import MyForm from './Message';

const Group = () => {
    return (
        <div className='grid gap-10 mt-20 text-white max-sm:mb-9'>
            <div className='text-center'>
                <div className='border-b-4 p-6 inline-block w-[300px] border-collapse border-blue-500'>
                    <h1 className='text-center text-4xl font-medium'>Join us</h1>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-[50%] flex justify-center items-center max-sm:hidden'>
                    <img data-aos="fade-up-right" src={aboutImage} alt="" />
                </div>
                <div
                    data-aos="flip-right"
                    className="rounded-2xl md:w-1/3 dark:text-light text-dark shadow-[#d9bcb3] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f1f556] p-4 md:m-3 m-1 shadow-2xl w-full"
                >
                    <MyForm />
                </div>
            </div>
        </div>
    )
}

export default Group