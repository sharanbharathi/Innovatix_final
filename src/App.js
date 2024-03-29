//import logo from './logo.svg';
//import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        {' '}
      </ThemeProvider>
      ;
    </Router>
  );
}

export default App;
