<script setup lang="ts">
import { brand, brandAccent, devUrl } from '@/config/site'
import devLogo from '@/assets/pimientolabs-logo.svg'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-brand">{{ brand }}<span>{{ brandAccent }}</span></div>

      <a class="footer-dev" :href="devUrl" target="_blank" rel="noopener">
        <span>Desarrollado Por:</span>
        <img class="footer-dev-logo" :src="devLogo" alt="Pimiento Labs" />
      </a>

      <small>La forma fácil de llevar tu negocio.</small>
    </div>
  </footer>
</template>
