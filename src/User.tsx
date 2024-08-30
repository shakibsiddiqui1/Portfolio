import Netflix from './images/Netflix.png'
import Weather from './images/Weather.png'
import Ecommerce from './images/Ecommerce.png'
import Metaverse from './images/Metaverse.png'
import Youtube from './images/Youtube.png'
import Swiggy from './images/Swiggy.png'
import HTML from './Icons/HTML.png'
import Css from './Icons/CSS.png'
import Javascript from './Icons/JavaScript.png'
import Reacts from './Icons/React JS.png'
import NextJs from './Icons/nextjs.png'
import Redux from './Icons/Redux.png'
import Jest from './Icons/Jest.png'
import Node from './Icons/Node JS.png'
import Mongo from './Icons/MongoDB.png'
import Express from './Icons/Express JS.png'
import Firebase from './Icons/Firebase.png'
import Typescript from './Icons/TypeScript.png'
import Git from './Icons/Git.png'
import Github from './Icons/Github.png'
import Vscode from './Icons/VS Code.png'
import Postman from './Icons/Postman.png'
import MongoCompass from './Icons/MongoDB Compass.png'
import Docker from './Icons/docker.png'
import Agile from './Icons/agile.png'
import Styled from './Icons/styled.png'
import Tailwind from './Icons/Tailwind CSS.png'
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Info = {
    name: "Shakib Siddiqui",
    stack: ["Software Engineer"],
    bio: "I'm a passionate Front-End Developer specialized in crafting efficient and scalable solutions with 2.4 years of hands-on experience. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences."
}


const ProjectInfo = [
    {
        title: "Netflix Clone",
        desc: "Netflix Clone is a AI based movie application that replicates the core features of Netflix, including user authentication, movie playback, and suggest movies using AI. The front end is built with React, TailwindCSS, Redux.js, ChatGPT APIs, TMDB APIs and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for movies, and create playlists. The app features real-time updates, so users can see new movies as they are added. Netlify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: Netflix,
        live: true,
        technologies: ["React", "Tailwind", "Redux", "ChatGPT API","TMDB API"],
        link: "https://video-watcher.netlify.app/",
        github: "https://github.com/shakibsiddiqui1/netflix-gpt"
    },
    {
        title: "Weather Tracker",
        desc: "Weather Tracker is a fully responsive web application that allows users to track weather at their location and search weather of any country in the world. The front end is built with React, TailwindCSS, OpenWeather API. Users can see weather and search weather in search bar. The app features a clean, modern design with user-friendly interface. Weather Tracker combines functionality with style, making it easy to see the weather.",
        image: Weather,
        live: true,
        technologies: ["React", "Open-Weather API", "Tailwind"],
        link: "https://finds-weathers.netlify.app/",
        github: "https://github.com/shakibsiddiqui1/find-weather"
    },
    {
        title: "E-Commerce APP",
        desc: "E-Commerce APP is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Redux.js, offering a seamless shopping experience across all devices. Users can see items of different categories and toggle dark and light mode based on their preference. E-Commerce combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: Ecommerce,
        live: true,
        technologies: ["React-JS", "Tailwind", "Redux"],
        link: "https://shopsys-in.netlify.app/",
        github: "https://github.com/shakibsiddiqui1/ecommerce-app"
    },
    {
        title: "Metaverse APP",
        desc: "Metaverse App is a modern, fully responsive metaverse platform built using React, TailwindCSS, Redux.js. It is beautiful and interactive landing page for metaverse products, Users can toggle dark and light mode based on their preference. Metaverse combines robust functionality with a sleek, intuitive design.",
        image: Metaverse,
        live: true,
        technologies: ["React", "Tailwind", "Redux"],
        link: "https://metaverse-apps.netlify.app/",
        github: "https://github.com/shakibsiddiqui1/metaverse-app"
    },
    {
        title: "Youtube Clone",
        desc: "Youtube Clone is a fully resposive web application that replicates the core features of Youtube, including video play, suggests related videos, category wise videos, search videos, Live videos and commenting. The front end is built with React, TailwindCSS, Redux.js and Youtube APIs, Users can see category-wise videos, live videos, search videos and comment on videos. The app features real-time updates, so users can see new comments as they are posted. Youtube Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: Youtube,
        live: false,
        technologies: ["React", "Youtube API", "Redux", "Tailwind"],
        link: "https://github.com/shakibsiddiqui1/youtubes-clone",
        github: "https://github.com/shakibsiddiqui1/youtube-clone"
    },
    {
        title: "Food as Mood",
        desc: "Food as Mood is a food ordering web application that replicates the core features of Swiggy, including restaurants-wise foods, search food, filter foods and add to cart functionality. The front end is built with React, TailwindCSS, Swiggy Api and Redux.js, Users can see listed restaurants, order food, add to cart and remove the food, search the food. Listed restaurants are labeled by Promoted and non-promoted. The app features real-time updates, so users can see newly added food and restaurants at their location. Food as Mood provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: Swiggy,
        live: false,
        technologies: ["React", "Tailwind", "Swiggy API", "Redux"],
        link: "https://github.com/shakibsiddiqui1/namaste-reacts",
        github: "https://github.com/shakibsiddiqui1/namaste-react"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: [
        {
            typ : "HTML",
            icon : HTML
        },
        {
            typ : "CSS",
            icon : Css
        },
        {
            typ : "React JS",
            icon : Reacts
        },
        {
            typ : "Next JS",
            icon : NextJs
        },
        {
            typ : "Redux",
            icon : Redux
        },
        {
            typ : "Jest",
            icon : Jest
        },
        {
            typ : "Tailwind CSS",
            icon : Tailwind
        },
        {
            typ : "Styled-Components",
            icon : Styled
        }
    ]
    },
    {
        title: "Backend",
        skills: [
            {
                typ : "Node JS",
                icon : Node
            },
            {
                typ : "Express JS",
                icon : Express
            },
            {
                typ : "MongoDB",
                icon : Mongo
            },
            {
                typ : "Firebase",
                icon : Firebase
            }]
    },
    {
        title: "Languages & Others",
        skills: [
            {
                typ : "JavaScript",
                icon : Javascript
            },
            {
                typ : "TypeScript",
                icon : Typescript
            },
            {
                typ : "Agile Methodology",
                icon : Agile
            }]
    },
    {
        title: "Tools",
        skills: [
            {
                typ : "Git",
                icon : Git
            },
            {
                typ : "Github",
                icon : Github
            },
            {
                typ : "VS Code",
                icon : Vscode
            },
            {
                typ : "Postman",
                icon : Postman
            },
            {
                typ : "MongoDB Compass",
                icon : MongoCompass
            },
            {
                typ : "Docker",
                icon : Docker
            }
         ]
    }
]
const socialLinks = [
    { link: "https://github.com/shakibsiddiqui1", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shakib-siddiqui-5861a81b4/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/shakibsiddiqui21/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Engineer",
        company: "Cognizant",
        date: "Dec 2022 - April 2024",
        desc: "I led software development with Typescript, React JS, Redux, AWS created scalable Micro-Frontend architecture. I optimized performance by integrating frontend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Typescript", "React JS", "Springboot", "MySQL", "Redux", "Microservices", "AWS", "CI/CD pipelines", "Jest", "Mocha", "Agile", "CSS3", "Styled-Components", "GitLab"]
    },
    {
        role: "Programmer Analyst Trainee",
        company: "Cognizant",
        date: "Dec 2021 - Dec 2022",
        desc: " I leveraged my skills in Javascript, Typescript, React JS, Next JS, Redux, Tailwind CSS and MySQL to design and implement fully responsive micro frontend architecture, ensuring clean, high-quality and robust code. I optimized website performance and reliability, and collaborated with cross-functional teams to enhance security and ensure seamless integration.",
        skills: ["Javascript", "React JS", "HTML5", "TailwindCSS", "CSS3", "JIRA", "Agile Methodology", "Redux", "Git", "AWS", "Jest", "Mocha", "MySQL", "Next JS"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };