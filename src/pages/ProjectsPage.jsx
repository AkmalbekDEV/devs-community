import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
    const { state } = useContext(ProductContext)

    return (
        <div className='text-white'>
            <div className='text-center mb-1'>
                <div className='border-b-4 p-6 inline-block w-[300px] border-collapse border-blue-500'>
                    <h1 className='text-center text-4xl font-medium'>Our Projects</h1>
                </div>
            </div>
            <div className='grid gap-16 py-14 text-white'>
                {state.map((product) => {
                    return (
                        <div className='flex items-center gap-14 max-sm:flex-col'>
                            <img className='w-[230px] rounded-2xl' src={product.poster} alt="" />
                            <div className='grid gap-7 max-sm:text-center'>
                                <h1 className='text-3xl font-medium'>{product.title}</h1>
                                <h1 className='text-xl'>{product.desc}</h1>
                                <div className='flex items-center gap-8 max-sm:flex-col'>
                                    <div className='flex gap-8'>
                                        <Link target='_blank' to={product.link} className='transition-all flex justify-center items-center px-8 py-3 rounded-lg bg-blue-500 hover:shadow-md hover:shadow-blue-600'>Demo</Link>
                                        <Link target='_blank' to={product.githubLink} className='transition-all flex justify-center items-center px-8 py-3 rounded-lg bg-blue-500 hover:shadow-md hover:shadow-blue-600'>Github</Link>
                                    </div>
                                    <h1 className='text-2xl'>Owner: {product.owner}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsPage