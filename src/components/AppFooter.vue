<script setup lang="ts">
import { brand, brandAccent } from '@/config/site'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-brand">{{ brand }}<span>{{ brandAccent }}</span></div>
      <small>La forma fácil de llevar tu negocio.</small>
    </div>
  </footer>
</template>
