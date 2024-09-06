import React from 'react'
import Link from 'next/link';

const Home = () => {
    return (
        <section className='w-full flex justify-center items-center pt-[20em] pb-[30em]
        md:pt-[18em] md:pb-[25em]' 
        id='home'>
            <div className='w-[80%] flex flex-col items-start absolute z-10'>
                <p className='ft text-white bg-black pl-5 w-[16.3em] md:w-[30.2em] h-10'> 
                    <span className='text-[1.5em]'>.</span> Hi, Welcome 
                </p>
                <p className='text-white md:text-[3em] text-[1.5em] ft 
                bg-black font-medium px-5 rounded-br-[16px]
                '>
                    A Web Design and
                </p>
                <p className='text-white md:text-[3em] text-[1.5em] ft 
                bg-black font-medium px-5 rounded-br-[16px]
                '>
                    Software Agency
                </p>
                <p className='text-white md:text-[3em] text-[1.5em] ft 
                bg-black font-medium px-5 rounded-br-[16px]
                '>
                    based in Blida
                </p>
                <div className='flex gap-1 ft bg-black font-medium px-5 rounded-br-[16px] py-3'>
                <div className="flex buttonH">
                    <button className="text-white bg-[#2b2c2e] rounded-full px-5">
                        <Link href='#portfolio'>work</Link>
                    </button>
                    <div className="text-white bg-[#2b2c2e] p-1 rounded-full font-semibold
                    h-[2em] w-[2em] text-center translate-x-[-5px] arrow
                    ">&#8599;
                    </div>
                </div>
                <div className="buttonH hidden md:flex">
                    <button className="text-white rounded-full px-5">
                        <Link href='#services'>Services</Link>
                    </button>
                    <div className="text-white p-1 rounded-full font-semibold
                    h-[2em] w-[2em] text-center translate-x-[-10px] arrowS
                    ">
                    <span className='spn1'>&#8599;</span>
                    <span className='spn2'>&#8599;</span>
                    </div>
                </div>
                </div>
            </div>
            <video src='/vid.mp4' className='absolute w-[80%] mt-44 hidden md:block' autoPlay muted loop
            ></video>
            <video src='/mini-screen.mp4' className='absolute w-[85%] mt-44 block md:hidden' autoPlay muted loop
            ></video>
        </section>
    )
}

export default Home;