import Header from "./components/Header";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Programs from "./components/Programs";
import Why from "./components/Why";
import Results from "./components/Results";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks";

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Subjects />
        <Programs />
        <Why />
        <Results />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
