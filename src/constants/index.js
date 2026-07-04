import {
  python,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  threejs,
  git,
  eduskill,
  mathwork,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  CompileVortex,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "JavaScript", icon: javascript },
  { title: "HTML / CSS", icon: html },
  { title: "Git / GitHub", icon: git },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "Node JS", icon: nodejs },
  { name: "React JS", icon: reactjs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Sr. Software Developer",
    company_name: "Anviam",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sept 2025 – Present",
    points: [
      "Building scalable web applications with robust backend architectures.",
      "Implementing comprehensive testing strategies using Cypress.",
      "Containerising applications with Docker for consistent deployment environments.",
      "Managing cloud infrastructure and storage solutions on AWS.",
      "Developing automated workflows that improve operational efficiency.",
      "Creating data-driven solutions through advanced web scraping techniques.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Canam Consultant",
    icon: eduskill,
    iconBg: "#161329",
    date: "July 2024 – Sept 2025",
    points: [
      "Built scalable web applications with robust backend architectures.",
      "Implemented comprehensive testing strategies using Cypress.",
      "Containerised applications with Docker for consistent deployment environments.",
      "Managed cloud infrastructure and storage solutions on AWS.",
      "Developed automated workflows that improve operational efficiency.",
      "Created data-driven solutions through advanced web scraping techniques.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Arctic Innovation",
    icon: edunet,
    iconBg: "#161329",
    date: "Jan 2023 – 2024",
    points: [
      "Web Development — Built robust applications using Django and Flask frameworks.",
      "Data Scraping — Extracted and processed data from various websites and sources.",
      "Automation Solutions — Developed efficient automated systems and processes.",
      "Successfully implemented automation solutions for Arctic Invent.",
      "Specialised in Python-based web application development.",
    ],
  },
  {
    title: "Junior Python Developer",
    company_name: "Ourdesignz",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jan 2021 – 2023",
    points: [
      "Aspiring Junior Developer with knowledge of core Python programming and web development fundamentals.",
      "Developed data scraping techniques to extract and process data from various web sources.",
      "Built web applications using Django and Flask frameworks.",
    ],
  },
];

export const projects = [
  {
    name: "Company Employee REST API",
    description:
      "A full-featured REST API for managing company employee records, built with Django REST Framework and backed by a relational database.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "DRF", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/manishwar-singh/Company_Employee_RESTAPI",
  },
  {
    name: "GUI Connect with API",
    description:
      "A desktop GUI application that connects to and consumes REST APIs, enabling users to interact with backend services through a visual interface.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tkinter", color: "green-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/manishwar-singh/Gui_connect_with_API",
  },
  {
    name: "WebSockets with Python asyncio",
    description:
      "Real-time bidirectional communication server built using Python's asyncio library and the WebSockets protocol.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "asyncio", color: "green-text-gradient" },
      { name: "WebSockets", color: "pink-text-gradient" },
    ],
    image: sketcher,
    source_code_link: "https://github.com/manishwar-singh/WebSockets_python_asyncio",
  },
  {
    name: "TMDB Movie Database",
    description:
      "A web app that fetches and displays movie data from The Movie Database (TMDB) API, with search and filtering capabilities.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TMDB API", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/manishwar-singh/TMBD-movie-database",
  },
  {
    name: "Telebot",
    description:
      "A Telegram bot built with Python that automates messaging workflows and responds to user commands via the Telegram Bot API.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Telegram API", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/manishwar-singh/Telebot",
  },
  {
    name: "Scrape Data Masuper",
    description:
      "A web scraping tool built with Python to extract, clean, and store structured data from target websites.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "BeautifulSoup", color: "green-text-gradient" },
      { name: "Scraping", color: "pink-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/manishwar-singh/Scrape-data_masuper",
  },
];
