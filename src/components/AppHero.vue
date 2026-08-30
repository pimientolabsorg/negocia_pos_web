<script setup lang="ts">
import logoUrl from '@/assets/logo.svg'
import BaseButton from './BaseButton.vue'
import { brand, brandAccent, whatsappUrl, apkUrl } from '@/config/site'
</script>

<template>
  <header class="hero">
    <div class="container">
      <img class="logo" :src="logoUrl" alt="negocia_pos logo" />

      <h1 class="brand">{{ brand }}<span>{{ brandAccent }}</span></h1>

      <div class="tagline">
        La forma <span class="green">fácil</span> de<br />
        llevar tu negocio.
      </div>

      <p class="hero-text">Vende. Controla. Crece.</p>

      <div class="hero-actions">
        <BaseButton variant="primary" :href="apkUrl">
          Descargar app
        </BaseButton>

        <BaseButton variant="outline" :href="whatsappUrl">
          Hablar por WhatsApp
        </BaseButton>
      </div>
    </div>
  </header>
</template>
