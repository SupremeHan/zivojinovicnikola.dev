import { CardProps } from "../components/Card";
import { InfoCardProps } from "../components/InfoCard";
import { ProjectCardProps } from "../components/ProjectCard";

import artistImage from "/artist.png";
import darmarImage from "/darmar.png";
import fitnessImage from "/fitness.png";
import rqmImage from "/rqm.png";
import planaImage from "/plan-a.png";
import portfolioImage from "/portfolio.png";

export const experienceCards = [
  {
    title: "Software Engineer",
    subTitle: "Bright Marbles",
    dateRange: "May 2022 - Present",
    description: [
      `Engaged in a healthcare project from the beginning with a 4-
        member frontend team.`,
      `Set up the project structure and collaborated on determining
        the project's best approach.`,
      `Constructed all UI components, including tables, dropdowns,
        input/select fields, modals, and graphs from scratch.`,
      `Covered all critical parts and functionalities of the app with unit
        tests.`,
      `Initially used Jest and RTL, later migrated to Vite for enhanced
        performance.`,
    ],
    link: "https://brightmarbles.io/",
  },
  {
    title: "Junior Software Engineer",
    subTitle: "Shandoola",
    dateRange: "October 2021 - April 2022",
    description: [
      `Worked concurrently on both web and mobile applications in
        the booking domain.`,
      `Developed features aligned with business requirements,
        addressed bugs, and actively contributed to ideation sessions
      for future enhancements.`,
      `Collaborated with senior colleagues to establish project
        infrastructure.`,
      `Utilized React-Redux for state management and implemented
        Material UI for seamless UI component development.`,
      `Designed the whole look of the landing page for a streaming
        platform.`,
      `Made it easy for users to navigate and find what they're looking
        for.`,
    ],
    link: "https://shandoola.com/",
  },
  // {
  //   title: "Personal projects",
  //   subTitle: "Freelance",
  //   dateRange: "January 2021 - Present",
  //   description: `I've developed websites for local business in Belgrade like moving companies, woodwork shops.
  //   Also I've done some projects that seemed fun to me. Sometimes I would be curious about new technology and I tried
  //   to implemnt that into the real project. You can check out some of the clicking on the link below that will lead
  //   you to my github account.`,
  //   link: "https://github.com/SupremeHan",
  // },
] as CardProps[];

export const cards = [
  {
    title: "PlanA moving company",
    description: "Webiste created for a moving company in Belgrade.",
    link: "https://github.com/SupremeHan/plan-a",
    image: planaImage,
  },
  {
    title: "Portfolio V2",
    description:
      "I would like to point out this portfoio because i think it really showcase my skills as a frontend developer. I've used best practitces that i learned so far and applied them on this project.",
    link: "https://github.com/SupremeHan/zivojinovicnikola.dev",
    image: portfolioImage,
  },

  {
    title: "Graphic Designer portfolio",
    description:
      "Portfolio made for a graphic designer student, so he can showcase his work. Made with pure javascript.",
    link: "https://github.com/SupremeHan/ArtistPage",
    image: artistImage,
  },
  {
    title: "Fitness App",
    description:
      "Full stack web application, created as a part of personal project. You can create an account, have personal training plan, track your progress, read fitness related articles.",
    link: "https://github.com/SupremeHan/fitnessApp-frontend",
    image: fitnessImage,
  },

  {
    title: "DarMar Catering",
    description:
      "Website for catering company Dar Mar. Showcase of their company, their menu and contact information.",
    link: "https://github.com/SupremeHan/app-catering",
    image: darmarImage,
  },
  {
    title: "Requierement Model App",
    description:
      "Application based on PowerDesigner requirements model. Create and menage multiple projects and teams. Convert your class diagrams to java classes.",
    link: "https://github.com/SupremeHan/rqm_app",
    image: rqmImage,
  },
] as ProjectCardProps[];

export const infoCards = [
  {
    title: "Photos of this name",
    description:
      "Search photos based on name you input, app was made using React Native and Flick API.",
    link: "https://github.com/SupremeHan/photos-of-this-name",
  },
  {
    title: "Portfolio v1",
    description: "First version of my portfolio site, made with NextJs.",
    link: "https://github.com/SupremeHan/app-portfolio",
  },
  {
    title: "Shows tracker",
    description:
      "App made with React and tmdb api, you can search for tv shows, mark them as viewed or save them as favorite so you can have collection of your favorite shows at one place.",
    link: "https://github.com/SupremeHan/shows-tracker",
  },
  {
    title: "Lyrics App",
    description:
      "An android app that helps you find lyrics for your favorite songs, made using Kotlin and Musixmatch API.",
    link: "https://github.com/SupremeHan/LyricsApp",
  },
  {
    title: "Github users",
    description:
      "App the let you search for Github users and see their repositories, using the Github API. Made with React and React Redux.",
    link: "https://github.com/SupremeHan/github-app",
  },
  {
    title: "Fast food ordering",
    description:
      "One of the first frontend apps I created using Angular framework. Tha app let's you choose food you want to order and put it in cart.",
    link: "https://github.com/SupremeHan/Food-App-Angular",
  },
] as InfoCardProps[];
