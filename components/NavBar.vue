<template>
  <div class="container2">
    <h1>{{ email }}</h1>
    <button @click="togglePanier">panier</button>
  </div>
  <div class="absolute" v-show="showPanier">
    <p>panier</p>
    <div class="panier" v-for="produit in listProduit" :key="produit.title">
      <p>{{ produit }}</p>
    </div>
    
    <div>prix : {{ prixTotal }}</div>
    
  </div>
</template>
  
<script setup>
const props = defineProps({
  email:
  {
    type: String,
    required: true
  },
  listProduit:
  {
    type: Array,
    required: true
  },
  prixTotal:
  {
    type: Number,
    required: true
  }
})


// on gère le panier :
const showPanier = ref(false)

function togglePanier() {
  showPanier.value = !showPanier.value
}
</script>
  

<style>
.container2 {
  background-color: blue;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
}
.absolute {
  background-color: green;
  width: 20%;

  position: fixed;
  justify-content: space-between;
  top: 80px;
  right: 0;
}

.panier{
  background-color: yellow;
  width: 100%;

  justify-content: space-between;
}
</style>