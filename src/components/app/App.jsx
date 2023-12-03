import './App.css'
import Header from './../header/header';
import { Routes, Route } from 'react-router-dom';
import Home from './../../pages/home/home';
import About from './../../pages/about/about';
import News from './../../pages/news/news';
import Score from './../../pages/score/score';
import Contact from './../../pages/contact/contact';
import Filial from './../../pages/filial/filial';


function App() {
  return (
    <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/score' element={<Score/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/filial' element={<Filial/>}></Route>
        </Routes>
    </div>
  );
}
export default App