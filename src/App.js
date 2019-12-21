import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from'./components/layout/Footer';
import Products from './components/Pages/Products';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SellerUpload from './components/Pages/SellerUpload';
import SignIn from './components/auth/SignIn'; 
import Chat from './components/chat/App'
import Location from './components/Pages/Location'
import Comment from './components/comment/commentBox'
import SignUpSeller from './components/auth/SignUpSeller';
import SignUpBuyer from './components/auth/SignUpBuyer';
import Home from './components/Pages/HomePage';
import Nomatch from './Nomatch';
import R from './components/Pages/t';
import Profile from './components/Pages/Profile'
import MapSeller from './components/Pages/MapSeller'
import MapBuyer from './components/Pages/MapBuyerRedirect'

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route exact path='/'component={Home}/>
        <Route path='/products'component={Products} />
        <Route path='/contactus'component={ContactUs}/>
          <Route path='/aboutus'component={AboutUs}/> 
          <Route path='/signin'component={SignIn}/> 
          <Route path='/chat' component={Chat}/>
          <Route path='/comment' component={Comment}/>
          <Route path='/signupBuyer'component={SignUpBuyer}/> 
          <Route path='/signupSeller'component={SignUpSeller}/>
          <Route path='/sellerupload'component={SellerUpload}/>
          <Route path='/r'component={R}/>
          <Route path='/map'component={Map}/>
          <Route exact path='*' component={Nomatch} />
          <Route path='/mapSeller'component={MapSeller}/>
          <Route path='/mapBuyer'component={MapBuyer}/>
          <Route path='/l'component={Location}/>
          <Route path='/profile'component={Profile}/>
          
        </Switch>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
