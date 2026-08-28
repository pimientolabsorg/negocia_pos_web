<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    interval?: number
  }>(),
  { interval: 4000 },
)

const modules = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const slides = computed(() =>
  Object.keys(modules)
    .sort()
    .map((key, i) => ({ label: String(i + 1), src: modules[key] })),
)

const active = ref(0)

const count = computed(() => slides.value.length)

const wrap = (i: number) => (i + count.value) % count.value

const prevIndex = computed(() => wrap(active.value - 1))
const nextIndex = computed(() => wrap(active.value + 1))

const shown = computed(() => [
  { slide: slides.value[prevIndex.value]!, index: prevIndex.value, position: 'side' as const },
  { slide: slides.value[active.value]!, index: active.value, position: 'active' as const },
  { slide: slides.value[nextIndex.value]!, index: nextIndex.value, position: 'side' as const },
])

function go(direction: -1 | 1) {
  active.value = wrap(active.value + direction)
}

function select(index: number) {
  active.value = index
}

let timer: ReturnType<typeof setInterval> | undefined

function start() {
  stop()
  timer = setInterval(() => go(1), props.interval)
}

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <section class="carousel-section">
    <div class="container">
      <div class="section-heading">
        <div class="section-label">LA APP</div>
        <h2>Conoce <span class="green">negocia_pos.</span></h2>
      </div>

      <div class="carousel" @mouseenter="stop" @mouseleave="start">
        <button
          class="carousel-arrow carousel-arrow--prev"
          type="button"
          aria-label="Anterior"
          @click="go(-1)"
        >
          &#8249;
        </button>

        <div class="carousel-viewport">
          <button
            v-for="item in shown"
            :key="item.index"
            type="button"
            class="carousel-slide"
            :class="`carousel-slide--${item.position}`"
            :aria-label="item.position === 'active' ? `Diapositiva ${item.slide.label}` : `Ver diapositiva ${item.slide.label}`"
            @click="item.position === 'side' ? select(item.index) : undefined"
          >
            <img
              class="carousel-slide-img"
              :src="item.slide.src"
              :alt="`Captura de negocia_pos ${item.slide.label}`"
            />
          </button>
        </div>

        <button
          class="carousel-arrow carousel-arrow--next"
          type="button"
          aria-label="Siguiente"
          @click="go(1)"
        >
          &#8250;
        </button>
      </div>
    </div>
  </section>
</template>
