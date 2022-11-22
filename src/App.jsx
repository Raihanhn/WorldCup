import React from "react"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Features from "./components/Features/Features"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"



function App() {

  return (
    <Router>

      <Header/>

     <Routes>
     <Route exact path="/" element={<Home />}/>
      <Route  path="/features" element={<Features/>} />
     </Routes>



    </Router> 
    
  )
}

export default App
