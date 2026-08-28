<script setup lang="ts">
import type { Feature } from '@/config/site'

defineProps<{
  features: Feature[]
}>()
</script>

<template>
  <section>
    <div class="container">
      <div class="section-heading">
        <div class="section-label">NEGOCIA_POS</div>
        <h2>Todo bajo <span class="green">control.</span></h2>
      </div>

      <div class="features">
        <div v-for="feature in features" :key="feature.number" class="feature">
          <div class="feature-number">{{ feature.number }}</div>
          <h3>{{ feature.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
