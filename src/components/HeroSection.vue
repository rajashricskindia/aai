<template>
  <section id="home" class="container hero-container">
    <div class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Ride Electric. Ride Smart.</p>
        <h1>Experience the future of urban mobility with BGauss electric scooters</h1>
        <p class="lead">Smart Technology • Powerful Performance • Comfortable Ride • Zero Emissions</p>

        <div class="hero-ctas">
          <a class="btn-primary" :href="whatsappHiLink" target="_blank" rel="noopener">Book a Test Ride</a>
          <a class="btn-ghost" href="#scooters">Explore Scooters</a>
        </div>
      </div>

      <div class="hero-visual">
        <img src="/assets/bg-c12i-max-ice-green.png" alt="BGauss MAX C12i electric scooter in Ice Green" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { WHATSAPP_HI_LINK } from '../utils/whatsapp'
const whatsappHiLink = WHATSAPP_HI_LINK
</script>

<style scoped>
.hero{align-items:center}
.eyebrow{font-weight:800}
.lead{margin-top:8px}
</style>
