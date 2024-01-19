import RightArrow from "../../assets/icons/RightArrow";
import "./InfoCard.scss";

export interface InfoCardProps {
  title: string;
  description: string;
  link: string;
}

export function InfoCard({ title, description, link }: Readonly<InfoCardProps>) {
  return (
    <article className="InfoCard">
      <a href={link}>
        <div className="InfoCard__container">
          <div className="InfoCard__heading">
            <h3 className="InfoCard__title">{title}</h3>
            <span className="InfoCard__link">
              <RightArrow />
            </span>
          </div>
          <p className="InfoCard__description">{description}</p>
        </div>
      </a>
    </article>
  );
}
