<template>
  <div>
    <!-- <Header /> -->
    
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <Error :error="error" />  <!-- Muestra tu página personalizada de error -->
      </template>
      <NuxtPage />  <!-- Renderiza las páginas normales -->
    </NuxtErrorBoundary>

    <!-- <Footer /> -->
  </div>
</template>
