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

<style scoped>
.main {
    min-height:85vh;
}
.contianer {
  width: 1160px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 50px 0; 
}

@media (max-width: 1000px) {
  .main{
    padding: 50px;
    margin-bottom: 50px;
  }
  .contianer{
    flex-direction: column; 
    width: 100%; 
    padding: 0 20px;
    justify-content: center; 
    align-items: center;
  }

  .contianer > * {
    width: 100%; 
    max-width: 1160px; 
  }
}
</style>
