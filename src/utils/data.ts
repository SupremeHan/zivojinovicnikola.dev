import { CardProps } from "../components/Card";
import { InfoCardProps } from "../components/InfoCard";
import { ProjectCardProps } from "../components/ProjectCard";

import ProjectImage from "/Screenshot_2.png";

export const experienceCards = [
  {
    title: "Software Engineer",
    subTitle: "Bright Marbles",
    dateRange: "May 2022 - Present",
    description: `I actively contributed to a healthcare project from its initiation, 
          collaborating with a 4-member frontend team.
           We collectively shaped the project structure, 
           and I played a key role in determining the best approach.
            Crafting UI components such as tables, dropdowns, input fields,
             modals, and graphs from scratch, I ensured a tailored and 
             user-friendly experience. Rigorous unit testing, initially
              using Jest and RTL, later migrated to Vite for enhanced 
              performance, covered all critical app functionalities. 
              My hands-on involvement and holistic approach contributed
               to a reliable healthcare application that met stringent 
               standards.`,
    link: "https://brightmarbles.io/",
  },
  {
    title: "Junior Software Engineer",
    subTitle: "Shandoola",
    dateRange: "October 2021 - April 2022",
    description: `Simultaneously managing responsibilities for web and mobile applications
     in the booking domain, I played a key role in developing features aligned with business
     requirements. Addressing bugs and ensuring smooth functionality, I actively participated
      in ideation sessions for future enhancements. This dual-focus approach allowed me to 
      maintain a comprehensive view of the applications, contributing to their ongoing success.
    Collaborating with senior colleagues, I established project infrastructure,
     utilizing React-Redux for state management and implementing Material UI for 
     seamless UI development. Taking charge of designing the landing page for a
      streaming platform, I aimed to provide an engaging and user-friendly experience,
       making content easily accessible to users.`,
    link: "https://shandoola.com/",
  },
  {
    title: "Personal projects",
    subTitle: "Freelance",
    dateRange: "January 2021 - Present",
    description: `I've developed websites for local business in Belgrade like moving companies, woodwork shops.
    Also I've done some projects that seemed fun to me. Sometimes I would be curious about new technology and I tried
    to implemnt that into the real project. You can check out some of the clicking on the link below that will lead
    you to my github account.`,
    link: "https://github.com/SupremeHan",
  },
] as CardProps[];

export const cards = [
  {
    title: "Portfolio Site",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link: "#",
    image: ProjectImage,
  },

  {
    title: "Portfolio Site 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link: "#",
    image: ProjectImage,
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
