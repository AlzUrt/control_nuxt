<template>
  <Loading v-if="isLoading" :is-loading="isLoading" />

  <div v-else>
    <div>
      <NavBar :email="email" :listProduit="listProduit" :prixTotal="prixTotal" />
    </div>

    <div class="container">
      <div class="searchBar">
        <p>Recherche ton produit</p>
        <input type="text" placeholder="search" v-model="search" @input="searchInput" />
      </div>
      <div class="grid">
        <ProductCard v-for="produit in filteredProduits" :produit="produit" @add-to-shop="addToShopHandler" />
      </div>
    </div>
  </div>
</template>

<style>
body{
  margin: 0;
}
.page-container {
  background-color: #f2f2f2;
  padding: 10px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.searchBar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.searchBar p {
  margin-right: 10px;
  font-weight: bold;
}

.searchBar input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}
</style>

<script setup>
definePageMeta({
  middleware: 'protector'
});

const email = ref('');
const route = useRoute();

// Récupérer la valeur de l'e-mail depuis la requête URL
if (route.query.email) {
  email.value = route.query.email;
}

// on fait la requete api
const produits = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  setTimeout(async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    produits.value = await res.json();
    isLoading.value = false;
  }, 500);
});

// ajout des éléments au panier
const listProduit = ref([]);
const prixTotal = ref(0);

const addToShopHandler = (productTitle, productPrice) => {
  listProduit.value.push([productTitle, productPrice]);
  prixTotal.value += productPrice;
};

// la bar de recherche
const search = ref('');

const searchInput = () => {
  const searchValue = search.value.toLowerCase();
  console.log(searchValue);
};

const filteredProduits = computed(() => {
  if (!search.value) {
    return produits.value;
  }
  const searchValue = search.value.toLowerCase();
  return produits.value.filter((produit) =>
    produit.title.toLowerCase().includes(searchValue)
  );
});
</script>


