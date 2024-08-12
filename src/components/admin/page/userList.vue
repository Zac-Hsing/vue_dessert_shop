<template>
    <div class="list">
        <ul>
            <li>    
                <router-link to="/admin/commodity">
                    商品管理
                </router-link>
            </li>
            <li>    
                <router-link to="/admin/order">
                    訂單管理
                </router-link>
            </li>
        </ul>
        <router-link to="/">
            <button  class="logout-button">
                退出
            </button>
        </router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.list {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.list ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0; 
    text-align: center;
}

.list ul li {
    padding: 10px 0;
    margin-bottom: 10px;
    list-style: none; 
    width: 100%;
    cursor: pointer; 
}

.list ul li a {
    font-size: 35px;
    color: #fff;
    text-decoration: none;
    display: block; 
    padding: 10px 20px; 
}

.list ul li:hover{
    background-color: #1a252f;
}

.list ul li:hover a {
    color: rgb(228, 181, 62); 
}
.logout-button {
    background-color: rgb(184, 37, 37);
    color: white;
    border: none;
    padding: 15px;
    font-size: 25px;
    cursor: pointer;
    width: 200px;
    border-radius: 5px;
    margin-bottom: 80px;
}

.logout-button:hover {
    background-color: darkred;
}
</style>


