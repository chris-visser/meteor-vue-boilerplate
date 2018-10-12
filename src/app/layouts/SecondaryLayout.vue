<template>
  <div class="layout-secondary">
    <the-header />

    <div class="page">
      <slot />
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader';

  export default {
    components: {
      TheHeader,
    }
  }
</script>

<style>
  .page {
    padding: 2rem;
  }
</style>