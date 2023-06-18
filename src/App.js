import Header from './components/Header';
import Home from './components/Home'
import './App.css'
import Useeffectuse from './components/Useeffectuse';
import Contact from './components/contact';
import About from './components/About';
import Twitter from './components/Twitter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error';
import Insta from './components/Insta';
import Userd from './components/Userd';
const App = () => {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/'>
        <Route index element={<Useeffectuse />} />
      <Route path='/app' element={<Useeffectuse/>} />
      </Route>
      <Route path='/app/:userId' element={<Userd/>}></Route>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} >
      <Route index element={<Insta/>} />
        <Route path='insta' element={<Insta/>} />
        <Route path='twitter' element={<Twitter/>} />
        </Route>
      <Route path='*' element={<Error />} />

      </Routes>
      
    </div>
    </Router>
  )
}

export default App