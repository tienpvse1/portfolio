import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";

function App() {

  const sr = ScrollReveal({
    origin: "top",
    distance: "80px", 
    duration: 2000,
    reset: false,
  }); 
  return (
    <div className="App">
      <main className="l-main">
        <Header />
        <Main revealer={sr} />
        <About revealer={sr} />
        <Skill revealer={sr} />
        <Work revealer={sr} />
        <Contact revealer={sr} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
