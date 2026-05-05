import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Quest from "./pages/Quest"
import SimCode from "./pages/SimCode"
import Lesson1 from "./pages/Lesson1"
import Lesson2 from "./pages/Lesson2"
import Lesson3 from "./pages/Lesson3"
import Lesson4 from "./pages/Lesson4"
import Lesson5 from "./pages/Lesson5"
import Lesson6 from "./pages/Lesson6"
import Lesson7 from "./pages/Lesson7"
import Lesson8 from "./pages/Lesson8"
import Lesson9 from "./pages/Lesson9"
import Lesson10 from "./pages/Lesson10"
import Lesson11 from "./pages/Lesson11"

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
         <Route path="Lesson3" element={<Lesson3 />} />
         <Route path="Lesson4" element={<Lesson4 />} />
         <Route path="Lesson5" element={<Lesson5 />} />
         <Route path="Lesson6" element={<Lesson6 />} />
         <Route path="Lesson7" element={<Lesson7 />} />
         <Route path="Lesson8" element={<Lesson8 />} />
         <Route path="Lesson9" element={<Lesson9 />} />
         <Route path="Lesson10" element={<Lesson10 />} />
         <Route path="Lesson11" element={<Lesson11 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App