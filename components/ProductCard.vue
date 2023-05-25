<template>
  <div class="card">
    <img :src="`${produit.image}`" alt="">
    <div class="desc">
      <h2 class="title">{{ produit.title }}</h2>
      <p>{{ produit.description }}</p>
      <div class="add-container">
        <button @click="AddToShop(produit.title, produit.price)">add to shop</button>
        <p>{{  produit.price }}</p>
      </div>
    </div>

  </div>
</template>

<style>
.card {
  max-width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 35%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

.desc {
  margin-top: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.add-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.price {
  font-weight: bold;
}
.add-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

button{
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  
  <script setup>
const props = defineProps({
  produit:
  {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['add-to-shop'])
function AddToShop(productTitle , productPrice){

  // renvoyé l'élément cliqué à la page parent
  emit('add-to-shop', productTitle, productPrice)
}
  </script>
  
