import React from 'react'
import { GiKing, GiOldKing } from 'react-icons/gi'
import { GrUserAdmin } from 'react-icons/gr'
import { MdDeveloperBoard } from 'react-icons/md'
import { RiAdminFill } from 'react-icons/ri'

const AboutPage = () => {
  return (
    <div className='text-white'>
      <div className='text-center mb-1'>
        <div className='border-b-4 p-6 inline-block w-[300px] border-collapse border-blue-500'>
          <h1 className='text-center text-4xl font-medium'>About Us</h1>
        </div>
      </div>
      <div className='grid gap-20 text-white'>
        <div className="flex items-center gap-16 max-sm:gap-10 max-sm:flex-col">
          <div className='w-[50%] max-sm:w-full'>
            <MdDeveloperBoard size={350} color='white' />
          </div>
          <div className='grid gap-5 max-sm:pr-10 max-sm:text-center'>
            <h1 className='text-4xl font-medium'>About DevS Community</h1>
            <h2 className='text-xl'>Hello, and welcome to the DevS Community! We will create such complex and perfect projects for you that you will be amazed. If you want to hire us, or if you want to contact us, you can click the Hire Us button at the top and fill out the form. If you want to join our community, go to the Home page above and fill out the last form. We will wait for you in good days, stay healthy!</h2>
          </div>
        </div>
        {/* Akmal */}
        <div className="flex items-center gap-16 max-sm:gap-10 max-sm:flex-col">
          <div className='w-[50%] max-sm:w-full'>
            <GiOldKing size={350} color='white' />
          </div>
          <div className='grid gap-5 max-sm:pr-9 max-sm:text-center'>
            <h1 className='text-4xl font-medium'>About Akmal Developer</h1>
            <h2 className='text-xl'>Hi, I'm Akmal Developer. The leader of the DevS Community. I'm a Frontend Junior developer and my skills are: <span className='text-blue-500'>HTML, CSS, JavaScript, JAVA, Tailwind CSS, Bootstrap, React JS, Chakra UI, Swiper.</span> I'm a graduate of Data Learning Center as a Frontend Junior developer. I'm Uzbek, but I know English because of the Top Language Center. Thanks a lot to my teachers from us!</h2>
            <div className='max-sm:flex max-sm:justify-center'>
              <a href='https://www.canva.com/design/DAGJIjb6zoo/3CCS8nylDcA_99YvTnu8QA/edit?utm_content=DAGJIjb6zoo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' download className='w-[150px] h-[40px] rounded-lg bg-blue-500 text-white hover:shadow-md hover:shadow-blue-500 text-lg font-medium transition-all duration-300 flex justify-center items-center active:bg-blue-700' target='_blank'>Download CV</a>
            </div>
          </div>
        </div>
        {/* Qadamboy */}
        <div className="flex items-center gap-16 max-sm:gap-10 max-sm:flex-col">
          <div className='w-[50%] max-sm:w-full'>
            <RiAdminFill size={350} color='white' />
          </div>
          <div className='grid gap-5 max-sm:pr-9 max-sm:text-center'>
            <h1 className='text-4xl font-medium'>About DevS Community</h1>
            <h2 className='text-xl'>Hello, and welcome to the DevS Community! We will create such complex and perfect projects for you that you will be amazed. If you want to hire us, or if you want to contact us, you can click the Hire Us button at the top and fill out the form. If you want to join our community, go to the Home page above and fill out the last form. We will wait for you in good days, stay healthy!</h2>
            <div className='max-sm:flex max-sm:justify-center'>
              <a href='https://www.canva.com/design/DAGJaHpUOn0/xGEnkj3oC8M5PtIaUL67zQ/edit?utm_content=DAGJaHpUOn0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' download className='w-[150px] h-[40px] rounded-lg bg-blue-500 text-white hover:shadow-md hover:shadow-blue-500 text-lg font-medium transition-all duration-300 flex justify-center items-center active:bg-blue-700' target='_blank'>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage