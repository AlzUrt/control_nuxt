<template>
  <div class="navbar-container">
    <h1 class="logo">{{ email }}</h1>
    <button class="panier-button" @click="togglePanier">panier</button>
  </div>
  <div class="panier-container" v-show="showPanier">
    <p class="panier-title">panier</p>
    <div class="panier-item" v-for="produit in listProduit">
      <p>{{ produit }}</p>
    </div>
    
    <div class="prix-container">
      <div class="prix-text">Prix total :</div>
      <div class="prix-value">{{ prixTotal }}</div>
    </div>
    
  </div>
</template>

<style>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.panier-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.panier-container {
  position: absolute;
  right: 0;
  width: 500px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
}

.panier-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.panier-item {
  margin-bottom: 5px;
}

.prix-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

.prix-text {
  font-weight: bold;
}

</style>

  
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
  
