import "./ProjectCard.scss";
import RightArrow from "../../assets/icons/RightArrow";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function ProjectCard({ title, description, link, image }: Readonly<ProjectCardProps>) {
  return (
    <article className="ProjectCard">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="ProjectCard__container">
          <div className="ProjectCard__imageWrapper">
            <img src={image} alt="" className="ProjectCard__image" />
          </div>

          <div className="ProjectCard__content">
            <div className="ProjectCard__heading">
              <h3 className="ProjectCard__title">{title}</h3>
              <span className="ProjectCard__link">
                <RightArrow />
              </span>
            </div>

            <p className="ProjectCard__description">{description}</p>
          </div>
        </div>
      </a>
    </article>
  );
}
