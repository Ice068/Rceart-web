import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Dashboard() {
  const navigate = useNavigate()
  const user = localStorage.getItem("user")

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [user, navigate])

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className="flex h-screen bg-[#f1f5f9]">

      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-purple-700 via-pink-600 to-purple-500 text-white p-5 flex flex-col justify-between">
        
        <div>
          <h1 className="text-2xl font-bold mb-6">
            Dev <span className="text-pink-200">Dashboard</span>
          </h1>

          <div className="space-y-3">
            <div className="bg-white/25 p-2 rounded">🏠 ฐานบัญชาการ</div>
            <div 
            onClick={() => navigate("/Quest")}
            className="hover:bg-white/20 p-2 rounded cursor-pointer">⚔️ ภารกิจ</div>
            <div 
            onClick={() => navigate("/simcode")}
            className="hover:bg-white/20 p-2 rounded cursor-pointer">💻 จำลองโค้ด</div>
            <div className="hover:bg-white/20 p-2 rounded cursor-pointer">📊 ข้อมูล</div>
          </div>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"
        >
          ออกจากระบบ
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-auto">

        {/* Header */}
        <div className="text-xl font-bold mb-6 text-gray-700">
          ยินดีต้อนรับ <span className="text-purple-600">{user}</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-gray-400">EXP รวม</h3>
            <div className="text-2xl font-bold text-purple-600">0</div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-gray-400">เควสที่จบ</h3>
            <div className="text-2xl font-bold text-purple-600">0/6</div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-gray-400">บอสที่ชนะ</h3>
            <div className="text-2xl font-bold text-purple-600">2</div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="text-gray-400">แรงค์ปัจจุบัน</h3>
            <div className="text-2xl font-bold text-yellow-500">Bronze</div>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Quest */}
          <div className="md:col-span-2 bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold mb-4 text-purple-600">⚔️ ภารกิจหลัก</h3>

            <div className="space-y-4">

              <div className="border border-purple-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">เรียนรู้โครงสร้างโค้ดพื้นฐาน</h4>
                <p className="text-sm text-gray-400">เขียนโครงสร้าง HTML</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pink-500 text-sm">+50 EXP</span>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded">
                    ลุยเลย 🚀
                  </button>
                </div>
              </div>

              <div className="border border-purple-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">เรียนรู้การสร้าง Link</h4>
                <p className="text-sm text-gray-400">สร้างลิงก์ไปยังหน้าอื่น</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pink-500 text-sm">+30 EXP</span>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded">
                    ลุยเลย 🚀
                  </button>
                </div>
              </div>

              <div className="border border-purple-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">เรียนรู้การใช้งาน Heading</h4>
                <p className="text-sm text-gray-400">สร้างหัวข้อด้วย H1-H6</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pink-500 text-sm">+20 EXP</span>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded">
                    ลุยเลย 🚀
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Profile */}
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <img
              src="https://i.imgur.com/6VBx3io.png"
              alt="profile"
              className="w-24 mx-auto mb-3"
            />
            <div className="text-sm text-gray-400">Lv.0</div>
            <h2 className="font-bold text-lg text-gray-700">{user}</h2>
            <p className="text-gray-400">Rookie Front-end</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard