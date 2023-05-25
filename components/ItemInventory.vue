<template>
  <div v-show="showItem" class="item-container">
    <div class="inventory-list">
      <div class="nom">
        <p>id: {{ produit.id }} </p> 
        <p>nom : {{ produit.title }} </p>
        <p class="nombre">nombre : {{ nombre }}</p>
      </div>
      <div class="bouton-container">
        <button @click="plussOne">+</button>
          <button @click="lessOne">-</button>
      </div>
    </div>

  </div>

</template>
  
<style>/* Stylisation générale */
.inventory-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f2f2f2;
}

.nombre{
  font-size: x-large;
  font-weight: bold;
}
.item-container {
  margin: 10px;
}

/* Stylisation des éléments dans la div nom */
.nom {
  margin-bottom: 10px;
}

.nom p {
  margin: 5px 0;
}

/* Stylisation des boutons */
.bouton-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bouton-container button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}

.bouton-container button:hover {
  background-color: #2980b9;
}

.bouton-container button:active {
  background-color: #1f618d;
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

const showItem = ref(false);

const plussOne = () => {
  nombre.value++;
  saveValue(productId, nombre.value);
}
const lessOne = () => {
  nombre.value--;
  saveValue(productId, nombre.value);
}


const nuxtApp = useNuxtApp()
const { $redis } = nuxtApp

const productId = props.produit.id
async function  saveValue(productId, value) {
  const res = await $redis.set(productId, value)
  console.log(res)

}

// get the last value
const nombre = ref(0)
onMounted(async () => {
  // get the last value
  const res = await $redis.get(productId)
  nombre.value = parseInt(res)
  console.log(res)
  if (res === null) {
    nombre.value = 0
  }
  showItem.value = true;
});

  </script>


