import React from 'react'
import PortCard from '@/components/PortCard';

const Portfolio = () => {
    const arr = ['/laboratory.PNG','/familyshop.PNG','/school.PNG','/nike.PNG']
    return (
        <section className='flex flex-col-reverse md:flex-row md:gap-10 py-10 px-7' id='portfolio'>
            <div className='md:pt-[9em]'>
                <PortCard src='/nike.PNG' sub='special ui' main='clothing store' />
                <PortCard src='/laboratory.PNG' sub='managment system' main='laboratory WS' />
            </div>
            <div>
            <div className='md:pl-10 pb-7'>
                <p className='ft text-white mt-6 md:translate-y-3'> 
                    <span className='text-[3em]'>.</span> Our Work
                </p>
                <p className='ft text-[2em] md:text-[2.5em] text-white md:font-medium'>
                    Take a look at
                </p>
                <p className='ft text-[2em] md:text-[2.5em] text-white md:font-medium md:translate-y-[-0.5em]'>
                    our projects
                </p>
            </div>
                <PortCard src='/familyshop.PNG' sub='portfolio' main='familyshop WS'/>
                <PortCard src='/school.PNG' sub='managment system' main='school WS'/>
            </div>
        </section>
    )
}

export default Portfolio;