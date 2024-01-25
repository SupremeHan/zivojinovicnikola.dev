import "./About.scss";

export function About() {
  return (
    <div className="About" id="about">
      <div className="About__container">
        <h2 className="About__title">
          About<strong>.</strong>
        </h2>
        <div className="About__wrapper">
          <p className="About__text">
            Hey there! Let's get straight to it! I'm Nikola, a motivated web developer currently
            based in Serbia. I am 26 years old and have been passionately building cutting-edge web
            applications using the latest technologies, including React.js, Next.js, TypeScript, and
            more, for over 3 years now.
          </p>

          <p className="About__text">
            I became interested in web programming during college. At first, I started building
            simple static web pages and expanding my CSS knowledge by recreating awesome designs.
            Later, I discovered a framework called Angular, which piqued my interest even more in
            the world of web applications. I've continued to grow and evolve as a developer, taking
            on new challenges and learning the latest technologies along the way.
          </p>

          <p className="About__text">
            When I'm not in full-on developer mode, you will find me lifting weights at my local
            CrossFit box or hiking in the forests of Serbia. If you were to ask me to choose between
            going through an intense training session or walking in the calm, rainy forest, I would
            have to give it a lot of thought because both activities bring me joy in their own way.
            I also have a deep appreciation for music, listening to a wide range of genres that I
            thoroughly enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}
