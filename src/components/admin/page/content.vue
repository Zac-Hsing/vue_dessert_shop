<template>
    <div class="page-content">
        <div class="main">
            <router-view></router-view>
        </div>   
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .page-content{  
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
     .main{
        width: 100vw; 
        height: 90vh; 
        max-width: 1500px; 
        max-height: 1100px; 
        border: 1px solid #ddd;
        box-sizing: border-box; 
    } 
    @media (min-width: 2500px) {
    .main {
        max-width: 2000px; 
        max-height: 1300px;  
        height: 80vh; 
    }
    }
</style>