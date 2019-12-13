import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from'./components/layout/Footer';
import Products from './components/Pages/Products';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SignIn from './components/auth/SignIn';
import Chat from './components/chat/App'
import Comment from './components/comment/commentBox'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'component={Products} />
          <Route path='/contactus'component={ContactUs}/>
          <Route path='/aboutus'component={AboutUs}/> 
          <Route path='/signin'component={SignIn}/> 
          <Route path='/chat' component={Chat}/>
          <Route path='/comment' component={Comment}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
