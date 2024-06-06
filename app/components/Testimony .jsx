import React from 'react'
import Image from 'next/image'
import Imag from "/public/ankara/update.png"

function Testimony () {
  return (
    <>
    <h1 className='text-4xl font-bold text-white mb-4 mt-10 text-center'> Testimony</h1>
    <section className='text-white'id="testimony">
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
       <div> <Image 
        src={Imag}
        alt="about image"
        width={600}
        height={600}
        />
        <div className='text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold text-center mb-2'>MR. Agbola</h5>
            <p className='text-[#ADB7BE]'>i lov the cloth</p>
         </div>
        </div> 
        <div>
         <Image 
        src={Imag}
        alt="about image"
        width={600}
        height={600}
        />
         <div className='text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold text-center mb-2'>MR. Agbola</h5>
            <p className='text-[#ADB7BE]'>i lov the cloth</p>
         </div>
        </div>
        <div>
         <Image 
        src={Imag}
        alt="about image"
        width={600}
        height={600}
        />
         <div className='text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold text-center mb-2'>MR. Agbola</h5>
            <p className='text-[#ADB7BE]'>i lov the cloth</p>
         </div>
        </div>
        <div>
         <Image 
        src={Imag}
        alt="about image"
        width={600}
        height={600}
        />
         <div className='text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold text-center mb-2'>MR. Agbola</h5>
            <p className='text-[#ADB7BE]'>i lov the cloth</p>
         </div>
        </div>
        <div>
         <Image 
        src={Imag}
        alt="about image"
        width={600}
        height={600}
        />
         <div className='text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold text-center mb-2'>MR. Agbola</h5>
            <p className='text-[#ADB7BE]'>i lov the cloth</p>
         </div>
        </div>
        <div>
         <Image 
        src={Imag}
        alt="about image"
        width={600}
        height={600}
        />
         <div className='text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold text-center mb-2'>MR. Agbola</h5>
            <p className='text-[#ADB7BE]'>i lov the cloth</p>
         </div>
        </div>
        </div></section>
</>
  )
}

export default Testimony 