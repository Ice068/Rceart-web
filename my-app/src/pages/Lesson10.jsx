import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Lesson10() {
  const navigate = useNavigate()

  const [code, setCode] = useState("")
  const [result, setResult] = useState("")

  // ✅ ตรวจคำตอบ
  const checkCode = () => {
    const isCorrect =
      code.includes("<div>กล่อง</div>") &&
      code.includes("<section>เนื้อหา</section>")

    if (isCorrect) {
      setResult("✅ ถูกต้อง! ได้รับ 20 EXP")

      const data =
        JSON.parse(localStorage.getItem("gameData")) || {
          completed: [],
          exp: 0
        }

      // ❌ กันกดซ้ำ
      if (!data.completed.includes("lesson10_done")) {
        const newData = {
          completed: [...data.completed, "lesson10_done"],
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
          📦 Lesson: Div / Section
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพ</h3>
          <p>
            div = กล่อง 📦 / section = ส่วนเนื้อหา 📄
          </p>

          <div className="bg-gray-900 text-green-400 p-3 mt-2 rounded text-sm">
{`<div>กล่อง</div>
<section>เนื้อหา</section>`}
          </div>
        </div>

        {/* ใช้ทำอะไร */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">💡 ใช้ทำอะไร?</h3>
          <ul className="list-disc ml-5 text-gray-600">
            <li>จัด layout หน้าเว็บ</li>
            <li>แบ่งเนื้อหา</li>
            <li>ใช้คู่ CSS</li>
          </ul>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
          <p>
            สร้าง <b>{`<div>`}</b> = กล่อง และ <b>{`<section>`}</b> = เนื้อหา
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

        {/* กลับ */}
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

export default Lesson10