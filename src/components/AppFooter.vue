<script setup lang="ts">
import { brand, brandAccent, devUrl } from '@/config/site'
import SocialLinks from './SocialLinks.vue'
import devLogo from '@/assets/pimientolabs-logo.svg'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-brand">{{ brand }}<span>{{ brandAccent }}</span></div>

      <SocialLinks variant="footer" />
      <p class="footer-social-text">Síguenos y únete a nuestra comunidad</p>

      <a class="footer-dev" :href="devUrl" target="_blank" rel="noopener">
        <span>Desarrollado Por:</span>
        <img class="footer-dev-logo" :src="devLogo" alt="Pimiento Labs" />
      </a>

      <small>La forma fácil de llevar tu negocio.</small>
    </div>
  </footer>
</template>
