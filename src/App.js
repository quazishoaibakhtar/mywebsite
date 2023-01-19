
import {Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Contact from './component/Contact'
import "./styles/App.scss"
import "./styles/mediaQueries.scss"
import Footer from './component/Footer';
import Service from './component/Service';
import Linking from './component/Linking';



function App() {
  return (
    <div>

      <Header/>
      
      <Routes>

        
        <Route path='/' element={<Home/>}/>
        <Route path='/link' element={<Linking/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
       
      </Routes>
      <Home/>
      <Footer/>
        

        
    </div>
  );
}

export default App;
