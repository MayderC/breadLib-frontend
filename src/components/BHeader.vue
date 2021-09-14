<template lang="pug">
  
header.header
  .header__item.header--info
    h2 Bread Liberia

  .header__item.header--img
  p.credits Photo by <a href="https://unsplash.com/@aleskrivec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ales Krivec</a> on <a href="https://unsplash.com/s/photos/bread?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

</template>


<script>
export default {
  name: 'BHeader'
}
</script>

<style lang="sass" scoped>

  @import '../assets/sass/components/BHeader/skeleton'
  @import '../assets/sass/components/BHeader/skin'


</style>