<template>
  <div class="main">
    <div class="contianer">
      <checkout/>
      <order/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import order from './order.vue'
  import checkout from './checkout.vue'
</script>

<style >
.main{
  width: 1160px;
  margin: 0 auto;
}
.contianer {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 50px 0; 
  width: 1160px;
}
</style>
