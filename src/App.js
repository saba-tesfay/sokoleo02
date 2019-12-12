import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from'./components/layout/Footer';
import Products from './components/Pages/Products';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SignIn from './components/auth/SignIn';
import SignUpSeller from './components/auth/SignUpSeller';
import SignUpBuyer from './components/auth/SignUpBuyer';
import Home from './components/Pages/HomePage'
import Sample from './components/Pages/Sample'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path='/products'component={Products} />
          <Route exact path='/'component={Home}/>
          {/* <Route path='/products'component={MyChat}/>
  <Route path='/'component={Profile}/> */}
          <Route path='/contactus'component={ContactUs}/>
          <Route path='/sample'component={Sample}/>
          <Route path='/aboutus'component={AboutUs}/> 
          <Route path='/signin'component={SignIn}/> 
          <Route path='/signupBuyer'component={SignUpBuyer}/> 
          <Route path='/signupSeller'component={SignUpSeller}/>  
        </Switch>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
