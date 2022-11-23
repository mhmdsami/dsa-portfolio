import { Navbar, Hero, Crossword, Certificate, Footer } from "@components";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="content-padding flex flex-col">
      <Slide triggerOnce={true} direction="down">
        <Navbar />
        <Hero />
      </Slide>
      <Crossword />
      <Certificate />
      <Footer />
    </div>
  );
}
