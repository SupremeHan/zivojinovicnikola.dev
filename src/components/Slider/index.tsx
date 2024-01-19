import { useState } from "react";
import "./Slider.scss";
import { ProjectCard, ProjectCardProps } from "../ProjectCard";

interface SliderProps {
  cards: ProjectCardProps[];
}

export function Slider({ cards }: Readonly<SliderProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className="Slider">
      <div className="Slider__container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="Slider__wrapper"
            style={{ translate: `${-100 * currentIndex}%` }}
          >
            {/* <ProjectCard {...card} next={goToNext} previous={goToPrevious} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
