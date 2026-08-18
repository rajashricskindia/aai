<template>
  <section id="scooters" class="container">
    <h2 style="margin-top:24px">Explore Our Scooters</h2>
    <p class="lead">Select a model to view features and book your test ride.</p>

    <div class="grid">
      <ScooterCard v-for="s in scooters" :key="s.id" :scooter="s" />
    </div>
  </section>
</template>

<script setup>
import ScooterCard from './ScooterCard.vue'
import scooters from '../data/scooters'
</script>

<style scoped>
h2{margin-bottom:6px}
</style>
