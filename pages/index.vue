<script setup>
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useNuxtApp } from "#app";
import { signOut } from 'firebase/auth'
import DOMPurify from 'dompurify';

let db = {}
const user = useCurrentUser()
const auth = useFirebaseAuth()
const data = ref(null)
const errorMessage = ref('')
const successMessage = ref('')
const words = ref([])
const randomWord = ref(null);
const word = ref('')
const description = ref('')
const showAllWords = ref(false)


const sanitizeInput = (input) => {
  return DOMPurify.sanitize(input);
};

// db init
onMounted(async () => {
  const { $firebaseApp } = useNuxtApp();
  db = getFirestore($firebaseApp);
  const vocabRef = collection(db, `users/${user.value.uid}/vocabulary`);
  const querySnapshot = await getDocs(vocabRef);
  words.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const handleSignOut = () => {
  signOut(auth)
}

const addWord = async () => {
  if (!user.value?.uid) {
    errorMessage.value = 'You must be logged in to add words.';
    return;
  }

  const sanitizedWord = sanitizeInput(word.value);
  const sanitizedDescription = sanitizeInput(description.value);

  try {
    const vocabRef = collection(db, `users/${user.value.uid}/vocabulary`);
    await addDoc(vocabRef, {
      word: sanitizedWord,
      description: sanitizedDescription
    });
    successMessage.value = 'Word added successfully!';

    setTimeout(() => {
      successMessage.value = '';
      word.value = '';
      description.value = '';
    }, 2000);
  } catch (error) {
    errorMessage.value = 'Failed to add word. Please try again.';
    console.error(error);

    setTimeout(() => {
      errorMessage.value = '';
    }, 2000);
  }
};

const getRandomWord = async () => {
  if (!user.value?.uid) {
    console.error('User must be logged in to get a random word.');
    return;
  }

  try {
    const vocabRef = collection(db, `users/${user.value.uid}/vocabulary`);
    const querySnapshot = await getDocs(vocabRef);
    const words = querySnapshot.docs.map(doc => doc.data());

    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const shuffledWords = shuffleArray(words);
    randomWord.value = shuffledWords[0]; 
  } catch (error) {
    console.error('Failed to fetch random word', error);
  }
};

const toggleWordsLabel = computed(() => {
  return showAllWords.value ? 'Hide words' : 'Show words';
});
</script>

<template>
  <div class="main">
    <div class="header">
      <div class="row">
        <div>hello {{ user.displayName }}</div>
        <button @click="handleSignOut">log out</button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="column">
          <button @click="getRandomWord">Pick A Random Word</button>
  
          <div v-if="randomWord" class="column">
            <h3>{{ randomWord.word }}</h3>
            <p>{{ randomWord.description }}</p>
          </div>
        </div>
        <form @submit.prevent="addWord" class="column">
          <h2>Add a word</h2>
          <input v-model="word" type="text" id="word" placeholder="word" required />
          <textarea v-model="description" id="description" placeholder="description" required></textarea>
          <button type="submit">Add Word</button>
          <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
          <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
        </form>
      </div>
    </div>
    <div class="container">
      <h2>Your Vocabulary</h2>
      <button @click="showAllWords = !showAllWords">{{toggleWordsLabel}}</button>
      <ul v-show="showAllWords">
        <li v-for="(word, index) in words" :key="word.id">
          <strong>{{ word.word }}</strong>: {{ word.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.main {
  max-width: 1200px;
  margin: 24px auto;
}
.container {
  max-width: 800px;
  margin: 48px auto;
  padding: 24px;
  border: 2px solid purple;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, textarea {
  margin-bottom: 24px;
}

button {
  background: blueviolet;
  color: white;
  outline: none;
  border: none;
  padding: 12px 16px;  
  cursor: pointer;
}
button:hover {
  background:red;
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
</style>
