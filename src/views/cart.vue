<template>
  <div class="cart">
    <shop_Header/>
    <cart_main/>
    <shop_Footer/> 
  </div>
</template>
<script setup lang="ts">
  import shop_Header from '@/components/common/shop_Header.vue';
  import shop_Footer from '@/components/common/shop_Footer.vue';
  import cart_main from '@/components/Cart/cart_main.vue';
</script>
<style>
.main {
  height: auto;
}

@media (min-height: 1300px) {
  .main{
    min-height: 1443px;
  }
}
@media (max-height: 1300px){
  .main{
    height: 962px;
  }
}
</style>
