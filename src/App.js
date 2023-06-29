import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components1/navbar/Navbar';
import Footer from './components1/footer/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components1/main/Main';
import About from './components1/components2/About';
import Contactus from './components1/components2/Contactus';
import Skills from './components1/components2/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              
              <Login />
        
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route
          path="/skill"
          element={
            <>
              <Navbar />
              <Skills />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
