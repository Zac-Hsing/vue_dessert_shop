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
</style>
