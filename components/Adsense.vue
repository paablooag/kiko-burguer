<template>
    <ClientOnly>
      <ins
        class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-client="ca-pub-9454644305514527"
        :data-ad-slot="adSlot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </ClientOnly>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  defineProps({
    adSlot: {
      type: String,
      required: true
    }
  })
  
  onMounted(() => {
    if (process.client && window.adsbygoogle) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {
        console.error('Adsense error:', e)
      }
    }
  })
  </script>
  