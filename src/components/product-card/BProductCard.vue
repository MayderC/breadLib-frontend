<template lang="pug">

.card
  .card__img
    img(:src="bread.img")
  .card__body
    .card__title
      h3 {{bread.name}}
    .card__description
      p {{bread.description}}
    .card__detail
      p
        span Unidades:
        |   4
      p
        span Precio: 
        |   {{bread.price}}

</template>

<script>
export default {
  name: 'BProductCard',
  props: {bread: Object}
}
</script>

<style lang="sass" scoped>

.cards
  width: 80%
  height: 600px
  display: flex
  flex-wrap: wrap
  gap: 100px

.card
  box-sizing: border-box
  background: #FFF8E9
  background: #fff
  min-width: 230px
  width: 230px
  //padding: 10px
  display: grid
  place-items: center
  border-radius: 3px
  box-shadow: 25px 25px 30px rgba(0 0 0 / 50%)
  transition: .3s
  overflow: hidden
  z-index: -1

.card__body h3 
  color: #d87022

.card__body
  max-width: 210px


.card__body p span
  color: #D87022
  font-weight: bold



.card__description
  padding: 10px 0
  max-height: 70px
  max-width: 100%

.card__description > p
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
  font-weight: bold

.card__detail
  display: flex
  flex-direction: column
  justify-content: space-around
  height: 80px

.card__detail  p
  //padding: 10px 0
  white-space: nowrap
  //text-shadow: 5px 5px 10px #d87022
  display: flex
  justify-content: space-between

.card__detail  p  
  font-weight: bold

.card:hover
  transform: rotate(20deg)
  transition: .3s

.card__img
  //width: 200px
  width: 230px
  min-height: 150px
  //height: 130px
  
  
.card__body .card__title h3
  text-align: left
  //text-shadow: 5px 5px 10px #d87022

.card__img > img
  //width: 200px
  width: 230px
  height: 150px
  object-fit: cover

  //box-shadow: 10px 10px 30px #e8d6ba, -10px -10px 30px #e8d6ba

</style>