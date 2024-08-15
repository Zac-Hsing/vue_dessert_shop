<script setup lang="ts">
  import shop_Header from '@/components/common/shop_Header.vue';
  import Banner from '@/components/common/Banner.vue';
  import shop_Footer from '@/components/common/shop_Footer.vue';
  import Content from '@/components/common/Content.vue';
  import ScrollTOTop from '@/components/common/ScrollToTop.vue'
 
  function scroll() {
  const contentElement = document.querySelector('#content'); 
  contentElement?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <div class="home">
        <shop_Header @scroll="scroll"/>
        <Banner/>
        <Content />
        <shop_Footer/>
        <ScrollTOTop/>
    </div>
</template>

<style >
.home{

}
</style>
