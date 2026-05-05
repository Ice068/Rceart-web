import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Lesson11() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

  const checkCode = () => {
    const hasTable = code.includes("<table>")
    const hasTr = code.includes("<tr>")
    const hasTd = code.includes("<td>")
    const hasHTML = code.includes("HTML")
    const hasCSS = code.includes("CSS")

    if (hasTable && hasTr && hasTd && hasHTML && hasCSS) {
      setResult("✅ ถูกต้อง! คุณผ่านเควสแล้ว")

      // 👉 อัปเดต progress
      const raw = localStorage.getItem("gameData")
      const data = raw ? JSON.parse(raw) : { completed: [], exp: 0 }

      if (!data.completed.includes("lesson11_done")) {
        data.completed.push("lesson11_done")
        data.exp += 30
        localStorage.setItem("gameData", JSON.stringify(data))
      }

    } else {
      setResult("❌ ยังไม่ถูก ลองใหม่อีกครั้ง")
    }
  }

  const goBack = () => {
    navigate("/quest")
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        📊 Lesson: Table
      </h1>

      {/* อธิบาย */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">🧠 ลองนึกภาพ</h3>
        <p>Table = ตาราง ใช้แสดงข้อมูลเป็นช่อง ๆ</p>

        <div className="bg-gray-100 p-3 mt-2 rounded text-sm">
{`<table>
  <tr>
    <td>1</td>
  </tr>
</table>`}
        </div>
      </div>

      {/* อธิบายเพิ่ม */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">💡 ส่วนประกอบ</h3>
        <ul className="list-disc ml-5">
          <li>&lt;table&gt; = ตาราง</li>
          <li>&lt;tr&gt; = แถว</li>
          <li>&lt;td&gt; = ช่องข้อมูล</li>
        </ul>
      </div>

      {/* ภารกิจ */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
        <p>
          สร้างตารางที่มีข้อมูล <b>HTML</b> และ <b>CSS</b>
        </p>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="ลองพิมพ์โค้ดที่นี่..."
          className="w-full h-40 mt-3 p-3 border rounded"
        />

        <button
          onClick={checkCode}
          className="mt-3 bg-purple-500 text-white px-4 py-2 rounded"
        >
          ตรวจคำตอบ
        </button>

        <div className="mt-3 font-semibold">{result}</div>
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

export default Lesson11