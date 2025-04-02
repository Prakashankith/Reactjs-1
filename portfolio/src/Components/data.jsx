import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial1 from "../assets/girl.png"
import testimonial2 from "../assets/boy.png"
import Digital from "../assets/Digital.png"
import Clothify from "../assets/Clothify.png"
import Nike from "../assets/Nike.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Mobile Apps",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    // {
    //     title:"Photography",
    //     desc:"The most modern and high-quality design made at a professional level.",
    //     logo: <FaCamera/>
    // },
]

export const testimonials = [
    {
        name:"Vanshika Sondhiya",
        para:"Rohit is a highly talented website developer! He understands requirements well and creates clean, user-friendly websites. Great work and highly recommended! ",
        img: testimonial1
    },
    {
        name:"Aman Sharma",
        para:"Rohit is an excellent website developer! He is skilled, professional, and delivers fast, responsive websites. Highly recommended!",
        img: testimonial2
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      icon: workIcon,
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    },
    {
      icon: workIcon,
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: workIcon,
      date: '2021 - 2023',
      title: 'Customer Support Executive',
      subtitle: 'Lyfesolve Marketing Service',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '2018-2021',
      title: 'Bachelor of Science (BSC)',
      subtitle: 'Bangabasi Morning College',
      desc: 'Strategy, Social Media',
    },
    {
      icon: schoolIcon,
      date: '2016-2018',
      title: 'Higher Secondary (HS)',
      subtitle: 'Adarsh Madhyamik Vidhyalaya',
      desc: 'Creative Direction, User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '2016',
      title: 'Madhyamik (10th)',
      subtitle: 'A.R.N.C Vidhyalaya',
      desc: 'Creative Direction, Visual Design',
    },
    { icon: starIcon },
  ];

export const projects = [
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
      link: "https://business420.netlify.app/",
      github: 'https://github.com/rohitsingh93300/YTBusiness',
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "Nike Shoes",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://nike-topaz-delta.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Nike',
      image: Nike, // Replace with your project screenshot
    },
//     {
//       title: "Clothify",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
//       techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
//       link: "https://clothify-two.vercel.app/",
//       github: 'https://github.com/rohitsingh93300/YT-Clothify',
//       image: Clothify, // Replace with your project screenshot
//     },
  ];