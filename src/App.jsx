import { useState } from "react";
import { Route,Routes } from "react-router";
import './App.css' ;
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/aboutUs";
import Product from "./pages/product";
import Products from "./pages/products";
import Error from "./component/error";

function App (){

  return(
<>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>

      <Route path='/Error'/>
      <Route path="/landingPage" element={<LandingPage/>}>
      </Route>

     <Route path='/products' >
        <Route index element={<Products/>}/>
        <Route path=':id' element={<Product/>}/>
      </Route>

      <Route
  path="*"
  element={<Error/>}  
/>
    </Routes>

  
  
    </>
  )
}

export default App;