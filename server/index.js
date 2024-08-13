const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') 

const app = express()
const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: 'https://zac-hsing.github.io',
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions));

app.use(bodyParser.json())


const mockUser = {
    username: 'root',
    password: '1234'
}


app.post('/api/login', (req, res) => {
    const { username, password } = req.body

    
    if (username === mockUser.username && password === mockUser.password) {
       
        res.json({ success: true, message: '登入成功' })
    } else {
       
        res.status(401).json({ success: false, message: '帳號或密碼錯誤' })
    }
})


app.listen(PORT, () => {
    console.log(`伺服器正在運行在 http://localhost:${PORT}`)
})
