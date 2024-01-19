import { About } from "../../sections/About";
import { Landing } from "../../sections/Landing";
import { Experience } from "../../sections/Experience";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Projects } from "../../sections/Projects";
import { Contact } from "../../sections/Contact";

export function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
