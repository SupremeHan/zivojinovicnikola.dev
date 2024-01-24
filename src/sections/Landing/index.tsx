import { TextAnimation } from "../../components/TextAnimation";
import { motion } from "framer-motion";
import "./Landing.scss";
import classNames from "classnames";
import RightArrow from "../../assets/icons/RightArrow";

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
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className={classNames("Landing__button", "Landing__button--filled")}
            >
              <a href="#about">
                <span>About Me</span>
                <span>
                  <RightArrow />
                </span>
              </a>
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className={classNames("Landing__button", "Landing__button--outlined")}
            >
              <a href="#projects">Projects</a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
