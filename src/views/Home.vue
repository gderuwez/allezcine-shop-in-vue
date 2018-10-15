<template>
  <div>
    <Header>
      <span>ALLEZ</span>CINE!
    </Header>
    <BestSellers></BestSellers>
    <FooterBar test/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import BestSellers from '@/components/BestSellers.vue'
import FooterBar from '@/components/footerBar.vue'

export default {
  name: 'home',
  components: {
    Header,
    BestSellers,
    FooterBar
  }
}
</script>
