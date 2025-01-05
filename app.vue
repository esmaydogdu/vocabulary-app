<script setup>
const router = useRouter()
const user = useCurrentUser()
  onMounted(() => {
    watch(user, (currentUser, prevUser) => {
      if (prevUser && !currentUser) {
        return router.replace('login')
      }
    })
  })
</script>
<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>
<style>
body {
  background: black;
  color: white;
}
</style>
