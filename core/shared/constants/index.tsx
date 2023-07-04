import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaMedium } from 'react-icons/fa';

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
      { title: "About Us", url: "/", icon: "" },
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
      { title: "LinkedIn", url: "https://linkedin.com/company/turntabl", icon: <FaLinkedin /> },
      { title: "Twitter", url: "https://twitter.com/turntablio", icon: <FaTwitter /> },
      { title: "Youtube", url: "https://youtube.com/@turntablgh", icon: <FaYoutube /> },
      { title: "Github", url: "/", icon: <FaGithub /> },
      { title: "Medium", url: "/", icon: <FaMedium /> }
    ],
  },
];

export const histories = [
  {
    title: "Global Code",
    date: "Jan 2019 - Feb 2020",
    icon: "image",
    iconBg: "#383E56",
    story: "A short story about Global Code"
  }, {
    title: "Turntabl",
    date: "Jan 2019 - Feb 2020",
    icon: "image",
    iconBg: "#383E56",
    story: "A short story about Turntabl"
  }
]

export const founders = [
  {
    name: "Sam",
    position: "CEO",
    image: "/assets/img/20230317_113148 (1).jpg",
    links: [
      {
        title: "twitter",
        url: ""
      }
    ]
  },
  {
    name: "Obeng",
    position: "CTO",
    image: "/assets/img/20230317_113148 (1).jpg",
    links: [
      {
        title: "twitter",
        url: ""
      }
    ]
  }
]
