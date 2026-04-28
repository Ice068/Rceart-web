import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Quest from "./pages/Quest"
import SimCode from "./pages/simcode"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Quest" element={<Quest />}></Route>
        <Route path="/simcode" element={<SimCode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App