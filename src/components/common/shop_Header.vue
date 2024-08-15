<template>
  <div class="header" id="header">
    <div class="container">
      <div class="logo">
        <router-link to="/" >
          <img src="../img/logo.png"  alt="Logo">  
        </router-link>
    </div>
    <div class="navbar">
      <ul>
        <li>
            <router-link to="login">
              登入
            </router-link>
        </li>
        <li>
          <router-link to="/" id="home" class="hide">
            首頁
          </router-link>
        </li>
        <li><a href="#"  id="dessert"  class="hide"  @click="scroll">甜點</a></li>
      </ul>
      <router-link to="/cart" id="cart">
        <img class="shopicon" src="../img/shopicon.png" alt="Shop Icon">
      </router-link>
    </div>
  </div>
</div>   
</template>

<script setup lang="ts">
const emit = defineEmits(['scroll']);

function scroll() {
  emit('scroll');
}
</script>

<style scoped>
.header{
  margin: 0 auto;
  width: 1050px;
  display: flex;
  padding: 20px 0;
}
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo img {
  height: 40px;
  cursor: pointer;
}
.logo ul{
  display: flex;
  align-items: center;
}
.navbar ul {
  list-style: none;
  display: flex;
  align-items: center; 
  margin: 0;
  padding: 0;
}
.navbar ul li {
  margin-right: 20px;
}
.navbar ul li a {
  text-decoration: none;
  color: #3cb371;
  font-size: 20px;
  font-weight: bold;
}

.shopicon {
  width: 25px;
  cursor: pointer; 
}

@media (max-width: 1000px) {
  .header {
    width: 100%;
    padding: 10px;
  }

  .hide {
    display: none; 
  }

  .container {
    justify-content: space-between;
  }

  .shopicon {
    width: 30px; 
  }

  .logo img {
    height: 30px; 
  }
}
</style>
