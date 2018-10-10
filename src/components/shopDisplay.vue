<template lang="html">
  <div class="d-flex flex-wrap" :class="{'flex-column' : display}">
    <div v-if="display" class="row ml-1" v-for="item in mug">
      <div class="col-3">
        <img style="height:auto;width:25vh;" class="card-img-top" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap">
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
    <div v-else class="col-6">
      <div class="row">
        <div class="col-4">
          <img style="height:auto;width:25vh;" class="card-img-top" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap">
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
</template>

<script>
import {testRef} from '@/components/firebase.js'

export default {
  name: 'ShopDisplay',
  props: {
    display : Boolean,
    filtering: String
  },
  data: function () {
    return {
      users: {}
    }
  },
  computed: {
    mug: function () {
      if (this.filtering === 'All') {
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
