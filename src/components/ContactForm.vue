<template>
  <section id="contact" class="container">
    <h2>Request a Test Ride</h2>
    <div class="form" style="max-width:720px">
      <p class="muted">To book a test ride, open a WhatsApp chat with us and say hi — we'll get back to you.</p>
      <div style="display:flex;gap:10px;align-items:center">
        <a class="btn-submit" :href="whatsappHiLink" target="_blank" rel="noopener">Open WhatsApp</a>
        <a class="btn-ghost" href="tel:8378973840">Call 8378973840</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import scooters from '../data/scooters'

const whatsappHiLink = computed(()=> {
  return `https://wa.me/918378973840?text=${encodeURIComponent('hi')}`
})
</script>

<style scoped>
form{max-width:720px}
</style>
