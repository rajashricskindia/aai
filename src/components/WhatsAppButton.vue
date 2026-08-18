<template>
  <div class="whats-fab">
    <a :href="link" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" class="whats-button">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-8.17 14.31L2.5 21.5l5.2-1.3A9.5 9.5 0 1 0 12 2.5z" fill="#25D366"/></svg>
    </a>
  </div>
</template>

<script setup>
const msg = 'Hi, I am interested in BGauss electric scooters. I would like to know more and book a test ride.'
const phone = '918378973840'
const link = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
</script>

<style scoped>
.whats-fab a{display:grid;width:56px;height:56px;border-radius:999px;background:linear-gradient(90deg,#25d366,#128c7e);place-items:center;color:white;box-shadow:0 14px 30px rgba(37,211,102,0.16);text-decoration:none}
</style>
