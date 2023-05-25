<template>
    <Loading v-if="isLoading" :is-loading="isLoading" />

<div v-else>  

    <h1>inventory</h1>
    <!-- id item - nom item -->
    <div class="list">
      <div class="item" v-for="produit in produits" :key="produit.id">
        <ItemInventory :produit="produit"  />
      </div>
    </div>
  </div>
</template>
  
  
  
  
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
  

