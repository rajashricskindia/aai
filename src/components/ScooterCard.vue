<template>
  <article class="card">
    <div class="card-image-wrapper">
      <img :src="scooter.image" :alt="scooter.name" class="bike-image" />
      <div class="image-badge">Featured</div>
    </div>
    
    <div class="card-content">
      <h3 class="bike-name">{{ scooter.name }}</h3>
      <p class="bike-description">{{ scooter.description }}</p>

      <div class="specs" v-if="scooter.specs && scooter.specs.length">
        <span v-for="(s, i) in scooter.specs" :key="i" class="spec-tag">{{ s }}</span>
      </div>

      <div class="card-actions">
        <button class="btn-details" @click="expanded = !expanded">
          {{ expanded ? '▼ Hide Details' : '▶ View Details' }}
        </button>
        <a class="btn-book" :href="whatsappHiLink" target="_blank" rel="noopener">📞 Book Ride</a>
      </div>

      <transition name="expand">
        <div v-if="expanded" class="details-section">
          <div class="features-list">
            <h4>✨ Key Features:</h4>
            <ul>
              <li v-for="(f, idx) in scooter.features" :key="idx">{{ f }}</li>
            </ul>
          </div>
          <div v-if="scooter.specLink" class="spec-download">
            <a class="btn-spec" :href="scooter.specLink" target="_blank" rel="noopener">📄 Download Spec Sheet</a>
          </div>
        </div>
      </transition>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import { WHATSAPP_HI_LINK } from '../utils/whatsapp'
const props = defineProps({ scooter: Object })
const expanded = ref(false)

const whatsappHiLink = WHATSAPP_HI_LINK
</script>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(16, 24, 40, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(16, 24, 40, 0.12);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bike-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
  transition: transform 0.3s ease;
}

.card:hover .bike-image {
  transform: scale(1.08);
}

.image-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #0ea5e9, #06b6d4);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.bike-name {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 8px 0;
  color: var(--text);
  line-height: 1.3;
}

.bike-description {
  font-size: 14px;
  color: var(--muted);
  margin: 0 0 12px 0;
  line-height: 1.5;
  flex-grow: 1;
}

.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.spec-tag {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1));
  color: var(--accent);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(14, 165, 233, 0.2);
}

.card-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.btn-details {
  flex: 1;
  min-width: 120px;
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-details:hover {
  background: var(--accent);
  color: white;
  transform: scale(1.05);
}

.btn-book {
  flex: 1;
  min-width: 120px;
  background: linear-gradient(135deg, #0ea5e9, #06b6d4);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-book:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
}

.details-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #f0f0f0;
  animation: slideDown 0.3s ease;
}

.features-list h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: var(--text);
  font-weight: 700;
}

.features-list ul {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.features-list li {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.8;
  padding: 4px 0;
  position: relative;
  padding-left: 16px;
}

.features-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

.spec-download {
  margin-top: 12px;
}

.btn-spec {
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-spec:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from, .expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .card-image-wrapper {
    aspect-ratio: 1 / 1;
  }
  
  .bike-name {
    font-size: 16px;
  }
  
  .bike-description {
    font-size: 13px;
  }
  
  .card-content {
    padding: 14px;
  }
  
  .card-actions {
    flex-direction: column;
    gap: 6px;
  }
  
  .btn-details, .btn-book {
    width: 100%;
  }
}

@media (max-width: 540px) {
  .card-image-wrapper {
    aspect-ratio: 1 / 1;
  }
  
  .bike-image {
    padding: 4px;
  }
  
  .bike-name {
    font-size: 15px;
  }
  
  .card-content {
    padding: 12px;
  }
  
  .image-badge {
    font-size: 11px;
    padding: 4px 10px;
  }
  
  .btn-details, .btn-book {
    font-size: 12px;
  }
}
</style>
