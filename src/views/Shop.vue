<template lang="html">
  <div>
    <Header title='Shop'  @test="testing"></Header>
    <ShopBody v-bind:searchterm="searchterm" @basketContent="basketContent"/>
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
  },
  data: function () {
    return {
      searchterm: "",
    }
  },
  methods: {
    testing: function (value) {
      this.searchterm = value;
    },
    basketContent: function (value) {
      this.$emit('basketContent', value);
    }
  }
}
</script>

<style lang="css">
</style>
