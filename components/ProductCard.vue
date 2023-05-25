<template>
  <div @click="AddToShop(produit.title)" class="card">
    <h2 class="title">{{ produit.title }}</h2>
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

const emit = defineEmits(['add-to-shop'])
function AddToShop(productTitle){
  // renvoyé l'élément cliqué à la page parent
  emit('add-to-shop', productTitle)
}
  </script>
  
  <style>
  .card{
    background-color: red;
    width: 200px;
    height: 200px;
  }

  .title{
    font-size: 20px;
  }
</style>