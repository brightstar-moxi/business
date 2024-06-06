"use client"
import React, { useState } from 'react';
// import GithubIcon from "../../public/icons8-github.svg";
// import LinkedinIcon from "../../public/icons8-linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mailOptions = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(mailOptions);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    

        if (response.status === 200) {
            console.log('Message sent,');
            setEmailSubmitted(true);
        }
       
    };
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' >
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2  '></div>
            <div className='z-18'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                   We are located at Shop 267, Gbaremu Market, Ijokodo, Eleyele-Sango Road, Ibadan.
                </p>
                <p className='text-xl font-bold text-white my-2'>Call:</p>
                <p className='text-xl font-bold text-white my-2'>Chat:</p>
                {/* <div className='socials flex flex-row gap-2'>
                    <Link href='github.com'>
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href='linkedin.com'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div> */}
            </div>
            <div className='text-center'>
               <strong className='text-xl font-bold text-white '>Bot to be Updated</strong>
            </div>
        </section>
        //   &apos;', &lsquo;`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
    )
}

export default EmailSection