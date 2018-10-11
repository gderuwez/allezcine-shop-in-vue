<template lang="html">
  <div class="">
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" v-for="item in itemToConfirm">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add item to basket ?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img style="height:auto;width:25vh;" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap">
            <label for="numberToOrder">How many would you like to order ?</label>
            <input class="form-control" id="numberToOrder" type="number" name="number" value="0" v-model="numberInput">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="itemConfirmed(item['.key'])">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {testRef} from '@/components/firebase.js'

export default {
  name: 'ConfirmationModal',
  props: {
    itemRef: String
  },
  data: function () {
    return {
      users: {},
      numberInput:'',
      numberOfItem: '',
      previousnumberOfItem: '',
      itemInBasket: [],
      previousItemInBasket: ''
    }
  },
  methods: {
    //need to find ways to add quantities later. Array concat ? Object ?
    itemConfirmed: function (value) {
      var test = [value, this.numberInput];
      this.itemInBasket = test;
      //console.log(this.itemInBasket);
      this.$emit('basketContent', this.itemInBasket);
    },
  },
  computed: {
    itemToConfirm: function () {
      return this.users.filter(item => item['.key'] === this.itemRef);
    }
  },
  firebase: {
    users: testRef
  }
}
</script>

<style lang="css">
</style>
