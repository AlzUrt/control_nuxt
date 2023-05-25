<template>
  <div class="load">
    <Icon size="60" name="svg-spinners:tadpole"/>
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


  .icone{
    width: 100px;
    height: 100px;
    color: #4B5563;
  }
</style>

  