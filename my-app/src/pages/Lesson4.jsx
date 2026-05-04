import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Lesson4() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

  const checkCode = () => {
    const lower = code.toLowerCase()

    // ✅ เช็คว่ามี sidebar + เมนู 3 อัน
    if (
      lower.includes("sidebar") &&
      lower.includes("หน้าแรก") &&
      lower.includes("ภารกิจ") &&
      lower.includes("ข้อมูล")
    ) {
      setResult("✅ ถูกต้อง! +30 EXP")

      const data = JSON.parse(localStorage.getItem("gameData")) || {
        completed: [],
        exp: 0,
      }

      if (!data.completed.includes("lesson4_done")) {
        data.completed.push("lesson4_done")
        data.exp += 30
      }

      localStorage.setItem("gameData", JSON.stringify(data))

    } else {
      setResult("❌ ยังไม่ครบ ต้องมี Sidebar + 3 เมนู")
    }
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-6">

      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold text-purple-600">
          📚 Lesson: สร้าง Sidebar
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🧠 Sidebar คืออะไร?</h3>
          <p>
            Sidebar คือเมนูด้านข้าง ใช้นำทางไปยังหน้าอื่น
          </p>
        </div>

        {/* ตัวอย่าง */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">💡 ตัวอย่างโค้ด</h3>

          <div className="bg-gray-100 p-3 rounded text-sm">
{`<div class="sidebar">
  <a href="#">หน้าแรก</a>
  <a href="#">ภารกิจ</a>
  <a href="#">ข้อมูล</a>
</div>`}
          </div>
        </div>

        {/* Demo */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">👀 ตัวอย่าง Sidebar</h3>

          <div className="flex">
            <div className="bg-purple-500 text-white p-3 rounded space-y-2">
              <div>🏠 หน้าแรก</div>
              <div>⚔️ ภารกิจ</div>
              <div>📊 ข้อมูล</div>
            </div>
          </div>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>

          <p>
            สร้าง Sidebar ที่มี:
            <br />👉 หน้าแรก
            <br />👉 ภารกิจ
            <br />👉 ข้อมูล
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

        {/* กลับ */}
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

export default Lesson4