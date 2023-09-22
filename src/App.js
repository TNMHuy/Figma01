
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Store from './pages/Store';
import About from './pages/About';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import NavigationA from './components/navigation/NavigationA';
import Footer from './pages/Footer';
import Test from './pages/Test';
import Podcast from './pages/Podcast';
import { useEffect } from 'react';



function App() {

  useEffect (()=>{
    window.scrollTo({top:0})
  },[window.location.pathname])
  return (
    // <Test/>
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/podcast" element={<Podcast/>}/>
      <Route path="/blog/:slug" element={<Detail/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
