<template lang="pug">
footer.footer.no-select
  .footer__item.item--list
    img(src="../assets/img/checklist.svg")
    p pedidos
  .footer__item.item--car
    img(src="../assets/img/carts.svg")
    p carrito
  .footer__item.item--profile
    img(src="../assets/img/user.svg")
    p perfil

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