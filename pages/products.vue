<template>

    <div>
        <p>Email: {{ email }}</p>
      <h1>Product</h1>
  
    </div>
  
    <div>
      <pre>{{ produits }}</pre>
    </div>
    
    <p>
      test
    </p>
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

  onMounted(async () => {
    setTimeout(async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        produits.value = await res.json()
        
    }, 500)
})
  
  </script>
  