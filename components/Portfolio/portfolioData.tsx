import { Portfolio } from "@/types/portfolio";

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "MillionaireMarvel",
    paragraph:
      "Developed MillionaireMarvel, a versatile lottery app featuring React and React Native for web and mobile, supported by a robust backend in Node.js (NestJS) and MongoDB.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Green Mind",
    paragraph:
      "Developed the Green Mind mental health app using NestJS and React Native, demonstrating cross-platform competence and a tech-driven approach to mental health.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Reservzy",
    paragraph:
      "We oversaw the creation of a flexible online appointment booking tool for Reservzy, demonstrating our proficiency with React, Redux, Node.js, MongoDB, and REST APIs.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  // {
  //   id: 3,
  //   title: "HorseHarbor",
  //   paragraph:
  //     "An advanced software solution that combines Ionic Angular, Node.js, and MongoDB, will revolutionize horse training by giving trainers seamless ride-sharing capabilities and owners real-time analytics.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default portfolioData;
