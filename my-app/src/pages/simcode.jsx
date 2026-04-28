import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function SimCode() {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  const [code, setCode] = useState(`<h1>Hello DevQuest</h1>
<p>ลองแก้โค้ดดู 🔥</p>`)

  const [output, setOutput] = useState("")

  // 🔒 check login
  useEffect(() => {
    if (!user) navigate("/")
  }, [user, navigate])

  // ▶ run code
  const runCode = () => {
    setOutput(code)
  }

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-purple-700 via-pink-600 to-purple-500 p-5 flex flex-col justify-between">
        
        <div>
          <h1 className="text-2xl font-bold mb-6">
            Dev <span className="text-pink-200">Sim</span>
          </h1>

          <div className="space-y-3">
            <div onClick={() => navigate("/dashboard")} className="hover:bg-white/20 p-2 rounded cursor-pointer">
              🏠 ฐานบัญชาการ
            </div>
            <div onClick={() => navigate("/quest")} className="hover:bg-white/20 p-2 rounded cursor-pointer">
              ⚔️ ภารกิจ
            </div>
            <div className="bg-white/25 p-2 rounded">
              💻 ทดลองโค้ด
            </div>
          </div>
        </div>

        <button onClick={logout} className="bg-red-500 hover:bg-red-600 p-2 rounded-lg">
          ออกจากระบบ
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">

        <h1 className="text-2xl font-bold mb-6">
          💻 SimCode Playground
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Editor */}
          <div className="bg-gray-900 p-4 rounded-xl shadow">
            <h3 className="mb-2 text-purple-400">✏️ เขียนโค้ด</h3>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-3 bg-black text-green-400 font-mono rounded outline-none"
            />

            <button
              onClick={runCode}
              className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded"
            >
              ▶ Run Code
            </button>
          </div>

          {/* Output */}
          <div className="bg-gray-900 p-4 rounded-xl shadow">
            <h3 className="mb-2 text-pink-400">🖥️ ผลลัพธ์</h3>

            <iframe
              title="output"
              className="w-full h-64 bg-white rounded"
              srcDoc={output}
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default SimCode