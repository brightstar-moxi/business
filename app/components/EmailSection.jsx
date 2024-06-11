"use client"
import React from 'react';
 import GithubIcon from "../../public/images/CALL3.png";
//  import LinkedinIcon from "https://whas.me/media/_button_image";
 import LinkedinIcon from "../../public/images/cap.JPG";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const phoneNumber = "+2347087653647";
       return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' >
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2  '></div>
            <div className='z-18'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                   We are located at Shop 267, Gbaremu Market, Ijokodo, Eleyele-Sango Road, Ibadan.
                </p>
                <p className='text-xl font-bold text-white my-2'>Open: 8:00 AM</p>
                <p className='text-xl font-bold text-white my-2'>Close: 6:00 AM</p>
                {/* <p className='text-xl font-bold text-white my-2'>Call:</p>
                <p className='text-xl font-bold text-white my-2'>Chat:</p> */}
                <p className='text-[#c8cdd1] mb-4 max-w-md'>Click on any of the icon to either call or chat with us</p>
                {" "}
                <div className='socials flex flex-row gap-5'>
                    
                    <Link href={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
                        <Image src={GithubIcon} alt='calling Icon' width={70} height={70} />
                    </Link>
                    {/* <Link href='linkedin.com'> */}
                    <a href="https://whas.me/aUopdSw1pI" target="_blank"><Image src={LinkedinIcon} width={70} height={70} alt="Chat via WhatsApp"/></a>
                        {/* <Image src={LinkedinIcon} alt='Linkedin Icon' /> */}
                    {/* </Link> https://whas.me/aUopdSw1pI*/}
                </div>
            </div>
            <div className='text-center'>
               <strong className='text-xl font-bold text-white '>Bot to be Updated</strong>
            </div>
        </section>
        //   &apos;', &lsquo;`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
    )
}

export default EmailSection