
import './App.css'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500 border-t">
        © {new Date().getFullYear()} Tanjya — Built with React & Tailwind
      </footer>
    </div>
  );
}
