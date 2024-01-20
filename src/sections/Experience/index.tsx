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
import { experienceCards } from "../../utils/data";
import "./Experience.scss";

export function Experience() {
  return (
    <section className="Experience" id="experience">
      <h2 className="Experience__title">
        Experience<strong>.</strong>
      </h2>

      <div className="Experience__container">
        {experienceCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subTitle={card.subTitle}
            dateRange={card.dateRange}
            description={card.description}
            link={card.link}
          />
        ))}
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
