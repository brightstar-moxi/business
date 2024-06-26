"use client";

import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion"

const projectData = [
    {
        id: 1,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara1.jpeg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 2,
        title: "Latest Gini",
        description: "This are sample of Gini that we are selling",
        image: "/images/gini1.jpeg",
        tag: ["All", "Gini"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 3,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara2.webp",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 4,
        title: "Latest Lace",
        description: "This are sample of Lace that we are selling",
        image: "/images/lace.jpeg",
        tag: ["All", "Lace"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "School Uniform",
        description: "This are sample of School Uniform that we are selling",
        image: "/images/sch1.jpeg",
        tag: ["All", "School Uniform"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://fullstack-ecommerce-six.vercel.app/"
    },
    {

        id: 6,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara3.jpeg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 7,
        title: "Update Coming Soon",
        description: "Update is coming Soon",
        image: "/ankara/update.png",
        tag: ["All", "Gini"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 8,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara4.jpeg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 7,
        title: "Latest Lace",
        description: "This are sample of Lace that we are selling",
        image: "/images/lace2.webp",
        tag: ["All", "Lace"],
        gitUrl: "/",
        previewUrl: "/"
    },  {

        id: 8,
        title: "School Uniform",
        description: "This are sample of School Uniform that we are selling",
        image: "/images/sch2.jpeg",
        tag: ["All", "School Uniform"],
        gitUrl: "/",
        previewUrl: "/"
    },
    // {

    //     id: 9,
    //     title: "Update Coming Soon",
    //     description: "Update is coming Soon",
    //     image: "/ankara/update.png",
    //     tag: ["All", "Design"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
  
    {
        id: 10,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara5.jpeg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 11,
        title: "Update Coming Soon",
        description: "Update is coming Soon",
        image: "/ankara/update.png",
        tag: ["All", "Gini"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 12,
        title: "Update Coming Soon",
        description: "This are sample of School Uniform that we are selling",
        image: "/images/sch3.jpeg",
        tag: ["All", "School Uniform"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 13,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara6.jpg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {
        id: 14,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara7.jpg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 15,
        title: "School Uniform",
        description: "This are sample of School Uniform that we are selling",
        image: "/images/sch4.jpeg",
        tag: ["All", "School Uniform"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 16,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara8.jpeg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 17,
        title: "Latest Lace ",
        description: "This are sample of Lace that we are selling",
        image: "/images/lace3.jpg",
        tag: ["All", "Lace"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 18,
        title: "Latest Ankara",
        description: "This are sample of Anakara that we are selling",
        image: "/ankara/ankara9.jpeg",
        tag: ["All", "Ankara"],
        gitUrl: "https://github.com/brightstar-moxi",
        previewUrl: "https://brightstar-moses.onrender.com/"
    },
    {

        id: 19,
        title: "School Uniform",
        description: "This are sample of School Uniform that we are selling",
        image: "/images/sch5.jpg",
        tag: ["All", "School Uniform"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 20,
        title: "Update Coming Soon",
        description: "Update is coming Soon",
        image: "/ankara/update.png",
        tag: ["All", "Cloth Materials"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 21,
        title: "Update Coming Soon",
        description: "Update is coming Soon",
        image: "/ankara/update.png",
        tag: ["All", "Cloth Materials"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 22,
        title: "School Uniform",
        description: "This are sample of School Uniform that we are selling",
        image: "/images/sch6.jpeg",
        tag: ["All", "School Uniform"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {

        id: 23,
        title: "Update Coming Soon",
        description: "Update is coming Soon",
        image: "/ankara/update.png",
        tag: ["All", "Cloth Materials"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProject = projectData.filter((project) => project.tag.includes(tag)
    );

    const cardVariants = {

        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }
    return (
        <section  id="projects">
            <h2 className='text-center text-4xl font-bold text-white mt-4'>Cloth We Sell</h2>
            <div className='text-white flex flex-row  lg:justify-center gap-2 py-6 overflow-auto lg:overflow-hidden'>

                <ProjectTag onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"} />

                <ProjectTag onClick={handleTagChange}
                    name="Ankara"
                    isSelected={tag === "Ankara"} />

                <ProjectTag onClick={handleTagChange}
                    name="Gini"
                    isSelected={tag === "Gini"} />

                   
                    <ProjectTag onClick={handleTagChange}
                    name="Lace"
                    isSelected={tag === "Lace"} />
                    
                    <ProjectTag onClick={handleTagChange}
                    name="School Uniform"
                    isSelected={tag === "School Uniform"} />

                    <ProjectTag onClick={handleTagChange}
                    name="Cloth Materials"
                    isSelected={tag === "Cloth Materials"} />

            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProject.map((project, index) => (
                    <motion.li key={index}
                        variants={cardVariants}
                        initial="initial" animate={isInView ?
                            "animate" : "initial"}
                            transition={{duration: 0.3, delay: index = 0.4}}
                            >

                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            // tags={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection