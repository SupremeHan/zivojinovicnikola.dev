import { InfoCardProps } from "../components/InfoCard";
import { ProjectCardProps } from "../components/ProjectCard";

import ProjectImage from "/Screenshot_2.png";

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
