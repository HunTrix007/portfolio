import profile from "./assets/images/profile.png";
import html5 from "./assets/images/techstack/html.png";
import css3 from "./assets/images/techstack/css.png";
import js from "./assets/images/techstack/js.png";
import react from "./assets/images/techstack/react.png";
import nodejs from "./assets/images/techstack/nodejs.png";
import mongodb from "./assets/images/techstack/mongodb.png";
import git from "./assets/images/techstack/git.png";

const data = {
    profile: {
        profilePhoto: profile,
        firstName: 'Sachinthaka',
        lastName: 'Ayeshmantha',
        jobTitles: ['Software Engineer', 'Web Developer', 'Mobile Developer'],
        cv: "/portfolio/assets/sachinthaka_ayeshmantha_cv.pdf",
        socials:[
            {
                link: "https://www.linkedin.com/in/sachi002",
                icon: "fab fa-linkedin"
            },
            {
                link: "https://github.com/HunTrix007",
                icon: "fab fa-github"
            },
            {
                link: "https://www.instagram.com/sachi_002",
                icon: "fab fa-instagram"
            },
            {
                link: "https://wa.me/+94740276949",
                icon: "fab fa-whatsapp"
            }
        ]
    },
    about: {
        desc: `I'm Sachinthaka Ayeshmantha, a web designer and mobile developer from Sri Lanka. With extensive experience in web design, development, and customization, I'm passionate about creating unique, functional solutions. Let's connect and bring your projects to life!`,
        birthDate: '2002-12-08',
        residence: 'Malabe, Sri Lanka',
        freelance: 'Available',
        address: '138/k Ihalayagoda, Gampaha, Sri Lanka',
    },
    services: [ 
        {
            title: 'Web Design',
            icon: 'fas fa-paint-brush',
            description: 'Visually stunning and responsive websites that captivate users and drive engagement.'
        },
        {
            title: 'Web Development',
            icon: 'fas fa-code',
            description: 'Modern, fast, and secure websites tailored to meet your business needs.'
        },
        {
            title: 'Mobile Development',
            icon: 'fas fa-mobile',
            description: 'Intuitive and high-performance mobile apps for Android and iOS platforms.'
        },
        {
            title: 'UI/UX Design',
            icon: 'ion ion-android-color-palette',
            description: 'User-friendly interfaces that ensure a seamless and engaging user experience.'
        }
    ],
    technologies: [
        {
            title: 'HTML5',
            img: html5
        },
        {
            title: 'CSS3',
            img: css3
        },
        {
            title: 'JavaScript',
            img: js
        },
        {
            title: 'React',
            img: react
        },
        {
            title: 'SQL Server',
            img: nodejs,
        },
        {
            title: 'MySQL',
            img: nodejs,
        },
        {
            title: 'PHP',
            img: nodejs,
        },
        {
            title: 'Golang',
            img: nodejs,
        },
        {
            title: 'AWS',
            img: nodejs,
        },
        {
            title: 'Java',
            img: nodejs,
        },
        {
            title: 'C++',
            img: nodejs,
        },
        {
            title: 'C',
            img: nodejs,
        },
        {
            title: 'Postman',
            img: nodejs,
        },
        {
            title: 'GitHub',
            img: nodejs,
        },
        {
            title: 'cPanel',
            img: nodejs,
        },
        {
            title: 'Google Console',
            img: nodejs,
        },
        {
            title: 'Flutter',
            img: nodejs,
        },
        {
            title: 'Node.js',
            img: nodejs
        },
        {
            title: 'MongoDB',
            img: mongodb
        },
        {
            title: 'Git',
            img: git
        }
    ]

}

export default data;