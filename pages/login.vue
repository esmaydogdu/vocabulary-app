<script setup>
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'

const auth = useFirebaseAuth()
const router = useRouter()

const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then(() => router.replace('/'))
}
//https://www.youtube.com/watch?v=pvLlZfVkeWM&ab_channel=EliLopez
</script>
<template>
  <div class="row">
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>