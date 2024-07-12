import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Projects = () => {
    const { state } = useContext(ProductContext)

    return (
        <div className='text-white'>
            <div className='text-center'>
                <div className='border-b-4 p-6 inline-block w-[300px] border-collapse border-blue-500'>
                    <h1 className='text-center text-4xl font-medium'>Join us</h1>
                </div>
            </div>
            <div className='grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-[50px] gap-9 text-center text-white mt-16'>
                {state.map((product) => {
                    return (
                        <div className='max-sm:flex max-sm:justify-center'>
                            <div key={product.id} className='w-[280px] grid gap-5' data-aos="fade-right">
                                <div className='flex justify-center'>
                                    <img src={product.pic} alt="" className='rounded-xl h-[160px]' />
                                </div>
                                <h1 className='text-xl font-medium'>{product.title} by {product.owner}</h1>
                                <div className='flex justify-around items-center'>
                                    <Link target='_blank' to={product.link} className='transition-all flex justify-center items-center w-[40%] h-[35px] rounded-lg bg-blue-500 hover:shadow-md hover:shadow-blue-600'>Demo</Link>
                                    <Link target='_blank' to={product.githubLink} className='transition-all flex justify-center items-center w-[40%] h-[35px] rounded-lg bg-blue-500 hover:shadow-md hover:shadow-blue-600'>Github</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects