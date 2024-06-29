import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import skillsJson from './SkillsJson'
import { Autoplay, FreeMode, Keyboard, Mousewheel, Zoom } from 'swiper/modules'

const Skills = () => {
    return (
        <div className='text-white mt-20'>
            <div className='text-center mb-14'>
                <div className='border-b-4 p-6 inline-block w-[300px] border-collapse border-blue-500'>
                    <h1 className='text-center text-4xl font-medium'>Our Skills</h1>
                </div>
            </div>
            <div className='rounded-xl bg-blue-950'>
                <Swiper className='grid grid-cols-9 gap-7 p-5'
                    slidesPerView={5}
                    modules={[Autoplay, FreeMode, Autoplay, Mousewheel, Zoom, Keyboard]}
                    autoplay={{ delay: 0 }}
                    mousewheel={{ invert: true }}
                    zoom={true}
                    keyboard={{ enabled: true, onlyInViewport: false }}
                    loop={true}
                    speed={3200}
                    freeMode={true}
                    breakpoints={{
                        300: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                        },
                        760: {
                            slidesPerView: 5,
                        }
                    }}
                >
                    {skillsJson.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <img className='w-[100px] rounded-3xl' src={product.img} alt="" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Skills