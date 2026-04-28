import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Dashboard() {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  const [exp, setExp] = useState(0)
  const [completed, setCompleted] = useState([])

  // 🔒 check login
  useEffect(() => {
    if (!user) navigate("/")
  }, [user, navigate])

  // 📥 load data (เหมือน fetch จาก backend)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("gameData")) || {
      exp: 0,
      completed: []
    }
    setExp(data.exp)
    setCompleted(data.completed)
  }, [])

  // 💾 save data
  const saveData = (newExp, newCompleted) => {
    localStorage.setItem(
      "gameData",
      JSON.stringify({
        exp: newExp,
        completed: newCompleted
      })
    )
  }

  // 🎮 ทำเควส (กันกดซ้ำ)
  const completeQuest = (id, reward) => {
    if (completed.includes(id)) return

    const newExp = exp + reward
    const newCompleted = [...completed, id]

    setExp(newExp)
    setCompleted(newCompleted)
    saveData(newExp, newCompleted)
  }

  // 🎯 Level + Rank
  const level = Math.floor(exp / 100)

  const getRank = () => {
    if (level >= 10) return "💎 Diamond"
    if (level >= 6) return "🥇 Gold"
    if (level >= 3) return "🥈 Silver"
    return "🥉 Bronze"
  }

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-indigo-800 to-purple-900 p-6 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-pink-400">🎮 DevQuest</h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 p-2 rounded"
        >
          ออกจากระบบ
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Header */}
        <h2 className="mb-6">
          👋 {user} | Lv.{level} | {getRank()}
        </h2>

        {/* EXP Bar */}
        <div className="bg-gray-700 rounded-full h-4 mb-6">
          <div
            className="bg-purple-500 h-4 rounded-full"
            style={{ width: `${exp % 100}%` }}
          ></div>
        </div>

        {/* Quest */}
        <div className="space-y-4">

          <div className="bg-[#1e293b] p-4 rounded">
            <h3>HTML</h3>
            <button
              disabled={completed.includes("html")}
              onClick={() => completeQuest("html", 50)}
              className={`mt-2 px-3 py-1 rounded ${
                completed.includes("html")
                  ? "bg-gray-500"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {completed.includes("html") ? "✔ สำเร็จแล้ว" : "+50 EXP"}
            </button>
          </div>

          <div className="bg-[#1e293b] p-4 rounded">
            <h3>CSS</h3>
            <button
              disabled={completed.includes("css")}
              onClick={() => completeQuest("css", 30)}
              className={`mt-2 px-3 py-1 rounded ${
                completed.includes("css")
                  ? "bg-gray-500"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {completed.includes("css") ? "✔ สำเร็จแล้ว" : "+30 EXP"}
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard