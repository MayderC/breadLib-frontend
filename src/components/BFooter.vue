<template lang="pug">
footer.footer.no-select
  .footer__item.item--list
    img(src="../assets/img/checklist.svg")

  .footer__item.item--car
    img(src="../assets/img/carts.svg")
   
  .footer__item.item--profile
    img(src="../assets/img/user.svg")
 

</template>
<script>
export default {
  name: 'BFooter',
  methods: {


  }
}
</script>


<style lang="sass" >
  @import '../assets/sass/variables'
  @import '../assets/sass/components/BFooter/skeleton'
  @import '../assets/sass/components/BFooter/skin'
</style>