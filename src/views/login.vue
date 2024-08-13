<template>
    <div class="login">
        <div class="container">
            <h1>用戶登入</h1>
            <div class="acount">
                <input type="text" placeholder="帳號" v-model="form.username">
            </div>
            <div class="password">
                <input type="password" placeholder="密碼" autocomplete="new-password" v-model="form.password">
            </div>
            <button @click="login">
                登入
            </button>
        </div>   
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const form = ref({
    username: '',
    password: ''
})

const router = useRouter() 

const login = async () => {
    try {
        const response = await axios.post('https://vue-dessert-shop.vercel.app/api/login', form.value)
        console.log('後端回應:', response.data)
        if (response.data.success) {
            console.log('登入成功')
            router.push('/admin') 
        } else {
            console.log('登入失敗:', response.data.message)
        }
    } catch (error) {
        console.error('發生錯誤:', error)
    }
}
</script>

<style scoped>
    .login {
        background-color: #2d3a4b;
        height: 100vh;
        display: flex;
        align-items: center;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
        height: 400px;
    }
    .container input {
        width: 650px;
        height: 60px;
        border-radius: 8px;
        background-color: #2a3b4c;
        outline: none;
        border: 1px solid #5c5c5c;
        margin-bottom: 40px;
        font-size: 30px;
        padding-left: 10px;
    }
    .container h1 {
        color: #fff;
        margin-bottom: 20px;
        padding: 10px;
        font-size: 50px;
        font-weight: 800;
    }
    .container button {
        width: 650px;
        height: 60px;
        border-radius: 8px;
        padding: 5px;
        background-color: #4da6ff;
        color: #fff;
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
    }
</style>
