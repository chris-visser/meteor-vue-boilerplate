<template>
  <div class="layout-default">
    <the-header />

    <div class="page">
      <main>
        <slot />
      </main>

      <div class="sidebar">
        Sidebar
      </div>
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
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 2rem;
  }
  main {
    flex: 1;
  }
  .sidebar {
    flex: 0 0 200px;
  }
</style>