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
        width: 1900px;
        height: 1100px;
        border: 1px solid #ddd
    }
</style>