'use client'
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";

const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [display, setDisplay] = useState("hidden");
    const [row, setRow] = useState("5em");
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        console.log(scrollPosition)
    };    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const menu = () =>{
        if(display === 'flex'){
            setDisplay("hidden");
            setRow("5em");
        }else{
            setDisplay("flex");
            setRow("5em_20em");
        }
        console.log(row)
    }
    return (
        <header className={ scrollPosition === 0 && row ==="5em" ? `w-full grid grid-cols-[1fr_1fr] 
        transition-all duration-300 ease-in-out fixed top-4 px-10 md:px-20 md:grid-cols-[1fr_3fr]
        md:grid-rows-[5em] grid-rows-[${row}] z-20
        ` 
        : `md:w-[80%] grid grid-cols-[1fr_3fr] fixed top-4 transition-all duration-300 ease-in-out
        bg-black bg-opacity-20 backdrop-blur-lg rounded-[2em] px-5 md:px-20 md:grid-rows-[5em] 
        grid-rows-[${row}] md:rounded-full w-[90%] z-20`}>
            <img className="self-center h-5 md:h-9" src="/logo3.png" alt="logo"/>
            <Image src='/menu.png' alt="menu" width={50} height={50}
            className="md:hidden self-center justify-self-end"
            onClick={menu}
            />
            <nav className={`self-center w-full ${display} md:justify-end gap-5 col-span-2 md:col-span-1 
            md:gap-[3em] flex-col md:flex-row h-full md:h-auto mt-5 md:mt-0 md:flex md:items-center
            `}>
                <Link href='#home' className="text-white text-[2em] md:text-[1em]">Home</Link>
                <Link href='#services' className="text-white text-[2em] md:text-[1em]">Services</Link>
                <Link href='#portfolio' className="text-white text-[2em] md:text-[1em]">Portfolio</Link>
                <div className="flex buttonH">
                    <button className="text-white bg-[#4169E1] rounded-full px-5">
                        <Link href='#contact'>contact us</Link>
                    </button>
                    <div className="text-white bg-[#4169E1] p-1 rounded-full font-semibold
                    h-[2em] w-[2em] text-center translate-x-[-5px] arrow
                    ">&#8599;</div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;