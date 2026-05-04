import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Lesson5() {
  const navigate = useNavigate()

  const [code, setCode] = useState("")
  const [result, setResult] = useState("")

  // ✅ ตรวจคำตอบ
  const checkCode = () => {
    const isCorrect =
      code.includes("<footer>") &&
      code.includes("© 2026 My Website")

    if (isCorrect) {
      setResult("✅ ถูกต้อง! ได้รับ 20 EXP")

      // 🎮 โหลดข้อมูลเดิม
      const data =
        JSON.parse(localStorage.getItem("gameData")) || {
          completed: [],
          exp: 0
        }

      // ❌ กันกดซ้ำ
      if (!data.completed.includes("lesson5_done")) {
        const newData = {
          completed: [...data.completed, "lesson5_done"],
          exp: data.exp + 20
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
          📦 Lesson: Footer
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพแบบนี้</h3>
          <p>
            Footer = ส่วนท้ายของเว็บ เหมือนเครดิตท้ายคลิป 🎬
          </p>

          <div className="bg-gray-900 text-green-400 p-3 mt-2 rounded text-sm">
            {`<footer>
  © 2026 My Website
</footer>`}
          </div>
        </div>

        {/* ใช้ทำอะไร */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">💡 ใช้ทำอะไร?</h3>
          <ul className="list-disc ml-5 text-gray-600">
            <li>📞 ติดต่อ</li>
            <li>📧 Email</li>
            <li>© ลิขสิทธิ์</li>
          </ul>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
          <p>
            สร้าง <b>{`<footer>`}</b> ที่มีข้อความ  
            <b> © 2026 My Website </b>
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
            ตรวจสอบ
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

export default Lesson5