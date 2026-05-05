import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

function Boss2() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const iframeRef = useRef(null)
  const navigate = useNavigate()

  // ▶ Run code (แสดงผลจริง)
  const runCode = () => {
    const iframe = iframeRef.current
    if (!iframe) return

    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(code)
    doc.close()
  }

  // ✔ ตรวจโค้ด
  const checkCode = () => {
    const hasHTML = code.includes("<html")
    const hasHead = code.includes("<head")
    const hasBody = code.includes("<body")
    const hasContent =
      code.includes("<h1") ||
      code.includes("<p") ||
      code.includes("<img") ||
      code.includes("<div") ||
      code.includes("<section")

    if (hasHTML && hasHead && hasBody && hasContent) {
      setResult("🎉 FINAL BOSS COMPLETE! คุณเทพแล้ว 🔥")

      // 👉 update progress
      const raw = localStorage.getItem("gameData")
      const data = raw ? JSON.parse(raw) : { completed: [], exp: 0 }

      if (!data.completed.includes("boss2")) {
        data.completed.push("boss2")
        data.exp += 300
        localStorage.setItem("gameData", JSON.stringify(data))
      }

    } else {
      setResult("❌ โครงสร้างยังไม่ครบ (html / head / body / content)")
    }
  }

  const goBack = () => {
    navigate("/quest")
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        👑 FINAL BOSS: Sandbox
      </h1>

      {/* อธิบาย */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">🔥 ภารกิจสุดท้าย</h3>
        <p>
          สร้างเว็บไซต์อะไรก็ได้ 🎨 แต่ต้องมีโครงสร้าง HTML ที่ถูกต้อง
        </p>

        <ul className="list-disc ml-5 mt-2">
          <li>ต้องมี html / head / body</li>
          <li>ต้องมีเนื้อหาอย่างน้อย 1 อย่าง</li>
        </ul>
      </div>

      {/* Editor + Preview */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">💻 เขียนโค้ด</h3>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="เริ่มสร้างเว็บของคุณ..."
          className="w-full h-60 p-3 border rounded font-mono"
        />

        <div className="flex gap-2 mt-3">
          <button
            onClick={runCode}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            ▶ Run
          </button>

          <button
            onClick={checkCode}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            ✔ ตรวจ
          </button>
        </div>

        {/* Preview */}
        <iframe
          ref={iframeRef}
          title="preview"
          className="w-full h-64 mt-4 border rounded bg-white"
        />

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

export default Boss2