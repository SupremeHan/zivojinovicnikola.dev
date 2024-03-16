import RightArrow from "../../assets/icons/RightArrow";
import "./Contact.scss";

export function Contact() {
  return (
    <section id="contact" className="Contact">
      <div className="Contact__container">
        <h2 className="Contact__title">
          Want to ask me sum? <br />
          Go for it!
        </h2>
        <div className="Contact__content">
          <p className="Contact__text">
            I'm like a friendly neighborhood spider, always looking for new connections. Except I
            don't have eight legs, and I promise not to scare you.
          </p>
          <div className="Contact__links">
            <a className="Contact__link" target="_blank" href="https://github.com/SupremeHan">
              Github
              <span>
                <RightArrow />
              </span>
            </a>
            <a
              className="Contact__link"
              target="_blank"
              href="https://www.linkedin.com/in/zivojinovicn/"
            >
              LinkedIn
              <span>
                <RightArrow />
              </span>
            </a>
            <a className="Contact__link" href="mailto:zivojinovic.z.nikola@gmail.com">
              Mail
              <span>
                <RightArrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
