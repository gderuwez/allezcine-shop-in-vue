<template>
  <div>
    <router-view @basketContent="test" v-bind:basketContentProps="basketContentProps" @basketEmpty="basketEmpty" v-bind:credit="credit"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      basketContentProps: [],
      credit: 37.60,
    }
  },
  methods: {
    test: function (value) {
      this.basketContentProps.push(value);
      console.log(this.basketContentProps);
    },
    basketEmpty: function (value) {
      this.basketContentProps = [];
      this.credit = parseFloat(value);
    },
  }
}
</script>

<style>

</style>
