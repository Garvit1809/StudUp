import './App.css';
import GlobalStyles from './Themes/GlobalStyles';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Courses from './components/Courses';
import About from './components/About'
import Home from './components/Home';
import Schedule from './SubComponents/Schedule';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <Home />
    <About />
    <Schedule />
    <Courses/>
    <Notes/>
    </>
  );
}

export default App;
