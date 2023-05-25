<template>
  <Loading v-if="isLoading" :is-loading="isLoading" />

<div v-else>  


  <div class="navbar-container">
    <h1 class="logo">Pro</h1>
    <Icon name="fa-solid:at" size="20" />
  </div>
  <!-- id item - nom item -->
  <div class="list">
    <div class="item" v-for="produit in produits" :key="produit.id">
      <ItemInventory :produit="produit"  />
    </div>
  </div>
</div>
</template>


<style>
body{
  margin: 0;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
}
</style>

<script setup>
definePageMeta({
middleware: 'protector'
})

const produits = ref([]);

const isLoading = ref(true);
onMounted(async () => {
setTimeout(async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  produits.value = await res.json();
  isLoading.value = false;
}, 500);
});

</script>

