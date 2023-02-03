import Footer from "./components/footer/Footer"
import NavBar from "./components/navbar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Contacto from './pages/contacto/Contacto';
import Servicios from './pages/servicios/Servicios';
import Productos from './pages/productos/Productos';
import Faqs from './pages//faqs/Faqs';
import "./App.sass"


function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/blooma' element={ <Home/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/productos' element={ <Productos/> }/>
          <Route path='/servicios' element={ <Servicios/> }/>
          <Route path='/faqs' element={ <Faqs/> }/>
          <Route path='/contacto' element={ <Contacto/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </>
  );
}

export default App;
