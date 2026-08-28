<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { brand, brandAccent, whatsappUrl } from '@/config/site'
</script>

<template>
  <section id="beta" class="beta">
    <div class="container">
      <div class="beta-box">
        <div class="section-label">FASE BETA</div>

        <h2>Estamos construyendo<br />algo <span class="green">mejor.</span></h2>

        <p class="beta-copy">
          Estamos construyendo <strong>{{ brand }}{{ brandAccent }}</strong>
          escuchando a quienes realmente conocen el día a día de un negocio.
        </p>

        <BaseButton variant="primary" :href="whatsappUrl">
          Quiero participar
        </BaseButton>
      </div>
    </div>
  </section>
</template>
