// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Project from './components/Project/project';

function App() {
  return (
    <div className="App">
<Navbar/>
<Intro/>
<Skills/>
<Project/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
