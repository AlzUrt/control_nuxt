<template>
  <div class="load">
    <h1>chargement</h1>
  </div>

  </template>
  
<script setup>
const isLoading = ref(true)
</script>

<style scoped>
  .load {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #F3F4F6;
  }

  h1 {
    font-size: 2rem;
    color: #4B5563;
    text-align: center;
  }
</style>

  