<template lang="html">
  <div class="">
    <div class="row justify-content-center">
      <div class="text-center mt-4">
        <div class="btn-group">
          <button class="btn mr-4" v-bind:class="{ 'btn-custom2': isActive === 'Mug', 'btn-custom': isActive !== 'Mug' }" type="button" name="Mugs" v-on:click="makeActive('Mug')">Mugs</button>
          <button class="btn mr-4" v-bind:class="{ 'btn-custom2': isActive === 'Poster', 'btn-custom': isActive !== 'Poster' }" type="button" name="Posters" v-on:click="makeActive('Poster')">Posters</button>
          <button class="btn mr-4" v-bind:class="{ 'btn-custom2': isActive === 'Tshirt', 'btn-custom': isActive !== 'Tshirt' }" type="button" name="Tshirts" v-on:click="makeActive('Tshirt')">T-shirts</button>
          <button class="btn" v-bind:class="{ 'btn-custom2': isActive === 'All', 'btn-custom': isActive !== 'All' }" type="button" name="All" v-on:click="makeActive('All')">All</button>
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
    <ShopDisplay v-bind:display="toggle" v-bind:filtering="isActive" v-bind:searchterm="searchterm" @basketContent="basketContent"/>
  </div>
</template>

<script>
import ShopDisplay from '@/components/shopDisplay.vue'

export default {
  name:'ShopBody',
  components: {
    ShopDisplay
  },
  props: {
    searchterm: String
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
    },
    basketContent: function (value) {
      this.$emit('basketContent', value);
    }
  }
}
</script>

<style lang="css">
.btn-custom, .btn-custom2{
  color: white;
}
.btn-custom {
  background-color: #6F6F6F;
}
.btn-custom:hover, .btn-custom2 {
  background-color: #FD433F;
}
</style>
