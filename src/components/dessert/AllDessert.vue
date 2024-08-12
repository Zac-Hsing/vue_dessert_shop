<template>
  <div>
    <div class="menu-border">
      <div class="menu-box" v-for="item in paginatedItems" :key="item.id">
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
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一頁</button>
      <span>第 {{ currentPage }} 頁</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一頁</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { useToast } from 'vue-toast-notification';

const cartStore = useCartStore();
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() => {
  return Math.ceil(cartStore.products.length / itemsPerPage);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cartStore.products.slice(start, end);
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

const toast = useToast();

function addToCart(item: any) {
  cartStore.addItem({ ...item });
  toast.success(`${item.name} 已加入購物車`); 
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
}
</style>
