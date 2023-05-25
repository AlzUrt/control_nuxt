<template>
  <div v-show="showItem" class="item">
    <p>{{ produit.id }} - {{ produit.title }} - {{ nombre }}</p>
        <button @click="plussOne">+</button>
        <button @click="lessOne">-</button>
  </div>

</template>
  
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


<style>
.item{
  display: flex;
  margin-bottom: 10px;
}

</style>