import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Image2 from '/public/ankara/alaso2.png'
const Footer = () => {
    return (
        <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white' id="contact">
            <div className='container p-12 flex justify-between ml-0'>
            <Link href={"/"}> <Image 
        src={Image2}
        alt="about image"
        width={60}
        height={60}
        /><strong className='text-sm md:text-5xl text-yellow-400 font-extrabold'>MOJOLAJESU STORE</strong></Link>
                <p className='text-slate-600 mt-5'>All right reserved</p>
            </div>
        </footer>
    )
}
// npm i react-animated-numbers react-type-animation framer-motion
export default Footer