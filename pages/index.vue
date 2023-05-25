<template>
  <div class="page-container">
    <div class="email-container">
      <p class="error-message">Veuillez utiliser une adresse e-mail valide</p>
      <div class="input-email">
        <Icon name="material-symbols:lock" size="60"/>
        <input class="email-input" placeholder="Email" type="email" @keyup.enter="setCookie(emailInput)" v-model="emailInput" name="email" />
      </div>
    </div>
  </div>
</template>

<style>
body{
  margin: 0;
}
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightblue;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

.email-container {
  text-align: center;
}

.input-email {
  display: flex;
  align-items: center;
}

.email-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
  width: 200px;
}
</style>


  
  <script setup>
  // on met en place un cookie pour le mail
  const emailInput = ref('') 

  const emailCookie = useCookie('email')
  
  function setCookie(cookie) {
    emailCookie.value = cookie
    navigateTo('/products?email='+cookie+'')
  }

  </script>
  