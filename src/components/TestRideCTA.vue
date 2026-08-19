<template>
  <section class="container cta-section">
    <div class="cta-inner">
      <div class="cta-text">
        <h2>Ready to Experience Electric?</h2>
        <p class="muted">Visit our showroom and experience a BGauss electric scooter for yourself.</p>
      </div>
      <div class="cta-actions">
        <a class="btn-primary" :href="whatsappHiLink" target="_blank" rel="noopener">Book Your Test Ride</a>
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
.muted{color:var(--muted)}
.cta-section{
  padding:36px 0;
  background:linear-gradient(90deg,#fef3c7,#fff);
  border-radius:12px;
  margin:28px auto;
}
.cta-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  flex-wrap:wrap;
  padding:0 20px;
}
.cta-text{flex:1 1 260px;min-width:0}
.cta-text h2{margin:0 0 6px;word-wrap:break-word}
.cta-actions{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}
.cta-actions a{white-space:nowrap}

@media (max-width:768px){
  .cta-section{padding:24px 0;margin:20px auto}
  .cta-inner{flex-direction:column;align-items:stretch;text-align:center;padding:0 16px}
  .cta-actions{justify-content:center}
}

@media (max-width:540px){
  .cta-section{padding:20px 0;border-radius:10px}
  .cta-inner{gap:14px;padding:0 14px}
  .cta-text h2{font-size:clamp(18px,5vw,22px)}
  .cta-actions{flex-direction:column;width:100%}
  .cta-actions a{width:100%;text-align:center;box-sizing:border-box}
}
</style>
