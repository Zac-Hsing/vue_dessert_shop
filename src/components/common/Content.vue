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
</style>