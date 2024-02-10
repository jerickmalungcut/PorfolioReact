import Hero from "./components/hero/Hero";
import Parallax1 from "./components/parallaxCustom/Parallax1";
import Parallax2 from "./components/parallaxCustom/Parallax2";
import Services from "./components/ourService/Services";
import Portfolio1 from "./components/portfolio/Portfolio1";
import Portfolio2 from "./components/portfolio/Portfolio2";
import Portfolio3 from "./components/portfolio/Portfolio3";
import Contact from "./components/contact/Contact";
import Test from "./components/Test";

const App = () => {
  return (
    <div>
      <Hero />
      <Parallax1 />
      <Services />
      <Parallax2 />
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
      <Contact />
    </div>
  );
};

export default App;
