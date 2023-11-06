
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
import Login from './pages/Login';
import Protected from './components/Protected';
import LoginProvider from './utills/loginContext';
import Admin from './pages/Admin';
import Edit from './pages/Edit';
import AddPost from './pages/AddPost';
import Blog2 from './pages/2nd/Blog2';
import Register from './pages/2nd/Register';
import Detail2 from './pages/2nd/Detail2';
import Editor from './pages/2nd/Editor';
import Edit2 from './pages/2nd/Edit2';
import Editor2 from './pages/2nd/Editor2';



function App() {

  useEffect (()=>{
    window.scrollTo({top:0})
  },[window.location.pathname])
  return (
    // <Test/>
    <BrowserRouter >
      <LoginProvider>
            <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog2" element={<Blog2/>}/>
            <Route path="/blog2/:id" element={<Detail2/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/> }/>
            <Route path="/podcast" element={<Podcast/>}/>
            <Route path="/blog/:slug" element={<Detail/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/edit2/:id" element={<Edit2/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/editor2/:id" element={<Editor2/>}/>
            <Route  element={<Protected />}>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/addpost" element={<AddPost/>}/>
            </Route>
          </Routes>
          <Footer/>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
