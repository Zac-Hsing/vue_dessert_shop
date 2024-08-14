<template>
  <div class="menu-left">
    <ul>
      <li class="menu"><h2>甜點類別</h2></li>
      <li><router-link to="All">所有甜點</router-link></li>
      <li><router-link to="ChocoCake">巧克力蛋糕</router-link></li>
      <li><router-link to="FruitTower">水果塔</router-link></li>
      <li><router-link to="CheeseCake">起司蛋糕</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu-left {
  width: 20%;
  margin-left: 0;
}

.menu-left ul {
  list-style: none;
  padding: 0;
}

.menu-left ul li {
  border: 1px solid #c3e4d2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.menu-left ul li:hover {
  background-color: #bdd9cb;
}

.menu-left ul li a {
  text-decoration: none;
  font-size: 18px;
  color: #638e76;
  text-align: center;
  font-weight: bold;
}

.menu-left ul li h2 {
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 0;
}

.menu {
  background-color: #257a4b;
}
@media (max-width: 1000px) {
  .menu-left {
    width: 100%; 
  }

  .menu-left ul li {
    width: 100%; 
    padding: 15px 0;
  }
}
</style>