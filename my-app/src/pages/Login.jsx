import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", username)
      navigate("/dashboard")
    } else {
      alert("Username หรือ Password ไม่ถูกต้อง")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">

      {/* Card */}
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80">
        
        <h2 className="text-3xl font-extrabold mb-6 text-center text-black">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg 
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg 
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-semibold p-3 rounded-lg 
          hover:opacity-90 transition"
        >
          Login
        </button>

      </div>
    </div>
  )
}

export default Login