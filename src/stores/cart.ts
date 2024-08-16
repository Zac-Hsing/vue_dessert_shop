import { defineStore } from 'pinia';
import { ref } from 'vue';
import fruitetower from '@/components/img/fruitetower.jpg';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([]); 
  const total = ref(0); 

  // 商品資料和類別
  const products = ref<Product[]>([
    { id: 1, name: '巧克力蛋糕1', description: '濃郁的巧克力味道', price: 120, image: fruitetower, category: 'ChocoCake', quantity: 1 },
    { id: 2, name: '巧克力蛋糕2', description: '濃郁的巧克力味道', price: 130, image: fruitetower, category: 'ChocoCake', quantity: 1 },
    { id: 3, name: '巧克力蛋糕3', description: '濃郁的巧克力味道', price: 140, image: fruitetower, category: 'ChocoCake', quantity: 1 },
    { id: 4, name: '巧克力蛋糕4', description: '濃郁的巧克力味道', price: 150, image: fruitetower, category: 'ChocoCake', quantity: 1 },

    { id: 5, name: '水果塔1', description: '新鮮的水果和香脆的塔皮', price: 200, image: fruitetower, category: 'FruitTower', quantity: 1 },
    { id: 6, name: '水果塔2', description: '新鮮的水果和香脆的塔皮', price: 210, image:fruitetower, category: 'FruitTower', quantity: 1 },
    { id: 7, name: '水果塔3', description: '新鮮的水果和香脆的塔皮', price: 220, image: fruitetower, category: 'FruitTower', quantity: 1 },
    { id: 8, name: '水果塔4', description: '新鮮的水果和香脆的塔皮', price: 230, image: fruitetower, category: 'FruitTower', quantity: 1 },

    { id: 9, name: '起司蛋糕1', description: '香濃的起司口味', price: 150, image: fruitetower, category: 'CheeseCake', quantity: 1 },
    { id: 10, name: '起司蛋糕2', description: '香濃的起司口味', price: 160, image: fruitetower, category: 'CheeseCake', quantity: 1 },
    { id: 11, name: '起司蛋糕3', description: '香濃的起司口味', price: 170, image: fruitetower, category: 'CheeseCake', quantity: 1 },
    { id: 12, name: '起司蛋糕4', description: '香濃的起司口味', price: 180, image: fruitetower, category: 'CheeseCake', quantity: 1 },
  ]);

  function addItem(item: Product) {
    const existingItem = items.value.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.value.push(item);
    }
    total.value += item.price * item.quantity;
  }

  function removeItem(item: Product) {
    const index = items.value.findIndex(i => i.id === item.id);
    if (index !== -1) {
      total.value -= items.value[index].price * items.value[index].quantity;
      items.value.splice(index, 1);
    }
  }

  function clearCart() {
    items.value = []; 
    total.value = 0; 
  }

  function addProduct(product: Product) {
    products.value.push(product);
  }
  
  function updateProduct(index: number, updatedProduct: Partial<Product>) {
    products.value[index] = { ...products.value[index], ...updatedProduct };
  }
  
  function deleteProduct(index: number) {
    products.value.splice(index, 1);
  }

  return { items, total, addItem, removeItem, products, addProduct, updateProduct, deleteProduct, clearCart };
}, {
  persist: true 
});
