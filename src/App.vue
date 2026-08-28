<script setup lang="ts">
import AppHero from './components/AppHero.vue'
import AppFeatures from './components/AppFeatures.vue'
import AppBeta from './components/AppBeta.vue'
import AppFooter from './components/AppFooter.vue'
import { features } from './config/site'
</script>

<template>
  <AppHero />
  <main>
    <AppFeatures :features="features" />
    <AppBeta />
  </main>
  <AppFooter />
</template>
