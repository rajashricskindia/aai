<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="footer-brand-name">BGauss</div>
        <div>अष्टविनायक Automobile</div>
        <div class="muted">Near Maruti Suzuki Showroom, Darwha Road, Lohara, Yavatmal</div>
      </div>

      <div class="footer-links-wrap">
        <div class="footer-col">
          <strong>Quick Links</strong>
          <div class="footer-col-links">
            <a href="#scooters">Scooters</a>
            <a href="#features">Features</a>
            <a :href="whatsappHiLink" target="_blank" rel="noopener">Book Test Ride</a>
          </div>
        </div>

        <div class="footer-col">
          <strong>Contact</strong>
          <div class="footer-contact-line">Phone: <a href="tel:8378973840">8378973840</a></div>
        </div>
      </div>
    </div>

    <div class="footer-copyright">© 2026 अष्टविनायक Automobile. All Rights Reserved.</div>
  </footer>
</template>

<script setup>
import { WHATSAPP_HI_LINK } from '../utils/whatsapp'
const whatsappHiLink = WHATSAPP_HI_LINK
</script>

<style scoped>
.muted{color:var(--muted)}
.site-footer{background:linear-gradient(180deg,#0f172a,#0b1220);color:#eef8ff;padding:26px;border-radius:12px;margin-top:34px}

.footer-inner{
  display:flex;
  justify-content:space-between;
  gap:18px;
  flex-wrap:wrap;
}
.footer-brand{min-width:0}
.footer-brand-name{font-weight:800;font-size:1.1rem}
.footer-links-wrap{
  display:flex;
  gap:24px;
  align-items:flex-start;
  flex-wrap:wrap;
}
.footer-col-links{
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-top:8px;
}
.footer-contact-line{margin-top:8px}
.footer-copyright{
  text-align:center;
  margin-top:18px;
  color:rgba(255,255,255,0.7);
  font-size:14px;
}

@media (max-width:768px){
  .footer-inner{
    flex-direction:column;
    text-align:center;
  }
  .footer-links-wrap{
    justify-content:center;
    width:100%;
    gap:32px;
  }
  .footer-col-links{align-items:center}
}

@media (max-width:480px){
  .site-footer{padding:20px 16px}
  .footer-inner{gap:24px}
  .footer-links-wrap{
    flex-direction:column;
    align-items:center;
    gap:20px;
  }
  .footer-copyright{font-size:12px}
}
</style>
