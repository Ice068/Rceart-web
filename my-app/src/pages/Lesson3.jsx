import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Lesson3() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

  const checkCode = () => {
    const lower = code.toLowerCase().replace(/\s/g, "")

    // ✅ เช็ค <h1>my website</h1>
    if (lower.includes("<h1>mywebsite</h1>")) {
      setResult("✅ ถูกต้อง! +20 EXP")

      const data = JSON.parse(localStorage.getItem("gameData")) || {
        completed: [],
        exp: 0,
      }

      if (!data.completed.includes("lesson3_done")) {
        data.completed.push("lesson3_done")
        data.exp += 20
      }

      localStorage.setItem("gameData", JSON.stringify(data))

    } else {
      setResult("❌ ยังไม่ถูก ต้องใช้ <h1>My Website</h1>")
    }
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-6">

      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold text-purple-600">
          🔤 Lesson 3: Heading (H1 - H6)
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพแบบนี้</h3>
          <p>Heading = หัวข้อของบทความ 📚</p>

          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>&lt;h1&gt; = ใหญ่สุด</li>
            <li>&lt;h2&gt; = รองลงมา</li>
            <li>...</li>
            <li>&lt;h6&gt; = เล็กสุด</li>
          </ul>

          <div className="bg-gray-100 p-3 rounded mt-3 text-sm">
{`<h1>หัวข้อใหญ่</h1>
<h2>หัวข้อรอง</h2>
<h3>หัวข้อย่อย</h3>`}
          </div>
        </div>

        {/* อธิบายเพิ่ม */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">💡 เข้าใจง่าย ๆ</h3>
          <p>
            เหมือน “หัวข้อหนังสือ” 📖 ยิ่งสำคัญ → ใช้ h1
          </p>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
          <p>
            สร้าง <b>h1</b> ที่มีข้อความว่า <b>My Website</b>
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

export default Lesson3