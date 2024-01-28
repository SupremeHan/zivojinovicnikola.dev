import { InfoCard } from "../../components/InfoCard";
import { ProjectCard } from "../../components/ProjectCard";
import { cards, infoCards } from "../../utils/data";
import "./Projects.scss";

export function Projects() {
  return (
    <section className="Projects" id="projects">
      <div className="Projects__header">
        <h2 className="Projects__title">
          Projects<strong>.</strong>
        </h2>
        <p className="Projects__description">
          I love building projects and learning new things. Below you can find my personal projects
          I am most proud of proud of. All my projects are available on
          <a href="https://github.com/SupremeHan" target="_blank" rel="noreferrer">
            Github.
          </a>
        </p>
      </div>

      <div className="Projects__cards">
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </div>
      <div className="Projects__infoCards">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
