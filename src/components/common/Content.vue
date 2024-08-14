<template>
  <div class="content" id="content">
    <Menu/>
    <Dessert />
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import Dessert from './Dessert.vue';

</script>

<style>
.content{
  width: 1160px;
  margin: 0 auto;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1000px) {
  .content {
    flex-direction: column; 
    width: 100%; 
    padding: 0 20px;
    justify-content: center; 
    align-items: center; 
  }

  .content > * {
    width: 100%; 
    max-width: 1160px; 
    margin-bottom: 20px; 
  }
}
</style>