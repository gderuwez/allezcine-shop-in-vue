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
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" v-on:click="itemConfirmed(item['.key'])">Confirm</button>
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
      itemInBasket: []
    }
  },
  methods: {
    //need to find ways to add quantities later. Array concat ? Object ?
    //need to find a way to close the modal on confirm
    itemConfirmed: function (value) {
      this.itemInBasket.push(value);
      console.log(this.itemInBasket);
    }
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
