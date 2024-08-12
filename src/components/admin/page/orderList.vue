<template>
    <div class="order-list">
      <h1>客戶訂單</h1>
      <div v-for="(order, index) in orders" :key="index" class="order-item">
        <div class="order-header">
          <h2>訂單 {{ index + 1 }}</h2>
          <div class="action-buttons">
            <button @click="removeOrder(index)" class="delete-button">刪除</button>
            <img 
              src="@/assets/img/up.png"
              class="toggle-icon"
              @click="toggleDetails(index)"
            />
          </div>
        </div>
        <div v-show="expanded[index]" class="order-details">
          <p>姓名: {{ order.customer.name }}</p>
          <p>電話: {{ order.customer.phone }}</p>
          <p>電子郵件: {{ order.customer.email }}</p>
          <h3>商品列表:</h3>
          <ul>
            <li v-for="(item, idx) in order.items" :key="idx">
              {{ item.name }} - 數量: {{ item.quantity }} - 價格: {{ item.price }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref, computed,watch } from 'vue';
  import { useOrderStore } from '@/stores/order'; 
  
  const orderStore = useOrderStore();
const orders = computed(() => orderStore.orders);


const expanded = ref<boolean[]>([]);
watch(
  () => orders.value.length,
  (newLength) => {
    expanded.value = new Array(newLength).fill(false);
  },
);


function toggleDetails(index: number) {
  expanded.value[index] = !expanded.value[index];
}


function removeOrder(index: number) {
  orderStore.removeOrder(index);
}
</script>
  
<style scoped>
  .order-list {
    padding: 20px;
  }
  .order-item {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .action-buttons {
    display: flex;
    align-items: center;
  }
  .delete-button {
    margin-right: 10px;
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }
  .toggle-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .order-details {
    margin-top: 10px;
  }
</style>
  