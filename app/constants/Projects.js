import d3 from "@/public/images/projects_images/3d.png";
import m2blog from "@/public/images/projects_images/m2-blog.png";
import promptopia from "@/public/images/projects_images/promptopia.png";
import repos from "@/public/images/projects_images/repos.png";
import rick from "@/public/images/projects_images/rick.png";
import sphere from "@/public/images/projects_images/sphere.png";
import wikirocket from "@/public/images/projects_images/wikirocket.png";
import tsaou from "@/public/images/projects_images/tsaou.png";
import yummy from "@/public/images/projects_images/yummy.png";
import pawtales from "@/public/images/projects_images/pawtales.png";

export const projects = [
  {
    id: 1,
    name: "PawTales",
    technologies: [
      "HTML",
      "SCSS",
      "React",
      "Vite",
      "JavaScript",
      "Context API",
      "Firebase",
      "Axios",
      "Framer Motion",
      "Emailjs",
      "React Share",
    ],
    description:
      "PawTales is a delightful web app built with React and Vite, designed to entertain and educate children about the wonderful world of animals. Our aim is to foster a love for animals and promote their protection from a young age. With engaging stories and interactive features, PawTales is the perfect place for kids to explore and learn.",
    image: pawtales,
    github: "https://github.com/Michalis-Mel/PawTales",
    live: "https://michalis-mel.github.io/PawTales/#/PawTales",
  },
  {
    id: 2,
    name: "YummyGreek Restaurant",
    technologies: ["HTML", "Sass", "React", "JavaScript"],
    description:
      "Yummy Greek Restaurant is a web application dedicated to sharing information about our restaurant. It provides details about our menu, dish details and allows users to make their order.",
    image: yummy,
    github: "https://github.com/Michalis-Mel/Yummy_Greek_Restaurant",
    live: "https://michalis-mel.github.io/Yummy_Greek_Restaurant/",
  },
  {
    id: 3,
    name: "M² Blog",
    technologies: ["React", "ThreeJs", "NextJs 13", "Redux", "Sass"],
    description:
      "This project is a personal blogging platform that empowers bloggers to effortlessly create and manage their online presence. This open-source platform provides a user-friendly interface for publishing articles, organizing content into categories, and engaging with readers through comments. With features like user authentication and social media sharing, M² Blog ensures a seamless and responsive experience across devices. It is a powerful tool for bloggers to share their thoughts, connect with a wider audience, and establish their online presence effectively.",
    image: m2blog,
    github: "https://github.com/Michalis-Mel/m2-blog",
    live: "https://m2-blog.vercel.app/",
  },
  {
    id: 4,
    name: "WikiRocket",
    technologies: ["React", "TailwindCSS", "NextJs 13", "Typescript"],
    description:
      "WikiRocket is a project that is offering a collaborative and efficient solution for retrieving information from Wikipedia. This open-source platform utilizes modern web technologies and frameworks to provide a user-friendly interface, enabling users to easily create, edit, and organize wiki pages. With its intuitive features and streamlined workflow, it empowers individuals and teams to collaborate seamlessly, share knowledge, and contribute to a centralized repository of information. It serves as a versatile tool for knowledge sharing and documentation, facilitating efficient collaboration and enhancing productivity in various domains and industries.",
    image: wikirocket,
    github: "https://github.com/Michalis-Mel/wikirocket",
    live: "https://wikirocket-m.vercel.app/",
  },
  {
    id: 5,
    name: "M² Webworks | 3D Portfolio",
    technologies: ["React", "TailwindCSS", "ThreeJs", "Vite", "Framer Motion"],
    description:
      "This is a sample 3D Portfolio,  which showcases my creative talent and technical skills. This GitHub repository houses a visually stunning 3D portfolio website that pushes the boundaries of web design and interactivity. With captivating visuals and smooth animations, the portfolio effectively highlights the developer's projects and expertise in a dynamic and engaging manner. By combining cutting-edge technologies and artistic design, it stands out as a remarkable demonstration of innovation and craftsmanship, leaving a lasting impression on visitors.",
    image: d3,
    github: "https://github.com/Michalis-Mel/3d-portfolio",
    live: "https://3d-portfolio-brown.vercel.app/",
  },
  {
    id: 6,
    name: "M² Repositories",
    technologies: ["React", "NextJs 13", "Sass"],
    description:
      "M² Repositories represents a versatile repository management tool that offers visitors a seamless and efficient opportunity to access a comprehensive collection of my repositories. With its user-friendly interface, this tool facilitates fast and effortless navigation, allowing users to effortlessly explore and peruse the entirety of my repository portfolio. By harnessing the capabilities of M² Repositories, visitors are provided with a convenient platform to swiftly and easily discover the full spectrum of my projects, enabling streamlined access to my extensive body of work.",
    image: repos,
    github: "https://github.com/Michalis-Mel/m2-repositories",
    live: "https://m2-repositories.vercel.app/",
  },
  {
    id: 7,
    name: "Promptopia",
    technologies: [
      "React",
      "NextJs 13",
      "Next Authentication",
      "TailwindCSS",
      "Mongo DB",
      "Mongoose",
      "Bcrypt",
    ],
    description:
      "Promptopia is an innovative platform which offers a captivating and immersive experience for users to create and explore dynamic prompts for AI tools. With its intuitive interface and versatile features, Promptopia enables visitors to create their own prompts collection and share it with everyone. ",
    image: promptopia,
    github: "https://github.com/Michalis-Mel/promptopia",
    live: "https://m2-promptopia.vercel.app/",
  },
  {
    id: 8,
    name: "Sphere",
    technologies: ["Vite", "ThreeJs", "Gsap"],
    description:
      "The Sphere project, is an impressive demonstration of three-dimensional graphics and visual effects. This repository showcases a visually stunning interactive sphere rendered using advanced rendering techniques. With its intricate details and captivating visualizations, Sphere pushes the boundaries of graphical representation, immersing users in a visually captivating experience. Exploring Sphere on GitHub provides a glimpse into the possibilities of cutting-edge graphics technology and its potential applications in various fields.",
    image: sphere,
    github: "https://github.com/Michalis-Mel/Sphere",
    live: "https://michalis-mel.github.io/Sphere/",
  },
  {
    id: 9,
    name: "Rick & Morty",
    technologies: ["React", "Redux", "Sass", "Axios"],
    description:
      "The Rick & Morty project, pays homage to my favorite TV show, by leveraging an API to provide visitors with comprehensive information about the show. This GitHub repository houses a dynamic web application that fetches data from the API, offering users access to details about characters, episodes, and more. By utilizing this project, fans of Rick & Morty can immerse themselves in a rich database of information, deepening their knowledge and enhancing their overall viewing experience.",
    image: rick,
    github: "https://github.com/Michalis-Mel/rick_morty",
    live: "https://michalis-mel.github.io/rick_morty/",
  },
  {
    id: 10,
    name: "Tsaousis Accounting",
    technologies: ["Wordpress", "CSS"],
    description:
      "The website for Tsaousis Accounting is a reliable platform that offers comprehensive accounting services. With a user-friendly interface, it provides valuable information about the firm's expertise and range of services, including tax planning, financial reporting, and auditing. Demonstrating professionalism and attention to detail, Tsaousis Accounting serves as a trusted resource for individuals and businesses seeking expert accounting assistance.",
    image: tsaou,
    github: "",
    live: "https://www.tsaousis-accounting.gr/",
  },
];
