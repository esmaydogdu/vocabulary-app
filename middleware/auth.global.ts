// middleware/auth.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser()

  if (user && to.name === 'login') {
    return navigateTo('/')
  }

  // redirect the user to the login page
  if (!user && to.path !== '/login') {
    return navigateTo({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    })
  }
})