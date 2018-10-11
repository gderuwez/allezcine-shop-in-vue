<template lang="html">
  <div>
    <div class="d-flex flex-wrap" :class="{'flex-column' : display}">
      <div v-if="display" class="row ml-1" v-for="item in filteredItem" v-on:click="test(item['.key'])" data-toggle="modal" data-target="#exampleModal">
        <div class="col-3">
          <img style="height:auto;width:25vh;" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap">
        </div>
        <div class="col-6 align-self-center">
          <div class="row">
            <h5>{{item['type']}}</h5>
          </div>
          <div class="row">
            <p>{{item['description']}}</p>
          </div>
        </div>
        <div class="col-3 align-self-center">
          <p class="float-right pr-5">{{item['price']}}</p>
        </div>
      </div>
      <div v-else class="col-6" data-toggle="modal" data-target="#exampleModal" v-on:click="test(item['.key'])">
        <div class="row">
          <div class="col-4">
            <img style="height:auto;width:25vh;" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap">
          </div>
          <div class="col-4 align-self-center">
            <h5>{{item['type']}}</h5>
          </div>
          <div class="col-4 align-self-center">
            <p class="float-right pr-5">{{item['price']}}</p>
          </div>
        </div>
      </div>
    </div>
    <ConfirmationModal v-bind:itemRef="itemRef" @basketContent="basketContent"/>
  </div>
</template>

<script>
import {testRef} from '@/components/firebase.js'
import ConfirmationModal from '@/components/confirmationModal.vue'

export default {
  name: 'ShopDisplay',
  components: {
    ConfirmationModal
  },
  props: {
    display : Boolean,
    filtering: String,
    searchterm: String
  },
  data: function () {
    return {
      users: {},
      itemRef: ""
    }
  },
  methods: {
    test: function (value) {
      this.itemRef = value;
    },
    basketContent: function (value) {
      this.$emit('basketContent', value);
    }
  },
  computed: {
    filteredItem: function () {
      if (this.searchterm) {
        var filtered = this.searchterm.trim().toLowerCase();
        return this.users.filter(item => item['description'].toLowerCase().indexOf(filtered) !== -1);
      }
      else if (this.filtering === 'All') {
        return this.users;
      }
      else {
        return this.users.filter(item => item['type'] === this.filtering);
      }
    }
  },
  firebase: {
    users: testRef
  }
}
</script>

<style lang="css">
</style>
