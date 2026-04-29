import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Quest from "./pages/Quest"
import SimCode from "./pages/SimCode"
import Lesson1 from "./pages/Lesson1"
import Lesson2 from "./pages/Lesson2"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="Dashboard" element={<Dashboard />} />
         <Route path="Quest" element={<Quest />} />
         <Route path="SimCode" element={<SimCode />} />
         <Route path="Lesson1" element={<Lesson1 />} />
         <Route path="Lesson2" element={<Lesson2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App