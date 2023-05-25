<template>
   <p>utilsier un email valide</p>
    <div class="bg-green-200 grid min-h-screen place-content-center">
      <div class="text-center text-gray-400">
      <Icon name="material-symbols:lock" size="60"/>
      <input  placeholder="Email" type="email" @keyup.enter="setCookie(emailInput)" v-model="emailInput" name="email" />

    </div>

    </div>

  </template>
  
  <script setup>
  // on met en place un cookie pour le mail
  const emailInput = ref('') 

  const emailCookie = useCookie('email')
  
  function setCookie(cookie) {
    emailCookie.value = cookie
    navigateTo('/products?email='+cookie+'')
  }

  </script>
  