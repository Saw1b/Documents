
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import UseEffect from "./UseEffect"
// import Button from "./Button"
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/useEffect" element={<UseEffect/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
