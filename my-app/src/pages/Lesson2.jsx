import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Lesson2() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

  const checkCode = () => {
    const lower = code.toLowerCase()

    // ✅ เช็คว่ามี <a> + href + dashboard + ข้อความ
    if (
      lower.includes("<a") &&
      lower.includes("href") &&
      lower.includes("dashboard") &&
      lower.includes("ไป dashboard")
    ) {
      setResult("✅ ถูกต้อง! +50 EXP")

      // 🎮 อัปเดตเกม
      const data = JSON.parse(localStorage.getItem("gameData")) || {
        completed: [],
        exp: 0,
      }

      if (!data.completed.includes("lesson2_done")) {
        data.completed.push("lesson2_done")
        data.exp += 50
      }

      localStorage.setItem("gameData", JSON.stringify(data))
    } else {
      setResult("❌ ยังไม่ถูก ลองใหม่อีกครั้ง")
    }
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-6">

      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold text-purple-600">
          🔗 Lesson 2: การสร้างลิงก์
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพแบบนี้</h3>
          <p>ลิงก์ = “ประตูวาร์ป” 🌀 ไปหน้าอื่น</p>

          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li><b>&lt;a&gt;</b> = ปุ่ม/ข้อความ</li>
            <li><b>href</b> = ปลายทาง</li>
          </ul>

          <div className="bg-gray-100 p-3 rounded mt-3 text-sm">
            {`<a href="dashboard.html">ไปหน้า 2</a>`}
          </div>
        </div>

        {/* ตัวอย่าง */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">💡 ตัวอย่าง</h3>
          <p>กดลิงก์ → ไปอีกหน้า</p>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
          <p>
            สร้างลิงก์ไป <b>dashboard</b> และมีข้อความ <b>ไป Dashboard</b>
          </p>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-3 rounded mt-3 h-32"
            placeholder="ลองพิมพ์โค้ดที่นี่..."
          />

          <button
            onClick={checkCode}
            className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
          >
            ตรวจคำตอบ
          </button>

          <div className="mt-3 text-sm font-semibold text-purple-600">
            {result}
          </div>
        </div>

        {/* ปุ่มกลับ */}
        <button
          onClick={() => navigate("/quest")}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          ⬅ กลับภารกิจ
        </button>

      </div>
    </div>
  )
}

export default Lesson2