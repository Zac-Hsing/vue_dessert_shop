const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // 引入 cors 模組

const app = express()
const PORT = process.env.PORT || 3000

// 使用 cors 中間件，允許所有來源
app.use(cors())

// 使用 body-parser 來解析 JSON 格式的請求體
app.use(bodyParser.json())

// 模擬的使用者數據
const mockUser = {
    username: 'root',
    password: '1234'
}

// 設定登入路由
app.post('/api/login', (req, res) => {
    const { username, password } = req.body

    // 驗證帳號密碼
    if (username === mockUser.username && password === mockUser.password) {
        // 返回成功訊息
        res.json({ success: true, message: '登入成功' })
    } else {
        // 返回錯誤訊息
        res.status(401).json({ success: false, message: '帳號或密碼錯誤' })
    }
})

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器正在運行在 http://localhost:${PORT}`)
})
