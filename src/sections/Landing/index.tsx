import { Button } from "../../components/Button";
import { TextAnimation } from "../../components/TextAnimation";
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
            <Button type="filled" withIcon>
              <a href="#about">About Me</a>
            </Button>
            <Button>
              <a href="#projects">Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
