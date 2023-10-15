<template>
  <div id="homePage">
    <HomeEstatisticaGeral />
  </div>
</template>
<script lang="ts">

definePageMeta({
  layout: "navbar",
});

export default {
  name: 'homePage',
}
</script>
<style>

  #homePage{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>