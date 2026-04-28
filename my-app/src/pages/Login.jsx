import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [message, setMessage] = useState("")

  // 🔐 Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // LOGIN
    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("account"))

      if (
        savedUser &&
        savedUser.username === username &&
        savedUser.password === password
      ) {
        localStorage.setItem("user", username)
        navigate("/dashboard")
      } else {
        setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านผิด")
      }
    }

    // SIGNUP
    else {
      if (password !== confirm) {
        return setMessage("❌ รหัสผ่านไม่ตรงกัน")
      }

      const newUser = { email, username, password }
      localStorage.setItem("account", JSON.stringify(newUser))

      setMessage("✅ สมัครสำเร็จ! ไป Login ได้เลย")
      setIsLogin(true)
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">

      {/* Card */}
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80">

        {/* Logo */}
        <div className="text-center text-2xl font-bold mb-4">
          🎮 Dev<span className="text-purple-600">Quest</span>
        </div>

        {/* Tabs */}
        <div className="flex mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 p-2 ${
              isLogin
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-600"
            } rounded-l`}
          >
            เข้าสู่ระบบ
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 p-2 ${
              !isLogin
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-600"
            } rounded-r`}
          >
            สร้างบัญชี
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Email (Signup only) */}
          {!isLogin && (
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          )}

          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          {/* Confirm (Signup only) */}
          {!isLogin && (
            <input
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          )}

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded">
            {isLogin ? "ลุยเลย! (Login)" : "สร้างบัญชี"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-3 text-red-500">{message}</p>
        )}

      </div>
    </div>
  )
}

export default Login