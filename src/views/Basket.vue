<template lang="html">
  <div>
    <Header>
      Basket
    </Header>
    <BasketBody v-bind:basketContentProps="basketContentProps" @basketEmpty="basketEmpty" v-bind:credit="creditToProps"/>
    <FooterBar/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import FooterBar from '@/components/footerBar.vue'
import BasketBody from '@/components/BasketBody.vue'

export default {
  name: 'Basket',
  data: function () {
    return {
      creditToProps: this.credit,
    }
  },
  props: {
    basketContentProps: Array,
    credit: Number,
  },
  methods: {
    basketEmpty: function (value) {
      this.$emit('basketEmpty', value);
    },
  },
  components: {
    Header,
    FooterBar,
    BasketBody
  }
}
</script>

<style lang="css">
</style>
