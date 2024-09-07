import React from 'react'
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
    const data = [
        {title:'Websites',src:'/websites.jpeg'},
        {title:'Mobile apps',src:'/mobile.jpeg'},
        {title:'Desktop apps',src:'/desktop.jpg'},
    ]
    return (
        <section className='bg-[#1a1b1e] w-full pb-5' id='services'>
            <div className='w-full flex flex-col md:flex-row justify-around items-start py-10 px-[7%] md:px-0'>
                <p className='ft text-white mt-6'> 
                    <span className='text-[3em]'>.</span> Our Expertise
                </p>
                <p className='ft text-white text-[2em] md:max-w-[10em] md:flex flex-col
                md:text-[3em]'>
                    <span className=' md:translate-y-[25px]'>How we</span>
                    <span>take your business</span> 
                    <span className=' md:translate-y-[-25px]'>to the next level</span>
                </p>
                <p className='text-gray-400 max-w-[17em] mt-3 md:mt-10'>
                    We are a digital marketing agency with expertise, 
                    and we’re on a mission to help you take the next step in your business.
                </p>
            </div>
            <div className='flex w-full'>
                <div className='w-[21em] hidden md:block'>
                    
                </div>
                <div className='md:w-[calc(100%-21em)] w-full px-[7%] md:px-0'>
                    {data.map((e)=>(
                        <ServiceCard key={e.title} title={e.title} src={e.src}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;