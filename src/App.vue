<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WelcomeItem from './components/WelcomeItem.vue';
import { useAuthstore } from './stores';
import { onMounted } from 'vue';

const authStore = useAuthstore();

onMounted(() => {
  authStore.init();
})
</script>

<template>
  <header>
    <div class="wrapper">
      <WelcomeItem >
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>
    </WelcomeItem>
    </div>
  </header>
  <RouterView />
</template>

