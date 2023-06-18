import Header from './components/Header';
import Home from './components/Home'
import './App.css'
import Useeffectuse from './components/Useeffectuse';
import Contact from './components/contact';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error';

const App = () => {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />

      </Routes>
      
    </div>
    </Router>
  )
}

export default App