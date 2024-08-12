<template>
  <div class="menu-border">
    <div class="menu-box" v-for="item in filteredItems" :key="item.id">
      <img :src="item.image" alt="product image" class="product-image">
      <div class="product-info">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <span class="price">{{ item.price }}</span>
        <div class="quantity-control">
          <input type="number" v-model.number="item.quantity" min="1" />
          <button @click="addToCart(item)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useToast } from 'vue-toast-notification';
import '@/assets/dessert.css';
const cartStore = useCartStore();

// 篩選出類別為 'CheeseCake' 的商品
const filteredItems = computed(() => 
  cartStore.products.filter((item:any) => item.category === 'ChocoCake')
  .map((item:any) => {
    if (item.quantity === undefined) {
      item.quantity = 1;
    }
    return item;
  })
);

const toast = useToast();

function addToCart(item: any) {
  cartStore.addItem({ ...item });
  toast.success(`${item.name} 已加入購物車`); 
}
</script>

<style scoped>
</style>
