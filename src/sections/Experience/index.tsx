import {
  CssIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  JavaScriptIcon,
  JestIcon,
  MuiIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  ReactRouterIcon,
  SassIcon,
  TypeScriptIcon,
  VercelIcon,
  VsCodeIcon,
} from "../../assets/icons";
import ViteIcon from "../../assets/icons/Vite";
import { Card } from "../../components/Card";
import { IconWrapper } from "../../components/IconWrapper";
import { Tooltip } from "../../components/Tooltip";
import "./Experience.scss";

export function Experience() {
  return (
    <section className="Experience" id="experience">
      <h2 className="Experience__title">Experience.</h2>

      <div className="Experience__container">
        <Card
          title="Software Engineer"
          subTitle="Bright Marbles"
          dateRange="May 2022 - Present"
          description=" As a dedicated frontend developer at Bright Marbles, I've played a pivotal role in
          enhancing our digital presence. Leveraging my expertise, I've contributed to the
          creation of visually stunning and user-friendly web interfaces that seamlessly translate
          design concepts into interactive experiences. Proficient in cutting-edge technologies,
          I've been responsible for implementing responsive designs, optimizing performance, and
          ensuring a cohesive and engaging online platform for our users. My work reflects a
          commitment to delivering top-notch frontend solutions that align with and elevate Bright
          Marbles's online identity."
        />

        <Card
          title="Junior Software Engineer"
          subTitle="Shandoola"
          dateRange="October 2021 - April 2022"
          description=" As a dedicated frontend developer at Shandoola, I've played a pivotal role in enhancing
          our digital presence. Leveraging my expertise, I've contributed to the creation of
          visually stunning and user-friendly web interfaces that seamlessly translate design
          concepts into interactive experiences. Proficient in cutting-edge technologies, I've
          been responsible for implementing responsive designs, optimizing performance, and
          ensuring a cohesive and engaging online platform for our users. My work reflects a
          commitment to delivering top-notch frontend solutions that align with and elevate
          Shandoola's online identity."
        />

        <Card
          title="Freelance"
          subTitle="Personal projects"
          dateRange="January 2021 - Present"
          description="As a dedicated frontend developer at Shandoola, I've played a pivotal role in enhancing
          our digital presence. Leveraging my expertise, I've contributed to the creation of
          visually stunning and user-friendly web interfaces that seamlessly translate design
          concepts into interactive experiences. Proficient in cutting-edge technologies, I've
          been responsible for implementing responsive designs, optimizing performance, and
          ensuring a cohesive and engaging online platform for our users. My work reflects a
          commitment to delivering top-notch frontend solutions that align with and elevate
          Shandoola's online identity."
        />
      </div>

      {/* !!TODO: Refactor this and move it somewhere else  */}
      {/* <h5 className="Experience__subTitle">Technologies I use.</h5>
      <div className="Experience__techWrapper">
        <div className="Experience__tech">
          <p className="Experience__tech__title">Languages</p>
          <div className="Experience__tech__section">
            <Tooltip text="JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on websites.">
              <JavaScriptIcon />
            </Tooltip>
            <Tooltip text="TypeScript is a superset of JavaScript that adds static typing to the language, enhancing code quality and maintainability.">
              <TypeScriptIcon />
            </Tooltip>
            <Tooltip text="Node.js is a server-side JavaScript runtime.">
              <NodeIcon />
            </Tooltip>
          </div>
        </div>

        <div className="Experience__tech">
          <p className="Experience__tech__title">Frontend</p>
          <div className="Experience__tech__section">
            <Tooltip text="React is a JavaScript library for building user interfaces, particularly for creating interactive and reusable UI components in web applications.">
              <ReactIcon />
            </Tooltip>
            <Tooltip text="Next.js is a React framework that simplifies the development of server-rendered React applications.">
              <NextIcon />
            </Tooltip>
            <Tooltip text="React Router is a library for navigation and routing in React applications.">
              <ReactRouterIcon />
            </Tooltip>
            <Tooltip text="JavaScript testing framework">
              <JestIcon />
            </Tooltip>
          </div>
        </div>

        <div className="Experience__tech">
          <p className="Experience__tech__title">Styles</p>
          <div className="Experience__tech__section">
            <Tooltip text="Sass is a CSS preprocessor with added features like variables and nesting for more maintainable stylesheets.">
              <SassIcon />
            </Tooltip>
            <Tooltip text="Used to make our websites much prettier!">
              <CssIcon />
            </Tooltip>
            <Tooltip text="React UI framework">
              <MuiIcon />
            </Tooltip>
          </div>
        </div>

        <div className="Experience__tech">
          <p className="Experience__tech__title">Tools</p>
          <div className="Experience__tech__section">
            <Tooltip text="My code editor of choice :)">
              <VsCodeIcon />
            </Tooltip>
            <Tooltip text="Collaboration platform for open-source">
              <GithubIcon />
            </Tooltip>
            <Tooltip text="Vs code is text editor">
              <GitIcon />
            </Tooltip>
            <Tooltip text="Vercel is a cloud platform that offers serverless deployment and hosting for web applications.">
              <VercelIcon />
            </Tooltip>
            <Tooltip text="Build tool for modern web development that focuses on fast development and optimized production builds.">
              <ViteIcon />
            </Tooltip>
            <Tooltip text="Design and prototyping tool wich helped me build this webiste.">
              <FigmaIcon />
            </Tooltip>
          </div>
        </div> 
      </div>*/}
    </section>
  );
}
