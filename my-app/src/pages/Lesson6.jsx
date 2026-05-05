import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Lesson6() {
  const navigate = useNavigate()

  const [code, setCode] = useState("")
  const [result, setResult] = useState("")

  // ✅ ตรวจคำตอบ
  const checkCode = () => {
    const isCorrect =
      code.includes("<nav>") &&
      code.includes("Home") &&
      code.includes("About") &&
      code.includes("Contact")

    if (isCorrect) {
      setResult("✅ ถูกต้อง! ได้รับ 40 EXP")

      const data =
        JSON.parse(localStorage.getItem("gameData")) || {
          completed: [],
          exp: 0
        }

      // ❌ กันกดซ้ำ
      if (!data.completed.includes("lesson6_done")) {
        const newData = {
          completed: [...data.completed, "lesson6_done"],
          exp: data.exp + 40
        }

        localStorage.setItem("gameData", JSON.stringify(newData))
      }

    } else {
      setResult("❌ ยังไม่ถูก ลองใหม่อีกครั้ง")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-2xl mx-auto space-y-4">

        <h1 className="text-2xl font-bold">
          🧭 Lesson: Navbar
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพ</h3>
          <p>
            Navbar = เมนูด้านบนเว็บ เหมือนปุ่มเลือกด่าน 🎮
          </p>

          <div className="bg-gray-900 text-green-400 p-3 mt-2 rounded text-sm">
{`<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`}
          </div>
        </div>

        {/* อธิบายเพิ่ม */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">💡 สำคัญยังไง?</h3>
          <ul className="list-disc ml-5 text-gray-600">
            <li>ช่วยให้ผู้ใช้ไปหน้าอื่น</li>
            <li>ทุกเว็บต้องมี 🔥</li>
          </ul>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
          <p>
            สร้าง <b>{`<nav>`}</b> ที่มีลิงก์  
            <b> Home, About, Contact </b>
          </p>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="ลองพิมพ์โค้ดที่นี่..."
            className="w-full border p-2 mt-2 rounded"
          />

          <button
            onClick={checkCode}
            className="mt-2 bg-purple-500 text-white px-4 py-2 rounded"
          >
            ตรวจคำตอบ
          </button>

          <div className="mt-2 text-sm">{result}</div>
        </div>

        {/* ปุ่มกลับ */}
        <button
          onClick={() => navigate("/quest")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          ⬅ กลับ Quest
        </button>

      </div>
    </div>
  )
}

export default Lesson6