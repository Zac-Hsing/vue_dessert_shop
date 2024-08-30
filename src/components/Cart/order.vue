<template>
  <div class="right-main">
    <div class="order">
      <h2>訂單摘要</h2>
      <div class="price">
        <h3>總價:</h3>
        <span>NT${{ total }}</span>
      </div>
    </div>
    <div class="cart">
      <h2>購物清單</h2>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="product image" class="cart-item-image">
        <div class="item-detail">
          <p>{{ item.name }} ({{ item.quantity }})</p>
          <p>價格: {{ item.price * item.quantity }}</p>
        </div>
        <img class="gbicon" src="../img/gbicon.png" @click="removeFromCart(item)">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);
const total = computed(() => cartStore.total);

function removeFromCart(item: any) {
  cartStore.removeItem(item);
}
</script>

<style scoped>
.right-main {
  width: 35%;
  display: flex;
  flex-direction: column;
}

.order {
  border: 1px solid #ddd;
  width: 280px;
  margin-bottom: 20px;
}

.price {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}

.order h2 {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: rgb(208, 214, 203);
}

.order h3 {
  font-size: 20px;
}

.cart {
  border: 1px solid #ddd;
  width: 280px;
}

.cart h2 {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: rgb(208, 214, 203);
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px 0px;
}

.cart-item:hover {
  background-color: #ddd; 
}

.cart-item-image {
  width: 120px;
  margin-right: 10px;
}

.item-detail {
  flex-grow: 1;
}

.gbicon {
  width: 25px;
  cursor: pointer;
  margin-left: auto;
}


@media (max-width: 1000px) {
  .right-main {
    width: 100%; 
    display: flex;
    align-items: center; 
  }

  .order, .cart {
    width: 100%; 
    max-width: 300px;
    margin: 20px;
  }
}
</style>
