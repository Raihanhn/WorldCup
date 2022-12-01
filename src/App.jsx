import React from "react"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Blogs from "./components/Blogs/Blogs"
import Categories from "./components/Categories/Categories"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Review from "./components/Review/Review"



function App() {

  return (
    <Router>
      <Header/>
     <Routes>
     <Route exact path="/" element={<Home />}/>
      <Route  path="/features" element={<Features/>} />
      <Route  path="/products" element={<Products/>} />
      <Route  path="/categories" element={<Categories/>} />
      <Route  path="/review" element={<Review/>} />
      <Route  path="/blogs" element={<Blogs/>} />
     </Routes>
     <Footer/>
    </Router> 
    
  )
}

export default App
