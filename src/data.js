import profile from "./assets/images/profile.png";

// Tech
import html5 from "./assets/images/techstack/html.png";
import css3 from "./assets/images/techstack/css.png";
import js from "./assets/images/techstack/js.png";
import react from "./assets/images/techstack/react.png";
import nodejs from "./assets/images/techstack/nodejs.png";
import mongodb from "./assets/images/techstack/mongodb.png";
import git from "./assets/images/techstack/git.png";
import sqlserver from "./assets/images/techstack/sqlserver.png";
import mysql from "./assets/images/techstack/mysql.png";
import php from "./assets/images/techstack/php.png";
import go from "./assets/images/techstack/go.png";
import aws from "./assets/images/techstack/aws.png";
import java from "./assets/images/techstack/java.png";
import cpp from "./assets/images/techstack/cpp.png";
import c from "./assets/images/techstack/c.png";
import cpanel from "./assets/images/techstack/cpanel.png";
import postman from "./assets/images/techstack/postman.png";
import googlecloud from "./assets/images/techstack/googlecloud.png";
import flutter from "./assets/images/techstack/flutter.png";
import github from "./assets/images/techstack/github.png";

// Clients
import pixelcoreholdings from "./assets/images/clients/pixelcoreholdings.png";
import pixelcoreit from "./assets/images/clients/pixelcoreit.png";

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
            title: 'React',
            img: react
        },
        {
            title: 'Node.js',
            img: nodejs
        },
        {
            title: 'Golang',
            img: go,
        },
        {
            title: 'Flutter',
            img: flutter,
        },
        {
            title: 'PHP',
            img: php,
        },
        {
            title: 'Java',
            img: java,
        },
        {
            title: 'SQL Server',
            img: sqlserver,
        },
        {
            title: 'MySQL',
            img: mysql,
        },
        {
            title: 'MongoDB',
            img: mongodb
        },
        {
            title: 'AWS',
            img: aws,
        },
        {
            title: 'Google Console',
            img: googlecloud,
        },
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
            title: 'C',
            img: c,
        },
        {
            title: 'C++',
            img: cpp,
        },
        {
            title: 'Postman',
            img: postman,
        },
        {
            title: 'cPanel',
            img: cpanel,
        },
        {
            title: 'Git',
            img: git
        },
        {
            title: 'GitHub',
            img: github,
        },
    ],
    clients: [
        {
            name: 'PixelCore Holdings (Pvt) Ltd.',
            img: pixelcoreholdings,
            link: 'https://pixelcore.lk'
        },
        {
            name: 'PixelCore IT Solutions',
            img: pixelcoreit,
            link: 'https://pixelcore.lk'
        }
    ],
    testimonials: [
        {
            name: '',
            job: '',
            img: '',
            quote: ''
        }
    ],
    resume: {
        experience: [
            {
                duration: '2024 Feb - Present',
                role: 'Associate Software Engineer',
                company: '21c Care (Pvt) Ltd.',
                desc: 'Lead and develop web based systems for hospitals, schools, pharmacies and more.',
                img: '',
                isActive: true
            },
            {
                duration: '2023 Dec - 2024 Feb',
                role: 'Intern Software Engineer',
                company: '21c Care (Pvt) Ltd.',
                desc: 'Contribute to ongoing projects while learning new technologies and best practices.',
                img: '',
            }
        ],
        education: [
            {
                duration: '2022 Jan - 2026 Jan',
                qualification: 'BSc (Hons) in Software Engineering',
                institute: 'Sri Lanka Institute of Information Technology',
                img: '',
                isActive: true
            },
            {
                duration: '2021',
                qualification: 'International Advanced Level (IAL)',
                institute: 'Horizon College International',
                img: '',
            },
        ]
    },
    

}

export default data;