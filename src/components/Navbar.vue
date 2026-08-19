<template>
  <nav class="nav" :class="{compact: isCompact}">
    <div class="nav-inner container">
      <div class="brand" @click="scrollTop">
        <div class="logo-container">
          <img src="/assets/bgauss-logo.png" alt="BGauss logo" class="logo-img" />
        </div>
        <div class="brand-text">
          <div class="brand-name">अष्टविनायक ऑटोमोबाईल</div>
          <small class="brand-tagline">BGauss Official Dealer</small>
        </div>
      </div>

      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#scooters">Scooters</a>
        <a href="#features">Features</a>
        <a href="#why">Why BGauss</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>

      <div style="display:flex;align-items:center;gap:12px">
        <a class="cta" :href="whatsappHiLink" target="_blank" rel="noopener">Book Test Ride</a>
        <button class="hamburger" @click="open = !open" aria-label="menu">☰</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { WHATSAPP_HI_LINK } from '../utils/whatsapp'
const open = ref(false)
const whatsappHiLink = WHATSAPP_HI_LINK
const isCompact = ref(false)

function onScroll(){
  isCompact.value = window.scrollY > 40
}

function scrollTop(){ window.scrollTo({top:0,behavior:'smooth'}) }

onMounted(()=>{ window.addEventListener('scroll', onScroll) })
onBeforeUnmount(()=>{ window.removeEventListener('scroll', onScroll) })
</script>

<style scoped>
.nav-inner{
  transition:padding .22s ease;
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav.compact .nav-inner{padding:8px 20px}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  flex-shrink: 0;
}

.logo-container {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
  padding: 4px;
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand-name {
  font-size: 18px;
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-size: 12px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hamburger{background:transparent;border:0;font-size:20px;display:none}

@media (max-width:1024px) {
  .nav-links {
    display: flex !important;
    gap: 12px;
    font-size: 14px;
  }
  .brand-name {
    font-size: 16px;
  }
}

@media (max-width:768px){
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .logo-container {
    width: 48px;
    height: 48px;
  }
  .brand-name {
    font-size: 15px;
  }
}

@media (max-width:480px) {
  .nav-inner {
    gap: 12px;
  }
  .logo-container {
    width: 44px;
    height: 44px;
  }
  .brand-name {
    font-size: 14px;
  }
  .brand-tagline {
    font-size: 11px;
  }
}
</style>
