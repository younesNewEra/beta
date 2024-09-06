import React from 'react'

const PortCard = (props) => {
    return (
        <div className='mb-5 md:mb-0'>
            <div className='overflow-hidden hover:cursor-pointer'>
                <img src={props.src} alt='school' className='w-full rounded-[2em] hover:scale-110 transition-all
                duration-150'/>
            </div>
            <p className='text-gray-400'>{props.sub}</p>
            <p className='text-[2em] text-white'>{props.main}</p>
        </div>
    )
}

export default PortCard;