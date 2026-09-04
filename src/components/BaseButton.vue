<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'outline' | 'channel'
    href?: string
    download?: boolean
  }>(),
  {
    variant: 'primary',
    href: '#',
    download: false,
  },
)
</script>

<template>
  <a
    class="button"
    :class="`button-${variant}`"
    :href="href"
    :download="download ? '' : undefined"
  >
    <slot />
  </a>
</template>
