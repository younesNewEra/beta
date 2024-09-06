import React from 'react'
import Image from 'next/image';

const ServiceCard = (props) => {
    return (
        <div className='md:w-[90%] w-full border-x-0 border-t-0 border-b-[1px] serviceC 
        border-solid border-gray-400 flex items-center md:py-8 py-3'>
            <img src={props.src} alt='service' 
            className='rounded-[1em] w-[5.5em] md:w-0 serviceP opacity-100 md:opacity-0
            mr-[1em] md:mr-0 h-[5em] md:h-[7em]'
            />
            <p className='ft md:text-[3.5em] text-[2em] text-white font-medium'>{props.title}</p>
        </div>
    )
}

export default ServiceCard;