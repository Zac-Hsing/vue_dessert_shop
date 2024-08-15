<template>
    <div class="login">
        <div class="container">
            <h1>用戶登入</h1>
            <div class="acount">
                <input type="text" style="display:none">
                <input type="text" placeholder="帳號" v-model="form.username">
            </div>
            <div class="password">
                <input type="text" style="display:none">
                <input type="password" placeholder="密碼"v-model="form.password">
            </div>
            <button @click.prevent="login">
                登入
            </button>
        </div>   
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const User = {
  username: 'admintest',
  password: 'a12345678'
};
const form = ref({
    username: '',
    password: ''
})
const router = useRouter() 
const login = async () => {
  try {
    if (form.value.username === User.username && form.value.password === User.password) {
      const response = {
        data: {
          success: true,
          message: '登入成功',
        },
      };
      console.log('後端回應:', response.data);
      if (response.data.success) {
        console.log('登入成功');
        router.push('/admin');
      }
    } else {
      const response = {
        data: {
          success: false,
          message: '帳號或密碼錯誤',
        },
      };
      console.log('登入失敗:', response.data.message);
    }
  } catch (error) {
    console.log('發生錯誤:', error);
  }
};

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
