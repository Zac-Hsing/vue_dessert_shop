<template>
    <div class="layout">
        <div class="userlist">
           <userList/>
        </div>
        <div class="content">
           <content/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import  content from '@/components/admin/page/content.vue'
    import userList from './page/userList.vue';
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
}
.userlist {
    background-color: #2c3e50;
    width: 15%; 
}
.content {
    width: 85%; 
}
</style>