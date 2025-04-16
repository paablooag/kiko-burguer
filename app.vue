<template>
  <div>
    <NuxtPage /> 
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9454644305514527',
      async: true,
      crossorigin: 'anonymous'
    }
  ]
})
</script>

<style>
* {
  margin: 0;
}
</style>
