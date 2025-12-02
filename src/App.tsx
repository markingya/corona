import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Directory from "./Pages/Directory"
import Join from "./Pages/Join"

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/directory" element = {<Directory/>}/>
      <Route path="/join" element = {<Join/>}/>
      <Route path="*" element = {<Navigate to = "/" />} />
    </Routes>
  )
}

export default App
