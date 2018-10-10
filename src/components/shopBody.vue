<template lang="html">
  <div class="">
    <div class="row justify-content-center">
      <div class="text-center mt-4">
        <div class="btn-group">
          <button class="btn mr-4" v-bind:class="{ 'btn-primary': isActive === 'Mug' }" type="button" name="Mugs" v-on:click="makeActive('Mug')">Mugs</button>
          <button class="btn mr-4" v-bind:class="{ 'btn-primary': isActive === 'Poster' }" type="button" name="Posters" v-on:click="makeActive('Poster')">Poster</button>
          <button class="btn mr-4" v-bind:class="{ 'btn-primary': isActive === 'Tshirt' }" type="button" name="Tshirts" v-on:click="makeActive('Tshirt')">T-shirts</button>
          <button class="btn" v-bind:class="{ 'btn-primary': isActive === 'All' }" type="button" name="All" v-on:click="makeActive('All')">All</button>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-3">
        <p class="pl-3">You are watching {{isActive}}</p>
      </div>
      <div class="col-3">
        <i v-if="toggle" class="pr-3 float-right fas fa-list-ul" v-on:click="toggling()"></i>
        <i v-else class="pr-3 float-right fas fa-th" v-on:click="toggling()"></i>
      </div>
    </div>
    <hr/>
    <ShopDisplay v-bind:display="toggle" v-bind:filtering="isActive"/>
  </div>
</template>

<script>
import ShopDisplay from '@/components/shopDisplay.vue'

export default {
  name:'ShopBody',
  components: {
    ShopDisplay
  },
  data: function() {
    return {
      isActive: 'All',
      toggle: true
    }
  },
  methods: {
    makeActive: function(item){
      this.isActive = item;
    },
    toggling: function() {
      this.toggle = !this.toggle;
    }
  }
}
</script>

<style lang="css">
</style>
