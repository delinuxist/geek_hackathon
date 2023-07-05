import {
  envBlog,
  iotExplained,
  symbolicValues,
} from "../../../public/assets/img";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
export const navLinks = [
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Clients",
    url: "/clients",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "About Us", url: "/about", icon: "" },
      { title: "Why Ghana?", url: "/", icon: "" },
      { title: "Our People", url: "/", icon: "" },
      { title: "Featured Content", url: "/", icon: "" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/", icon: "" },
      { title: "Blog", url: "/", icon: "" },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        title: "LinkedIn",
        url: "https://linkedin.com/company/turntabl",
        icon: <FaLinkedin />,
      },
      {
        title: "Twitter",
        url: "https://twitter.com/turntablio",
        icon: <FaTwitter />,
      },
      {
        title: "Youtube",
        url: "https://youtube.com/@turntablgh",
        icon: <FaYoutube />,
      },
      { title: "Github", url: "/", icon: <FaGithub /> },
      {
        title: "Medium",
        url: "https://medium.com/@turntabl.io",
        icon: <FaMedium />,
      },
    ],
  },
];

export const values = [
  {
    number: "01",
    title: "Innovative",
    description:
      "Turntabl is changing the way the world thinks about software development.",
  },
  {
    number: "02",
    title: "Experts",
    description:
      "Turntabl has considerable experience in delivering successful projects.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Turntabl is built on the ideal of contributing towards creating a better future for everyone they come across.",
  },
  {
    number: "04",
    title: "Unique",
    description:
      "Turntabl offers world-leading training to their associates before engaging in client projects.",
  },
];

export const clientReview = [
  {
    review:
      "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
    name: "Arynton Senna",
    title: "Vice president",
    image: "",
  },
  {
    review:
      "The best agency we've worked with so far. With great power comes great responsibility. Box for fastest lap.",
    name: "Max Verstappen",
    title: "Vice president",
    image: "",
  },
  {
    review:
      "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
    name: "Lewis Hamiltton",
    title: "Vice president",
    image: "",
  },
];

export const faqs = [
  {
    question: "How much time does it take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How do you communicate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "I have a bigger project. Can you handle it?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const blogPosts = [
  {
    image: envBlog,
    date: "26 June 2023",
    title: "Is environmental sustainability pretentious or boring?",
    link: "https://medium.com/@turntabl.io/is-environmental-sustainability-pretentious-or-boring-a50e5b8008af",
    description:
      "Recently, a few turntablrs and I attended a live, environmental podcast with GOTO and participated in some intriguing conversations about sustainability.",
  },
  {
    image: symbolicValues,
    date: "15 May 2023",
    title:
      "Symbolic Values: Why We Wove Our Software Consultancy from Ghana's Historic Fabrics",
    link: "https://medium.com/@turntabl.io/symbolic-values-why-we-wove-our-software-consultancy-from-ghanas-historic-fabrics-69fb0dc189ba",
    description:
      "You may have noticed one of these symbols on local traditional clothing and wondered why it's there. What is it? Where does it come from?",
  },
  {
    image: iotExplained,
    date: "02 May 2023",
    title: "IoT Explained: Why The Internet of Things is Our Future",
    link: "https://medium.com/@turntabl.io/iot-explained-why-the-internet-of-things-is-our-future-dbf9107d7382",
    description:
      "Today, we're thinking about the Internet of Things. It's the automation technology that's propelled our businesses and lifestyles well into the 21st century. Here's the turntabl take on the global efficiency revolution.",
  },
];
export const histories = [
  {
    title: "Global Code",
    date: "Jan 2019 - Feb 2020",
    icon: "image",
    iconBg: "#383E56",
    story: "A short story about Global Code",
  },
  {
    title: "Turntabl",
    date: "Jan 2019 - Feb 2020",
    icon: "image",
    iconBg: "#383E56",
    story: "A short story about Turntabl",
  },
];

export const founders = [
  {
    name: "Sam",
    position: "CEO",
    image: "/assets/img/20230317_113148 (1).jpg",
    links: [
      {
        title: "twitter",
        url: "",
      },
    ],
  },
  {
    name: "Obeng",
    position: "CTO",
    image: "/assets/img/20230317_113148 (1).jpg",
    links: [
      {
        title: "twitter",
        url: "",
      },
    ],
  },
];
