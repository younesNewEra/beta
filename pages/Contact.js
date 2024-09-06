import Link from 'next/link';
import React from 'react'

const Contact = () => {
    return (
        <section className='bg-black py-8 w-full px-7' id='contact'>
            <div className='grid md:grid-cols-[1fr_6em_6em_6em] grid-cols-[1fr_1fr] gap-10'>
                <div className=''>
                    <p className='text-white text-[2em] ft'>SI</p>
                    <div className='flex gap-2 mb-2'>
                        <Link href='/'>
                            <img src='/instagram.png' className='w-6'/>
                        </Link>
                        <Link href='/'>
                            <img src='/tiktok.png' className='w-6'/>
                        </Link>
                        <Link href='/'>
                            <img src='/linkedin.png' className='w-6'/>
                        </Link>
                    </div>
                    <p className='text-white ft flex'> 
                        <img src='/phone.png' className='w-6'/> 0697 13 37 15
                    </p>
                </div>
                <div className=''>
                    <p className='text-white ft font-medium mb-4'>company</p>
                    <p className='text-gray-300 ft mb-1'>services</p>
                    <p className='text-gray-300 ft mb-1'>portfolio</p>
                    <p className='text-gray-300 ft'>contact</p>
                </div>
                <div className=''>
                    <p className='text-white ft font-medium mb-4'>services</p>
                    <p className='text-gray-300 ft mb-1'>mobile app</p>
                    <p className='text-gray-300 ft mb-1'>websites</p>
                    <p className='text-gray-300 ft'>desktop apps</p>
                </div>
                <div className=''>
                    <p className='text-white ft font-medium mb-4'>portfolio</p>
                    <p className='text-gray-300 ft mb-1'>school MS</p>
                    <p className='text-gray-300 ft mb-1'>POS managment</p>
                    <p className='text-gray-300 ft'>and more...</p>
                </div>
            </div>
            <div className='flex md:justify-between md:items-end mt-14
            flex-col md:flex-row justify-center items-center'>
                <div className='flex flex-col items-center md:block'>
                    <p className='text-white ft font-medium'>
                        move faster
                    </p>
                    <p className='text-gray-300 ft'>
                        achieve high return on investments
                    </p>
                </div>
                <p className='text-gray-300 ft'>
                    © 2024 Software Investments.
                </p>
            </div>
        </section>
    )
}

export default Contact;