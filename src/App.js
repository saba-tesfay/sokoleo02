import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from'./components/layout/Footer';
import Products from './components/Pages/Products';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';

import SellerUpload from './components/Pages/SellerUpload';
import Map from './components/Pages/Map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'component={Products} />
          {/* <Route path='/products'component={Home}/>
          <Route path='/products'component={MyChat}/>
  <Route path='/'component={Profile}/>*/}
          <Route path='/contactus'component={ContactUs}/>
          <Route path='/aboutus'component={AboutUs}/> 
          
          <Route path='/sellerupload'component={SellerUpload}/>
          <Route path='/map'component={Map}/>
     
        </Switch>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
