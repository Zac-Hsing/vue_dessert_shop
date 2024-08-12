<template>
  <div class="scroll-to-top" v-if="isVisible" @click="scrollToTop">
    <img src="../img/up.png" alt="Scroll to top">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
  const contentElement = document.getElementById('content');
  const headerElement = document.getElementById('header');
  
  if (contentElement && headerElement) {
    const contentPosition = contentElement.getBoundingClientRect();
    const headerPosition = headerElement.getBoundingClientRect();

    isVisible.value = contentPosition.top < window.innerHeight && headerPosition.bottom < 0;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
}

.scroll-to-top img {
  width: 30px;
  height: 30px;
}
</style>
