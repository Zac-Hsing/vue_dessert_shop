import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
  const orders = ref([
    {
      customer: {
        name: '老王',
        phone: '0912345678',
        email: 'example@gmail.com',
      },
      items: [
        { name: '草莓蛋糕', quantity: 1, price: 150 },
        { name: '巧克力布朗尼', quantity: 2, price: 200 },
      ],
    },
    {
      customer: {
        name: '小美',
        phone: '0987654321',
        email: 'example2@gmail.com',
      },
      items: [
        { name: '檸檬塔', quantity: 3, price: 180 },
        { name: '藍莓乳酪派', quantity: 1, price: 250 },
      ],
    },
  ]); 

  function saveOrder(order) {
    orders.value.push(order); 
  }
  function removeOrder(index) {
    orders.value.splice(index, 1); 
  }
  return { orders, saveOrder, removeOrder};
}, {
    persist: true 
  });
