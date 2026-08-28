<script setup lang="ts">
import { brand, brandAccent } from '@/config/site'
import devLogo from '@/assets/pimientolabs-logo.svg'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-brand">{{ brand }}<span>{{ brandAccent }}</span></div>

      <div class="footer-dev">
        <span>Desarrollado Por:</span>
        <img class="footer-dev-logo" :src="devLogo" alt="Pimiento Labs" />
      </div>

      <small>La forma fácil de llevar tu negocio.</small>
    </div>
  </footer>
</template>
