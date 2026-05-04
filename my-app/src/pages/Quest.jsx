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

  // 📥 โหลดข้อมูล (แก้แล้ว)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("gameData")

      if (!raw) {
        setCompleted([])
        setExp(0)
        return
      }

      const parsed = JSON.parse(raw)

      // ✅ กัน error ตรงนี้
      const safeCompleted = Array.isArray(parsed.completed)
        ? parsed.completed
        : []

      const safeExp =
        typeof parsed.exp === "number"
          ? parsed.exp
          : 0

      setCompleted(safeCompleted)
      setExp(safeExp)

    } catch (error) {
      console.error("โหลด gameData พัง:", error)
      setCompleted([])
      setExp(0)
    }
  }, [])

  // 📊 Quest list
  const quests = [
    { id: "Lesson1_done", title: "🧱 HTML Structure", desc: "สร้างโครงสร้าง HTML", exp: 50, next: null, path: "/Lesson1" },
    { id: "Lesson2_done", title: "🔗 Link", desc: "สร้างลิงก์", exp: 50, next: "Lesson1_done", path: "/Lesson2" },
    { id: "Lesson3_done", title: "🔤 Heading", desc: "H1 - H6", exp: 20, next: "Lesson2_done", path: "/Lesson3" },
    { id: "Lesson4_done", title: "Sidebar", desc: "สร้าง Sidebar", exp: 30, next: "Lesson3_done", path: "/Lesson4" },
    { id: "Lesson5_done", title: "Footer", desc: "สร้าง Footer", exp: 20, next: "Lesson4_done", path: "/Lesson5" },
    { id: "Lesson6_done", title: "Navbar", desc: "สร้าง Navbar", exp: 40, next: "Lesson5_done", path: "/Lesson6" },
    { id: "Lesson7_done", title: "Image", desc: "เพิ่มรูปภาพ", exp: 30, next: "Lesson6_done", path: "/Lesson7" },
    { id: "Lesson8_done", title: "List", desc: "สร้างรายการ", exp: 20, next: "Lesson7_done", path: "/Lesson8" },
    { id: "Lesson9_done", title: "Button", desc: "สร้างปุ่ม", exp: 20, next: "Lesson8_done", path: "/Lesson9" },
    { id: "Lesson10_done", title: "Div / Section", desc: "แบ่งส่วนหน้าเว็บ", exp: 20, next: "Lesson9_done", path: "/Lesson10" },
    { id: "Lesson11_done", title: "Table", desc: "สร้างตาราง", exp: 30, next: "Lesson10_done", path: "/Lesson11" },
    { id: "Lesson12_done", title: "Media", desc: "วิดีโอ/เสียง", exp: 30, next: "Lesson11_done", path: "/Lesson12" },
    { id: "boss1", title: "🔥 Final Quest 01", desc: "สร้างเว็บครบ", exp: 200, next: "Lesson12_done", path: "/boss1" },
    { id: "boss2", title: "💀 Final Quest 02", desc: "เว็บระดับสูง", exp: 300, next: "Lesson12_done", path: "/boss2" },
  ]

  // 🔓 เช็ค unlock
  const isUnlocked = (quest) => {
    if (!quest.next) return true
    return completed.includes(quest.next)
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
              onClick={() => navigate("/dashboard")}
              className="hover:bg-white/20 p-2 rounded cursor-pointer"
            >
              🏠 ฐานบัญชาการ
            </div>

            <div className="bg-white/25 p-2 rounded">
              ⚔️ ภารกิจ
            </div>

            <div 
              onClick={() => navigate("/simcode")}
              className="hover:bg-white/20 p-2 rounded cursor-pointer"
            >
              💻 จำลองโค้ด
            </div>

            <div className="hover:bg-white/20 p-2 rounded cursor-pointer">
              📊 ข้อมูล
            </div>
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
                    onClick={() => navigate(q.path)}
                    disabled={!unlocked}
                    className={`px-3 py-1 rounded text-white ${
                      done
                        ? "bg-green-500"
                        : unlocked
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {done ? "✔ สำเร็จ" : unlocked ? "ลุยเลย 🚀" : "🔒 Locked"}
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