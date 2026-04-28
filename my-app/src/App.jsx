import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Quest from "./pages/Quest"
import SimCode from "./pages/SimCode"
import Lesson1 from "./pages/Lesson1"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="Dashboard" element={<Dashboard />} />
         <Route path="Quest" element={<Quest />} />
         <Route path="SimCode" element={<SimCode />} />
         <Route path="Lesson1" element={<Lesson1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App