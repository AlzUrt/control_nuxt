<template>
  <div class="load">
    <h1>chargement</h1>
  </div>

  </template>
  
<script setup>
const isLoading = ref(true)
</script>

<style>
.load{
  background-color: red;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
}
</style>
  