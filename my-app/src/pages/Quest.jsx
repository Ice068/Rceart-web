import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Quest() {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  const [completed, setCompleted] = useState([])
  const [exp, setExp] = useState(0)

  // 🔒 check login
  useEffect(() => {
    if (!user) navigate("/")
  }, [user, navigate])

  // 📥 โหลดข้อมูล (กันพัง)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("gameData")

      const data = raw
        ? JSON.parse(raw)
        : { completed: [], exp: 0 }

      setCompleted(data.completed || [])
      setExp(data.exp || 0)

    } catch (error) {
      console.error("โหลด gameData พัง:", error)

      // fallback กันหน้าโล่ง
      setCompleted([])
      setExp(0)
    }
  }, [])

  // 💾 save data
  const saveData = (newCompleted, newExp) => {
    localStorage.setItem(
      "gameData",
      JSON.stringify({
        completed: newCompleted,
        exp: newExp
      })
    )
  }

  // 📊 Quest list
  const quests = [
    { id: "lesson1_done", title: "🧱 HTML Structure", desc: "สร้างโครงสร้าง HTML", exp: 50, next: null },
    { id: "lesson2_done", title: "🔗 Link", desc: "สร้างลิงก์", exp: 50, next: "lesson1_done" },
    { id: "lesson3_done", title: "🔤 Heading", desc: "H1 - H6", exp: 20, next: "lesson2_done" },
    { id: "lesson4_done", title: "Sidebar", desc: "สร้าง Sidebar", exp: 30, next: "lesson3_done" },
    { id: "lesson5_done", title: "Footer", desc: "สร้าง Footer", exp: 20, next: "lesson4_done" },
    { id: "lesson6_done", title: "Navbar", desc: "สร้าง Navbar", exp: 40, next: "lesson5_done" },
    { id: "lesson7_done", title: "Image", desc: "เพิ่มรูปภาพ", exp: 30, next: "lesson6_done" },
    { id: "lesson8_done", title: "List", desc: "สร้างรายการ", exp: 20, next: "lesson7_done" },
    { id: "lesson9_done", title: "Button", desc: "สร้างปุ่ม", exp: 20, next: "lesson8_done" },
    { id: "lesson10_done", title: "Div / Section", desc: "แบ่งส่วนหน้าเว็บ", exp: 20, next: "lesson9_done" },
    { id: "lesson11_done", title: "Table", desc: "สร้างตาราง", exp: 30, next: "lesson10_done" },
    { id: "lesson12_done", title: "Media", desc: "วิดีโอ/เสียง", exp: 30, next: "lesson11_done" },
    { id: "boss1", title: "🔥 Final Quest 01", desc: "สร้างเว็บครบ", exp: 200, next: "lesson12_done" },
    { id: "boss2", title: "💀 Final Quest 02", desc: "เว็บระดับสูง", exp: 300, next: "lesson12_done" },
  ]

  // 🔓 เช็ค unlock
  const isUnlocked = (quest) => {
    if (!quest.next) return true
    return completed.includes(quest.next)
  }

  // 🎮 รับ EXP (mockup)
  const completeQuest = (quest) => {
    if (!isUnlocked(quest)) return
    if (completed.includes(quest.id)) return

    const newCompleted = [...completed, quest.id]
    const newExp = exp + quest.exp

    setCompleted(newCompleted)
    setExp(newExp)
    saveData(newCompleted, newExp)

    alert(`🎉 ได้รับ ${quest.exp} EXP!`)
  }

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="flex h-screen bg-[#f1f5f9]">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-purple-700 via-pink-600 to-purple-500 text-white p-5 flex flex-col justify-between">
        
        <div>
          <h1 className="text-2xl font-bold mb-6">
            Dev <span className="text-pink-200">Quest</span>
          </h1>

          <div className="space-y-3">
            <div
              onClick={() => navigate("/Dashboard")}
              className="hover:bg-white/20 p-2 rounded cursor-pointer"
            >
              🏠 ฐานบัญชาการ
            </div>

            <div className="bg-white/25 p-2 rounded">
              ⚔️ ภารกิจ
            </div>
            <div 
            onClick={() => navigate("/simcode")}
            className="hover:bg-white/20 p-2 rounded cursor-pointer">💻 จำลองโค้ด</div>
            <div className="hover:bg-white/20 p-2 rounded cursor-pointer">📊 ข้อมูล</div>
          </div>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"
        >
          ออกจากระบบ
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">

        <h1 className="text-2xl font-bold mb-2 text-gray-700">
          ⚔️ ภารกิจของคุณ
        </h1>

        <p className="mb-6 text-purple-600 font-semibold">
          EXP: {exp}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {quests.map((q) => {
            const unlocked = isUnlocked(q)
            const done = completed.includes(q.id)

            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl shadow border ${
                  unlocked ? "bg-white" : "bg-gray-200 opacity-60"
                }`}
              >
                <h3 className="font-bold text-gray-700">{q.title}</h3>
                <p className="text-sm text-gray-400">{q.desc}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-pink-500 text-sm">
                    +{q.exp} EXP
                  </span>

                  <button
                    onClick={() => completeQuest(q)}
                    disabled={!unlocked}
                    className={`px-3 py-1 rounded text-white ${
                      done
                        ? "bg-green-500"
                        : unlocked
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {done ? "✔ สำเร็จ" : unlocked ? "รับ EXP" : "🔒 Locked"}
                  </button>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Quest