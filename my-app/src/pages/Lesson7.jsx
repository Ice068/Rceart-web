import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Lesson7() {
  const navigate = useNavigate()

  const [code, setCode] = useState("")
  const [result, setResult] = useState("")

  // ✅ ตรวจคำตอบ
  const checkCode = () => {
    const isCorrect =
      code.includes("<img") &&
      code.includes("src") &&
      code.includes("cat") &&
      code.includes('alt="แมว"')

    if (isCorrect) {
      setResult("✅ ถูกต้อง! ได้รับ 30 EXP")

      const data =
        JSON.parse(localStorage.getItem("gameData")) || {
          completed: [],
          exp: 0
        }

      // ❌ กันกดซ้ำ
      if (!data.completed.includes("lesson7_done")) {
        const newData = {
          completed: [...data.completed, "lesson7_done"],
          exp: data.exp + 30
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
          🖼️ Lesson 7: Image
        </h1>

        {/* อธิบาย */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพ</h3>
          <p>
            {"<img>"} = ใช้แสดงรูปภาพบนเว็บ เหมือนใส่รูปโปรไฟล์ 📸
          </p>
        </div>

        {/* ส่วนประกอบ */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">💡 ส่วนประกอบสำคัญ</h3>
          <ul className="list-disc ml-5 text-gray-600">
            <li><b>src</b> = ที่อยู่รูป</li>
            <li><b>alt</b> = ข้อความแทนรูป</li>
          </ul>

          <div className="bg-gray-900 text-green-400 p-3 mt-2 rounded text-sm">
{`<img src="cat.jpg" alt="แมว" />`}
          </div>
        </div>

        {/* ภารกิจ */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
          <p>
            สร้างรูปที่มีคำว่า <b>cat</b> ใน src และ alt = <b>แมว</b>
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

export default Lesson7