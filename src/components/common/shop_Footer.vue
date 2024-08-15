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
    width: 100%; 
    max-width: 1050px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
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


  @media (max-width: 1000px) {
   .footer {
      padding: 20px; /* 減少 padding 避免在小螢幕上占用過多空間 */
    }

    .footer-contain {
      flex-direction: column; /* 調整為垂直排列 */
      align-items: center;
      text-align: center;
    }

    .footer-left,
    .footer-right {
      margin-bottom: 10px;
    }

    .footer-right ul li {
      margin: 5px 0;
    }
  }
  
</style>