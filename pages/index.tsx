import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="content-padding flex flex-col">
      <Slide triggerOnce={true} direction="down">
        <Navbar />
        <Hero />
      </Slide>
    </div>
  );
}
