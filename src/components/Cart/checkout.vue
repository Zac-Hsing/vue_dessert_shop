<template>
    <div class="left-main">
      <div class="left-main-content">
        <h1>訂單資料</h1>
        <input  v-model="formData.name" type="text" placeholder="姓名">  
        <input  v-model="formData.phone" type="text" placeholder="連絡電話">
        <input  v-model="formData.email" type="text" placeholder="電子郵件">
        <button @click="submitForm">訂購</button>
      </div> 
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import {useOrderStore} from '@/stores/order';
const formData = ref({
  name: '',
  phone: '',
  email: ''
});
const cartStore = useCartStore();
const orderStore = useOrderStore(); 

function submitForm() {
  const orderData = {
    customer: formData.value,
    items: cartStore.items
  };
  orderStore.saveOrder(orderData); 
  console.log('訂單資料:', orderData);
  formData.value = {
    name: '',
    phone: '',
    email: ''
  };
  cartStore.clearCart(); 
  alert('訂購成功',orderData.value)
}
</script>

<style scoped>
.left-main {
  width: 60%;
  display: flex;
  justify-content: center;
  height: 566px;  
}
.left-main-content{
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 450px;
  padding: 20px;
  background-color: rgb(2, 141, 94);
  margin: 10px 40px;
  margin-right: 60px;
  align-items: center;
}

.left-main input {
  border-radius: 5px;
  padding-left: 8px;
  border: 1px solid antiquewhite;
  margin-bottom: 25px;
  height: 40px;
  width: 300px;
  outline: none;
}

.left-main button {
  border-radius: 5px;
  width: 120px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid antiquewhite;
  cursor: pointer;
  background-color: rgb(239, 239, 90);
}

.left-main h1 {
  text-align: center;
  margin-bottom: 60px;
}

.right-main h2 {
  text-align: center;
  margin-bottom: 15px;
}

@media (min-height: 1000px) {
  .left-main{
    height: 926px;
  }
  @media (max-width: 1000px) {
  .left-main{
    height: 600px;
  }
  .menu-left {
    width: 100%; 
  }
  .menu-left ul li {
    width: 100%; 
    padding: 15px 0;
  }
}
}
  </style>
