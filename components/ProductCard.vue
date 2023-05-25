<template>
  <h1>fghjkl</h1>
  <div class="bg-gray-100 p-4">
    <h2 class="text-xl font-bold">{{ produit.title }}</h2>
    <p>{{ produit.price }}</p>
  </div>
</template>
  
  <script setup>
const props = defineProps({
  produit:
  {
    type: Object,
    required: true
  }
})
  </script>
  