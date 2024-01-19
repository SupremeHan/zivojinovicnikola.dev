import "./About.scss";

export function About() {
  return (
    <div className="About" id="about">
      <div className="About__container">
        <h2 className="About__title">About.</h2>
        <div className="About__wrapper">
          <p className="About__text">
            Hey there! Let's get straight to it! I'm Casper, a motivated web developer and student
            based in Belgium. I am an 18-year-old developer building cutting-edge web applications
            using the latest technologies such as React.js, Next.js, TypeScript, and much more for
            over 4 years now.
          </p>

          <p className="About__text">
            I started back when I was a 14-year-old kid that had an extreme passion for creating
            stuff, building simple static web pages and expanding my CSS knowledge by recreating
            awesome designs. I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way.
          </p>

          <p className="About__text">
            When I'm not in full-on developer mode, you will find me blasting down a dirt track or
            the streets of my city. There's nothing quite like the rush of adrenaline that comes
            from going ultra-fast, and for me, there's no better way to experience that than on my
            trusty mountain bike. I also have a deep appreciation for music, listening to a wide
            range of genres that I thoroughly enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}
