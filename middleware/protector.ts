export default defineNuxtRouteMiddleware((to, from) => {
  const emailCookie = useCookie('email')

  if (!emailCookie.value || !emailCookie.value.includes('@')) {
    return navigateTo('/')
  }
})
