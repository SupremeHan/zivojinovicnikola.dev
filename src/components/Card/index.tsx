import "./Card.scss";

interface CardProps {
  title: string;
  subTitle: string;
  dateRange: string;
  description: string;
}

export function Card({ title, subTitle, dateRange, description }: Readonly<CardProps>) {
  return (
    <div className="Card">
      <h3 className="Card__title">{title}</h3>
      <div className="Card__wrapper">
        <h5 className="Card__subTitle">{subTitle}</h5>
        <h5 className="Card__subTitle">{dateRange}</h5>
      </div>
      <p className="Card__description">{description}</p>
      <p className="Card__link">
        <a href="#">Visit Site</a>
      </p>
    </div>
  );
}
