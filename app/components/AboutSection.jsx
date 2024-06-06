"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";
 import Image1 from '/public/video/men2.jpg';
import Image2 from '/public/images/IMG_20240525_175057__2_-removebg-preview.png';
import TabButton from './TabButton';



const TAB_DATA = [
    {
     title: "Ankara Video Style",
     id: "skills",
     content: (
       
        <video width="600" controls>
        <source width="600" src= '/video/100UniqueAnkaraWoman.mp4' type='video/mp4' title='men'/>
          Your browser does not support the video tag.
</video>
     )
    },

    {
        title: " Gini Video",
        id: "education",
        content: (
            <div className="relative overflow-hidden rounded-lg shadow-lg group text-center ">
               <video width="600" controls>
        <source src= '/video/TrendingNativeDressingmen.mp4' type='video/mp4' title='men'/>
          Your browser does not support the video tag.
</video>
            {/* <Image 
            src={Image1}
            alt='animation'
            width={300}
            height={100}
            />
             <span className='text-center bg-black top-40 absolute'>PLAY</span>
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div> */}
           </div>
        )
       },
       {
        title: "Certification",
        id: "certificate",
        content: (
            <section>
            <video width="600" controls>
            <source  src= '/video/boys.mp4' type='video/mp4' />
              Your browser does not support the video tag.
    </video>
    </section>
        )
       },
       {
        title: "girls",
        id: "girls",
        content: (
            <main className="relative overflow-hidden rounded-lg shadow-lg group text-center "> 
            <video width="700" controls>
            <source width="600" src= '/video/girl.mp4' type='video/mp4'/>
              Your browser does not support the video tag.
    </video>
    </main>
        )
       }
]


const AboutSection = () => {
    const [tab, SetTab] = useState("skills");
    const [isPending,startTransition] = useTransition();





    const handleTabChange = (id) => {
        startTransition(() =>{
            SetTab(id);
        });

    }
  return (
   
    <section className='text-white'id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
         <Image 
        src={Image2}
        alt="about image"
        width={700}
        height={700}
        />
        <div className='mt-4 md:mt-0  flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>Our Vision</h2>
            <p className='text-base lg:text-lg'>Our vision is comprehensive and forward-thinking. By emphasizing quality and diversity, committing to 
            sustainability, offering personalized customer service, leveraging technology, creating a unique in-store experience, and building a strong
             brand identity, we aim to meet and exceed the expectations of modern consumers. 
                 </p>
                 <p className='text-base lg:text-lg'>Watch the video below to give you idea of style to sow with cloth we are selling.</p>
                 <div className='flex flex-row justify-start mt-8'>
                 <TabButton selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}> {" "}
                     Style for Women{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}> {" "}
                  Style for Men{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certificate")} 
                    active={tab === "certificate"}> {" "}
                    Style for boys{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("girls")} 
                    active={tab === "girls"}> {" "}
                    Style for girls{" "}
                    </TabButton>
                 </div>
                 <div className='mt-8'>{ TAB_DATA.find((t) => t.id === tab).content}</div>
              
                 
                 
        </div>
        </div></section>
  )
}

export default AboutSection