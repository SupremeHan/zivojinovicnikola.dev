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
import "./Experience.scss";

export function Experience() {
  return (
    <section className="Experience" id="experience">
      <h2 className="Experience__title">
        Experience<strong>.</strong>
      </h2>

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
      <h5 className="Experience__subTitle">
        Technologies I use<strong>.</strong>
      </h5>
      <div className="Experience__techWrapper">
        <div className="Experience__tech">
          <p className="Experience__tech__title">Languages</p>
          <div className="Experience__tech__section">
            <JavaScriptIcon />
            <TypeScriptIcon />
            <NodeIcon />
          </div>
        </div>

        <div className="Experience__tech">
          <p className="Experience__tech__title">Frontend</p>
          <div className="Experience__tech__section">
            <ReactIcon />
            <NextIcon />
            <ReactRouterIcon />
            <JestIcon />
          </div>
        </div>

        <div className="Experience__tech">
          <p className="Experience__tech__title">Styles</p>
          <div className="Experience__tech__section">
            <SassIcon />
            <CssIcon />
            <MuiIcon />
          </div>
        </div>

        <div className="Experience__tech">
          <p className="Experience__tech__title">Tools</p>
          <div className="Experience__tech__section">
            <VsCodeIcon />
            <GithubIcon />
            <GitIcon />
            <VercelIcon />
            <ViteIcon />
            <FigmaIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
