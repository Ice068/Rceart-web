import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Boss1() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

  const checkCode = () => {
    const hasH1 = code.includes("<h1")
    const hasImg = code.includes("<img")
    const hasList = code.includes("<ul") && code.includes("<li")
    const hasLink = code.includes("<a")
    const hasButton = code.includes("<button")
    const hasLayout = code.includes("<div") || code.includes("<section")

    if (hasH1 && hasImg && hasList && hasLink && hasButton && hasLayout) {
      setResult("🎉 ผ่าน Boss แล้ว! โคตรเก่ง 🔥")

      // 👉 update progress
      const raw = localStorage.getItem("gameData")
      const data = raw ? JSON.parse(raw) : { completed: [], exp: 0 }

      if (!data.completed.includes("boss1")) {
        data.completed.push("boss1")
        data.exp += 200
        localStorage.setItem("gameData", JSON.stringify(data))
      }

    } else {
      setResult("❌ ยังไม่ครบ ลองเช็ค element ให้ครบทุกอย่าง")
    }
  }

  const goBack = () => {
    navigate("/quest")
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        👑 BOSS: สร้างเว็บของคุณเอง
      </h1>

      {/* ภารกิจ */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">🔥 ภารกิจใหญ่</h3>
        <p>สร้างเว็บแนะนำตัวเอง ที่มี:</p>

        <ul className="list-disc ml-5 mt-2">
          <li>หัวข้อ (h1)</li>
          <li>รูปภาพ (img)</li>
          <li>รายการ (ul / li)</li>
          <li>ลิงก์ (a)</li>
          <li>ปุ่ม (button)</li>
          <li>div หรือ section</li>
        </ul>
      </div>

      {/* ตัวอย่าง */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">💡 ตัวอย่าง</h3>

        <div className="bg-gray-100 p-3 rounded text-sm">
{`<h1>My Website</h1>
<img src="cat.jpg" alt="แมว">
<ul>
  <li>HTML</li>
</ul>
<a href="/dashboard">กลับหน้าแรก</a>
<button>กดฉัน</button>`}
        </div>
      </div>

      {/* Editor */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">✍️ เขียนโค้ด</h3>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="สร้างเว็บของคุณที่นี่..."
          className="w-full h-60 p-3 border rounded"
        />

        <button
          onClick={checkCode}
          className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
        >
          ตรวจคำตอบ
        </button>

        <div className="mt-3 font-semibold text-lg">
          {result}
        </div>
      </div>

      <button
        onClick={goBack}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        ⬅ กลับ Quest
      </button>

    </div>
  )
}

export default Boss1