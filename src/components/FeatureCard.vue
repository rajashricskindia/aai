<template>
  <div class="feature">
    <div class="icon">{{ icon }}</div>
    <div>
      <h4>{{ title }}</h4>
      <p class="muted">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ icon: String, title: String, text: String })
</script>

<style scoped>
h4{margin:0 0 6px}
.muted{color:var(--muted)}
</style>
