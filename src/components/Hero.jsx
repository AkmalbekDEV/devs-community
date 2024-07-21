import React from 'react'
import TypewriterComponent from 'typewriter-effect'


const Hero = () => {
    const AkmalDev = 'https://github.com/AkmalbekDEV'
    const QadamboyDev = 'https://github.com/QadamboyDev09'

    return (
        <div className='h-[400px] flex justify-center items-center text-white'>
            <div className='grid gap-7'>
                <h1 className='text-5xl max-sm:text-3xl font-bold text-center'>
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Welcome to our DevS Community website . . .",
                                "We're a Tech Ethusiast . . .",
                                "We ❤️ Building asthetic & interactive websites",
                            ],
                        }}
                    />
                </h1>
                <h3 className='text-xl max-sm:text-lg text-center'>This website is created by DevS Community's leader <a href={AkmalDev} target='_blank' className='text-blue-500 hover:underline'>Akmal Developer</a> using React JS. So you can find our works, projects, hire us and something each other!</h3>
            </div>
        </div>
    )
}

export default Hero