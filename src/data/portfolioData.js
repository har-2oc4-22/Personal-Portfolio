import {
    FaGithub,
    FaLinkedin,
    FaCode,
    FaServer,
    FaDatabase,
    FaReact,
    FaNodeJs,
    FaBrain,
    FaLaptopCode,
    FaCogs
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiCplusplus, SiC, SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks, SiJavascript, SiPostman } from "react-icons/si";

export const personalInfo = {
    name: "Harsh Shukla",
    role: "Full-Stack Developer",
    tagline: "Building scalable web applications and solving complex problems.",
    email: "shuklaharsh9752@gmail.com",
    github: "https://github.com/har-2oc4-22",
    linkedin: "https://www.linkedin.com/in/harsh-shukla-a83b3b231/",
    resumeLink: "https://drive.google.com/file/d/1fXjNmgej5v3xy_5NSUVVq3Q4kf0HqOiJ/view?usp=sharing",
    about: "I am a final year Computer Science engineering student at the Institute Of Engineering And Technology, Lucknow. As a Full-Stack Developer with strong DSA and Competitive Programming skills, I am proficient in building scalable applications featuring secure authentication, integrated payments, and media management. I'm passionate about writing clean, efficient code and continuously learning new technologies.",
};

export const categorizedSkills = [
    {
        category: "Languages",
        items: [
            { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
            { name: "C", icon: SiC, color: "text-blue-400" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "SQL", icon: FaDatabase, color: "text-blue-500" }
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "React.js", icon: FaReact, color: "text-cyan-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
            { name: "Express.js", icon: SiExpress, color: "text-gray-400" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git & GitHub", icon: FaGithub, color: "text-white" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "VS Code", icon: FaLaptopCode, color: "text-blue-500" }
        ]
    },
    {
        category: "Technologies",
        items: [
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "RESTful APIs", icon: FaServer, color: "text-gray-300" }
        ]
    }
];

export const interests = [
    { title: "Software Development", icon: FaLaptopCode, color: "text-green-300" },
    { title: "Competitive Programming", icon: FaCode, color: "text-green-300" },
    { title: "Algorithms", icon: FaBrain, color: "text-green-300" },
    { title: "Object Oriented Programming", icon: FaCogs, color: "text-green-300" }
];
export const projects = [
    {
        title: "Connectify",
        description: "A responsive full-stack community platform for developers. Features real-time group chat via Socket.io, secure media uploads using Multer and Cloudinary, and JWT-based authentication.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
        github: "https://github.com/har-2oc4-22/chatify",
        live:  "https://chatify-xi-vert.vercel.app/login",
    },
    {
        title: "Grow Carry",
        description: "A full-stack grocery e-commerce platform featuring secure authentication, product browsing, and seamless cart management with Stripe-based checkout integration.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "Cloudinary"],
        github: "https://github.com/har-2oc4-22/GrowCarry",
        live: "https://growcarry.vercel.app/",
    },
    {
        title: "BookHub",
        description: "A modern, full-stack online bookstore tailored for both book lovers and sellers. Delivers a seamless, responsive shopping experience from catalog browsing to secure checkout.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/har-2oc4-22/BookHub",
        live: null,
    },
    {
        title: "Vybe",
        description: "Interactive web application leveraging JavaScript/React for dynamic views.",
        tech: ["JavaScript", "React"],
        github: "https://github.com/har-2oc4-22/Vybe",
        live: "https://vybe-pi-weld.vercel.app",
    }
];

export const competitiveProfiles = [
    {
        platform: "LeetCode",
        username: "HaRsH__ShuKLa",
        description: "Max Rating: 2098 | Knight",
        url: "https://leetcode.com/u/HaRsH__ShuKLa/",
        icon: SiLeetcode,
        color: "text-yellow-500 hover:text-yellow-400 group-hover:text-yellow-500"
    },
    {
        platform: "Codeforces",
        username: "HaRsH_sHUKlA-",
        description: "Max Rating: 1594 | Specialist",
        url: "https://codeforces.com/profile/HaRsH_sHUKlA-",
        icon: SiCodeforces,
        color: "text-blue-500 hover:text-blue-400 group-hover:text-blue-500"
    },
    {
        platform: "CodeChef",
        username: "harsh_shukla22",
        description: "Max Rating: 1742 | 3 Star",
        url: "https://www.codechef.com/users/harsh_shukla22",
        icon: SiCodechef,
        color: "text-orange-500 hover:text-orange-400 group-hover:text-orange-500"
    },
    {
        platform: "AtCoder",
        username: "HaRsH_sHUKlA_",
        description: "Active Competitor",
        url: "https://atcoder.jp/users/HaRsH_sHUKlA_",
        icon: FaCode,
        color: "text-slate-100 hover:text-slate-300 group-hover:text-slate-100"
    },
    {
        platform: "GeeksforGeeks",
        username: "harshshukla22",
        description: "Consistent Problem Solver",
        url: "https://www.geeksforgeeks.org/profile/harshshukla22",
        icon: SiGeeksforgeeks,
        color: "text-green-600 hover:text-green-500 group-hover:text-green-600"
    }
];

export const achievements = [
    {
        title: "LeetCode Knight",
        description: "Achieved a max rating of 2098.",
        link: "https://leetcode.com/u/HaRsH__ShuKLa/"
    },
    {
        title: "Codeforces Specialist",
        description: "Attained a max rating of 1594.",
        link: "https://codeforces.com/profile/HaRsH_sHUKlA-"
    },
    {
        title: "CodeChef 3 Star",
        description: "Reached a peak rating of 1702.",
        link: "https://www.codechef.com/users/harsh_shukla22"
    },
    {
        title: "Global Rank 165 - LeetCode",
        description: "Secured rank 165 globally in LeetCode Weekly Contest 438.",
        link: "https://leetcode.com/contest/weekly-contest-438/ranking/?region=global_v2"
    },
    {
        title: "Rank 187 - CodeChef",
        description: "Placed 42nd globally in CodeChef Starters 131 (Division 2).",
        link: "https://www.codechef.com/rankings/START227B?itemsPerPage=100&order=asc&page=1&sortBy=rank"
    },
    {
        title: "Problem Solving Expert",
        description: "Successfully solved over 1000+ problems across various platforms including LeetCode, Codeforces, and GeeksforGeeks.",
        link: "https://codolio.com/profile/HaRsH_sHUKlA-"
    }
];
