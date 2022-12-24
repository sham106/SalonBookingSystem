import './css/App.css';
import './css/register.css';
import './css/login.css';
import './css/book.css';
import './css/admin.css'
import './css/profile.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import OurServices from './Pages/OurServices.js';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Book from './Pages/Book';
import Admin from './Pages/Admin';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Navbar2/>
    
    <Routes>
    <Route path="/" element={ <Home/>} exact/>
    <Route path="/services" element={<OurServices/> }/>
    <Route path="/profile" element={<Profile/> }/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/book' element= {<Book/>}></Route>
    <Route path='/admin' element={<Admin/>} ></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
          
  );
}

export default App;
