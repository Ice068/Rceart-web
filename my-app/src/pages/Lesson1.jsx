import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Lesson1() {
  const navigate = useNavigate()
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")

  // ✅ ตรวจคำตอบ
  const checkCode = () => {
    const hasHTML = code.includes("<html>")
    const hasBody = code.includes("<body>")
    const hasHello = code.toLowerCase().includes("hello world")

    if (hasHTML && hasBody && hasHello) {
      setResult("✅ ถูกต้อง! คุณเข้าใจโครงสร้าง HTML แล้ว 🎉")
    } else {
      setResult("❌ ยังไม่ถูก ลองใส่ <html> <body> และ Hello World")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">

      <div className="max-w-3xl mx-auto space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white">
          📘 Lesson 1: โครงสร้าง HTML
        </h1>

        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">🧠 ลองนึกภาพแบบนี้</h3>

          <p>HTML เหมือนการสร้างบ้าน 🏠</p>

          <ul className="list-disc ml-5 mt-2">
            <li><b>&lt;html&gt;</b> = บ้านทั้งหลัง</li>
            <li><b>&lt;head&gt;</b> = สมอง</li>
            <li><b>&lt;body&gt;</b> = สิ่งที่เห็น</li>
          </ul>

          <div className="bg-gray-100 p-3 mt-3 rounded font-mono text-sm">
{`<html>
  <head></head>
  <body>Hello World</body>
</html>`}
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-2">💡 เข้าใจง่าย ๆ</h3>
          <p>สิ่งที่แสดงจริงคือ &lt;body&gt;</p>
          <p>ถ้าใส่ Hello World → คนจะเห็น</p>
        </div>

        {/* Mission */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-bold mb-3">🎯 ภารกิจ</h3>

          <p className="mb-3">
            สร้างโครงสร้าง HTML และมี <b>Hello World</b> ใน body
          </p>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="ลองพิมพ์โค้ดที่นี่..."
            className="w-full h-40 p-3 border rounded mb-3 font-mono"
          />

          <button
            onClick={checkCode}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded"
          >
            ตรวจคำตอบ
          </button>

          {result && (
            <div className="mt-3 font-semibold text-purple-600">
              {result}
            </div>
          )}
        </div>

        {/* Back */}
        <button
          onClick={() => navigate("/quest")}
          className="bg-white text-purple-600 px-4 py-2 rounded shadow"
        >
          ⬅ กลับหน้า Quest
        </button>

      </div>
    </div>
  )
}

export default Lesson1