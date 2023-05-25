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
  listProduit.value.push(productTitle);
  console.log(listProduit.value);
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

<style>
body {
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.container {
  padding-top: 100px;
  width: 100%;
}

.searchBar {
  width: 100%;
  height: 100px;
  background-color: white;
}
</style>
