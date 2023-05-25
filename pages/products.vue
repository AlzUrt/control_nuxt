<template>
<Loading v-if="isLoading" :is-loading="isLoading" />

<div v-else class="grid grid-cols-3 gap-4">
    <div>
        <p>Email: {{ email }}</p>
      <h1>Product</h1>
  
    </div>
  
    <!--
    <div  v-for="produit in produits" :key="produit.id" class="bg-gray-100 p-4">
        <h2 class="text-xl font-bold">{{ produit.title }}</h2>
        <p>{{ produit.price }}</p>
    </div>
    -->
    <ProductCard v-for="produit in produits" :produit="produit"/>
    
    <!-- 
        
        <ProductCard v-else v-for="product in products" :product="product" :key="product.id" /> -->

    <div>
      <pre>{{ produits }}</pre>
    </div>


    <p>
      test
    </p>
    </div>
  </template>
  
  
  
  
  <script setup>
  

  
  definePageMeta({
    middleware: 'protector'
  })

  const email = ref('')
  const route = useRoute()
    // Récupérer la valeur de l'e-mail depuis la requête URL
    if (route.query.email) {
    email.value = route.query.email
    }

  // on fait la requete api
  const produits = ref([])
  const isLoading = ref(true) 
  onMounted(async () => {
    setTimeout(async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        produits.value = await res.json()
        isLoading.value = false 
    }, 500)
})
  
  </script>
  