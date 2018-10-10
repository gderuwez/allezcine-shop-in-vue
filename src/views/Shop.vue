<template lang="html">
  <div>
    <Header title='Shop'></Header>
    <ShopBody />
    <FooterBar/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import FooterBar from '@/components/footerBar.vue'
import ShopBody from '@/components/shopBody.vue'

export default {
  name: 'Shop',
  components: {
    Header,
    FooterBar,
    ShopBody
  }
}
</script>

<style lang="css">
</style>
