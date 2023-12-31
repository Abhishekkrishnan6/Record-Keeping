import Header from './components/Header';
import './App.css'
import Useeffectuse from './components/Useeffectuse';
import Contact from './components/contact';
import About from './components/About';
import Twitter from './components/Twitter';
import { useState, createContext } from 'react';
import LoaderAndToaster from './components/LoaderAndToaster';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error';
import Insta from './components/Insta';
import Userd from './components/Userd';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import Customhook from './components/Customhook';
import UseMomo from './components/UseMomo';
import UseCallback from './components/UseCallback';
const Data = createContext();
const App1 = () => {
  const[data,setdat] = useState("reactstudy")
  const[name,setname] = useState({name: 'avhii',age:20})
  return (
    <Data.Provider value={{data,name}}>
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/'>
        <Route index element={<Useeffectuse />} />
      <Route path='/app' element={<Useeffectuse/>} />
      </Route>
      <Route path='/app/:userId' element={<Userd/>}></Route>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} >
      <Route index element={<Insta/>} />
        <Route path='insta' element={<Insta/>} />
        <Route path='twitter' element={<Twitter/>} />
        </Route>
      <Route path='*' element={<Error />} />
      <Route path='/useref' element={<UseRef />} />
      <Route path='/usereducer' element={<UseReducer />} />
      
      <Route path='/customhook' element={<Customhook />} />
      <Route path='/usemomo' element={<UseMomo/>} />
      
      
      
      <Route path='/usecallback' element={<UseCallback />}/>
      <Route path='/loadertoaster' element={<LoaderAndToaster/>} />

      </Routes>
      
    </div>
    </Router>
    </Data.Provider>
  )
}

export default App1;
export {Data}