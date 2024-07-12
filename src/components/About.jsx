import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import akmalImage from '../assets/akmalImage.jpg'
import qadamboyImage from '../assets/qadamboyImage.jpg'
import ilyosImage from '../assets/ilyosImage.jpg'

const About = () => {
    const AkmalDev = 'https://github.com/AkmalbekDEV'
    const QadamboyDev = 'https://github.com/QadamboyDev09'
    const IlyosDev = 'https://github.com/xurmatovilyosbek'

    return (
        <div className='text-white'>
            <div className='text-center'>
                <div className='border-b-4 p-6 inline-block w-[300px] border-collapse border-blue-500'>
                    <h1 className='text-center text-4xl font-medium'>About Us</h1>
                </div>
            </div>
            <Swiper navigation={{ clickable: true, }} slidesPerView={1} modules={[Navigation]} hashNavigation={true} className="mySwiper py-[100px]">
                <SwiperSlide>
                    <div className='flex max-sm:flex-col max-sm:text-center gap-10 items-center'>
                        <img src={akmalImage} alt="" className='h-[400px] w-[400px] object-contain max-sm:h-[300px] max-sm:w-[300px] rounded-[10%] ml-16 max-sm:ml-0' />
                        <div className='grid gap-10'>
                            <a href={AkmalDev} className='text-4xl font-bold max-sm:text-3xl'>Akmal Developer</a>
                            <h3 className='max-sm:text-md text-xl font-medium pr-16 max-sm:pr-14 max-sm:pl-14'>Hi, I'm Akmal Developer. The leader of the DevS Community. I'm a Frontend Junior developer and my skills are: <span className='text-blue-500'>HTML, CSS, JavaScript, JAVA, Tailwind CSS, Bootstrap, React JS, Chakra UI, Swiper.</span> I'm a graduate of Data Learning Center as a Frontend Junior developer. I'm Uzbek, but I know English because of the Top Language Center. Thanks a lot to my teachers from us!</h3>
                            <div className='max-sm:w-full max-sm:flex max-sm:justify-center'>
                                <a href='https://www.canva.com/design/DAGJIjb6zoo/3CCS8nylDcA_99YvTnu8QA/edit?utm_content=DAGJIjb6zoo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' download className='w-[150px] h-[40px] rounded-lg bg-blue-500 text-white hover:shadow-md hover:shadow-blue-500 text-lg font-medium transition-all duration-300 flex justify-center items-center active:bg-blue-700' target='_blank'>Download CV</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex max-sm:flex-col max-sm:text-center gap-10 items-center'>
                        <img src={qadamboyImage} alt="" className='h-[400px] w-[400px] object-contain max-sm:h-[300px] max-sm:w-[300px] rounded-[10%] ml-16 max-sm:ml-0' />
                        <div className='grid gap-10'>
                            <a href={QadamboyDev} className='text-4xl font-bold max-sm:text-3xl'>Qadamboy Developer</a>
                            <h3 className='max-sm:text-md text-xl font-medium pr-16 max-sm:pr-14 max-sm:pl-14'>
                                Hi, I'm Qadamboy Developer. The membership of the DevS Community. I'm a Frontend Junior developer and my skills are: <span className='text-blue-500'>HTML, CSS, JavaScript, JAVA, Tailwind CSS, Bootstrap, React JS, Chakra UI, Swiper. </span> I'm a graduate of Data Learning Center as a Frontend Junior developer. I'm Uzbek, but I know English because of my teachers. Thanks a lot to my teachers from us!
                            </h3>
                            <div className='max-sm:w-full max-sm:flex max-sm:justify-center'>
                                <a href='https://www.canva.com/design/DAGJaHpUOn0/xGEnkj3oC8M5PtIaUL67zQ/edit?utm_content=DAGJaHpUOn0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' download className='w-[150px] h-[40px] rounded-lg bg-blue-500 text-white hover:shadow-md hover:shadow-blue-500 text-lg font-medium transition-all duration-300 flex justify-center items-center active:bg-blue-700' target='_blank'>Download CV</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex max-sm:flex-col max-sm:text-center gap-10 items-center'>
                        <img src={ilyosImage} alt="" className='h-[400px] w-[400px] object-contain max-sm:h-[300px] max-sm:w-[300px] rounded-[10%] ml-16 max-sm:ml-0' />
                        <div className='grid gap-10'>
                            <a href={IlyosDev} className='text-4xl font-bold max-sm:text-3xl'>Qadamboy Developer</a>
                            <h3 className='max-sm:text-md text-xl font-medium pr-16 max-sm:pr-14 max-sm:pl-14'>
                                Hi, I'm Ilyosbek Developer. The membership of the DevS Community. I'm a Frontend Junior developer and my skills are: <span className='text-blue-500'>HTML, CSS, JavaScript, JAVA, Tailwind CSS, React JS, Chakra UI, Swiper. </span> I'm a graduate of Data Learning Center as a Frontend Junior developer. I'm Uzbek, but I know English because of my teachers. Thanks a lot to my teachers from us!
                            </h3>
                            <div className='max-sm:w-full max-sm:flex max-sm:justify-center'>
                                <a href='https://www.canva.com/design/DAGKui3_mFQ/5YFQI0y_lwkeAliwpvGTbw/edit?utm_content=DAGKui3_mFQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' download className='w-[150px] h-[40px] rounded-lg bg-blue-500 text-white hover:shadow-md hover:shadow-blue-500 text-lg font-medium transition-all duration-300 flex justify-center items-center active:bg-blue-700' target='_blank'>Download CV</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default About