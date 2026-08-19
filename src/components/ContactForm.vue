<template>
  <section id="contact" class="container">
    <h2>Request a Test Ride</h2>
    <div class="form" style="max-width:720px">
      <p class="muted">To book a test ride, open a WhatsApp chat with us and say hi — we'll get back to you.</p>
      <div class="contact-actions">
        <a class="btn-submit" :href="whatsappHiLink" target="_blank" rel="noopener">Open WhatsApp</a>
        <a class="btn-ghost" href="tel:8378973840">Call 8378973840</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WHATSAPP_HI_LINK } from '../utils/whatsapp'

const whatsappHiLink = WHATSAPP_HI_LINK
</script>

<style scoped>
form{max-width:720px}
.contact-actions{
  display:flex;
  gap:10px;
  align-items:center;
  flex-wrap:wrap;
}

@media (max-width:480px){
  .contact-actions{
    flex-direction:column;
    align-items:stretch;
  }
  .contact-actions a{
    width:100%;
    text-align:center;
    box-sizing:border-box;
  }
}
</style>
