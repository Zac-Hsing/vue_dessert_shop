<template>
  <div class="commodity">
    <div class="header">
      <h1>商品管理區</h1>
      <button class="add-button" @click="addProduct">新增商品</button>
    </div>
    <table class="product-table">
      <thead>
        <tr>
          <th>商品編號</th>
          <th>商品圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th>種類</th>
          <th>描述</th> 
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in paginatedProducts" :key="index">
          <td>{{ product.id }}</td>
          <td>
            <img :src="product.image" alt="商品圖片" class="product-image"/>
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.description }}</td> 
          <td>
            <button @click="editProduct(index)">修改</button>
            <button @click="deleteProduct(index)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="page">
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>   
  </div>

  <div class="modal-overlay" v-if="showModal">
    <div class="new">
      <span class="close-icon" @click="closeModal">✖</span>
      <h1>{{ isEditing ? '修改商品' : '新增商品' }}</h1>
      <input v-model="newProduct.id" type="text" placeholder="商品編號">
      <select v-model="newProduct.category">
        <option value="CheeseCake">CheeseCake</option>
        <option value="FruitTower">FruitTower</option>
        <option value="ChocoCake">ChocoCake</option>
      </select>
      <input v-model="newProduct.name" type="text" placeholder="商品名稱">
      <input v-model="newProduct.price" type="text" placeholder="商品價格">
      <textarea v-model="newProduct.description" placeholder="商品描述" rows="4"></textarea>
      <button @click="update">{{ isEditing ? '修改' : '上傳' }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import fruitetower from '@/components/img/fruitetower.jpg';
import '@/assets/commodity.css'

const cartStore = useCartStore();
const products = cartStore.products;


const currentPage = ref(1);
const itemsPerPage = ref(8);

const showModal = ref(false);
const isEditing = ref(false); 

// 用來綁定輸入的新商品或編輯中的商品資料
const newProduct = ref({
  id: 0,
  name: '',
  price: 0,
  category: 'CheeseCake', 
  description: '', 
  quantity: 1,
  image: fruitetower
});

function addProduct() {
  isEditing.value = false;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function update() {
  if (newProduct.value.id && newProduct.value.name && newProduct.value.price && newProduct.value.category && newProduct.value.description) {
    if (isEditing.value) {
      const index = products.findIndex((product: { id: number; }) => product.id === newProduct.value.id);
      if (index !== -1) {
        products[index] = { ...newProduct.value };
      }
    } else {
      products.push({ ...newProduct.value });
    }
    resetNewProduct();
    showModal.value = false;
  } else {
    alert('請填寫所有字段');
  }
}

function resetNewProduct() {
  newProduct.value = {
    id: 0,
    name: '',
    price: 0,
    category: 'CheeseCake',
    description: '',
    quantity: 1,
    image: fruitetower 
  };
}


const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return products.slice(start, start + itemsPerPage.value);
});


const totalPages = computed(() => Math.ceil(products.length / itemsPerPage.value));

const goToPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
};

const editProduct = (index: number) => {
  const productToEdit = paginatedProducts.value[index];
  Object.assign(newProduct.value, productToEdit);
  isEditing.value = true;
  showModal.value = true;
};

const deleteProduct = (index: number) => {
  const actualIndex = (currentPage.value - 1) * itemsPerPage.value + index;
  if (confirm(`確定刪除商品：${paginatedProducts.value[index].name}？`)) {
    cartStore.deleteProduct(actualIndex);
  }
};
</script>

<style scoped>

</style>