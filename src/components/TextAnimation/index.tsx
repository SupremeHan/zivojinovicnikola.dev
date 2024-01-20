import "./TextAnimation.scss";

export function TextAnimation() {
  return (
    <div className="TextAnimation">
      <div className="TextAnimation__top">
        <div className="TextAnimation__wrapper">
          <span className="TextAnimation__title">Nikola Živojinović</span>
          <span className="TextAnimation__title">Fronted Engineer</span>
        </div>
      </div>
      <div className="TextAnimation__bottom">
        <p className="TextAnimation__text">All things web!</p>
      </div>
    </div>
  );
}
