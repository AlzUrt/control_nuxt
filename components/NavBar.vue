<template>
  <div class="navbar-container">
    <h1 class="logo">{{ email }}</h1>
    <button class="panier-button" @click="togglePanier">panier <Icon name="map:grocery-or-supermarket" size="20" /></button>
  </div>
  <div class="panier-container" v-show="showPanier">
    <div class="panier-item" v-for="produit in listProduit" :class="{ 'panier-item-dark': index % 2 !== 0 }">
      <p class="produit-nom"> {{ produit[0] }}</p>
      <p class="prix">{{ produit[1] }}€</p>
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
.produit-nom {
  margin-right: 10px;
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
.panier-item-dark {
  background-color: #eaeaea;
}

.panier-item {
  display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}
.prix {
  font-weight: bold;
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
  
