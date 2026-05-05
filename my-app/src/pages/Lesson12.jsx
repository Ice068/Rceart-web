import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Lesson12() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const navigate = useNavigate()

  const checkCode = () => {
    const hasVideo = code.includes("<video")
    const hasSrc = code.includes("video.mp4")
    const hasControls = code.includes("controls")

    if (hasVideo && hasSrc && hasControls) {
      setResult("✅ ถูกต้อง! คุณผ่านเควสแล้ว")

      // 👉 update progress
      const raw = localStorage.getItem("gameData")
      const data = raw ? JSON.parse(raw) : { completed: [], exp: 0 }

      if (!data.completed.includes("lesson12_done")) {
        data.completed.push("lesson12_done")
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
        🎧🎬 Lesson: Media
      </h1>

      {/* อธิบาย */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">🧠 ลองนึกภาพ</h3>
        <p>Media = เสียง + วิดีโอ เช่น เพลง 🎵 หรือคลิป 🎬</p>

        <div className="bg-gray-100 p-3 mt-2 rounded text-sm">
{`<audio controls src="song.mp3"></audio>
<video controls src="video.mp4"></video>`}
        </div>
      </div>

      {/* อธิบายเพิ่ม */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">💡 ใช้ทำอะไร?</h3>
        <ul className="list-disc ml-5">
          <li>ใส่เพลง</li>
          <li>ใส่วิดีโอ</li>
          <li>ทำเว็บให้น่าสนใจ</li>
        </ul>
      </div>

      {/* ภารกิจ */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <h3 className="font-bold mb-2">🎯 ภารกิจ</h3>
        <p>
          สร้าง <b>&lt;video&gt;</b> ที่มีไฟล์ <b>video.mp4</b> และมี <b>controls</b>
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

export default Lesson12