<template>
  <div class="footer" id="footer">
    <div class="footer-contain">
      <div class="footer-left">
        <img src="../img/logo.png" alt="Logo">
      </div>
      <div class="footer-right">
        <ul>
          <li><a href="tel:03-1234567">03-1234567</a></li>
          <li><a href="mailto:sweethome@gmail.com">sweethome@gmail.com</a></li>
          <li><a>桃園市中壢區環中東路520號</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

  .footer {
    width: 100%; 
    border-top: 1px solid #c3e4d2; 
    background-color: #94e0b6; 
    padding: 50px 0; 
    display: flex;
    justify-content: center;
    position: relative;
  }

  .footer-contain {
    width: 1160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left img {
    width: 150px;
  }

  .footer-right ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-right ul li a {
    font-size: 15px;
    color: #150d0d; 
    text-decoration: none; 
  }

  .footer-right ul li a:hover {
    text-decoration: underline; 
  }
</style>