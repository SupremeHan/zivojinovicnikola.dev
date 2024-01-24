import { TextAnimation } from "../../components/TextAnimation";
import RightArrow from "../../assets/icons/RightArrow";
import { Button } from "../../components/Button";
import "./Landing.scss";

export function Landing() {
  return (
    <section className="Landing">
      <div className="Landing__container">
        <TextAnimation />
        <div className="Landing__wrapper">
          <div className="Landing__animate">
            <p className="Landing__text">
              I'm a highly motivated developer from Serbia. I adore building accessible, responsive
              and performant code. Furthermore, I'm also a huge fan of open-source.
            </p>
            <p className="Landing__text">
              I have been building web apps for over 3 years and still love it. Learning something
              new every week. Currently focused on Frontend Web Development and a bit of Web Design.
            </p>
          </div>
          <div className="Landing__actions">
            <Button size="medium" type="filled">
              <a
                href="#about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span>About Me</span>
                <span>
                  <RightArrow />
                </span>
              </a>
            </Button>
            <Button size="medium" type="outlined">
              <a href="#projects">Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
