<template lang="html">
  <div class="mb-5 mt-2">
    <div class="d-flex flex-wrap flex-column">
      <div class="row ml-1">
        <div class="col-2">
          <h4>Your item(s)</h4>
        </div>
        <div class="col-3">
          <h4>Description</h4>
        </div>
        <div class="col-2">
          <h4>Price</h4>
        </div>
        <div class="col-2">
          <h4>Quantity</h4>
        </div>
        <div class="col-3">
          <h4>Montant tva</h4>
        </div>
      </div>
      <div class="row ml-1" v-for="item in itemType" v-on:click="test(item['.key'])">
        <div class="col-2">
          <img style="height:auto;width:10vh;" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap">
        </div>
        <div class="col-3 align-self-center">
          <div class="row">
            <h5>{{item['type']}}</h5>
          </div>
          <div class="row">
            <p>{{item['description']}}</p>
          </div>
        </div>
        <div class="col-2 align-self-center">
          <p class="float-right pr-5">{{item['price']}}</p>
        </div>
        <div class="col-2 align-self-center">
          <p class="float-right pr-5">{{item['quantity']}}</p>
        </div>
        <div class="col-2 align-self-center">
          <p class="float-right pr-5">{{item['tva']}}%</p>
        </div>
      </div>
    </div>
    <hr/>
    <h5>Options supplémentaires</h5>
    <div class="">
      <label for="">Cadeau</label>
      <input type="checkbox" v-model="supplements" name="" value="2">
    </div>
    <div class="">
      <label for="">Prioritaire</label>
      <input type="checkbox" v-model="supplements" name="" value="6">
    </div>
    <div class="">
      <label for="">petit mot</label>
      <input type="checkbox" v-model="supplements" name="" value="1">
    </div>
    <div class="">
      <label for="">Membership</label>
      <input type="checkbox" name="" value="">
    </div>
    <hr/>
    <p><strong>Frais de livraison</strong> : {{FraisLivraison}}</p>
    <hr/>
    <hr/>
    <p><strong>Credits</strong> : {{credit}}</p>
    <hr/>
    <p><strong>Total Hors Tva</strong> : {{trueTotalHTVA}}</p>
    <p><strong>Total with Tva</strong> : {{trueTotal}}</p>
    <button type="button" name="button" v-on:click="check">check</button>
    <button class="btn btn-primary float-right mr-3" type="button" name="button" v-on:click="emptyBasket">Confirm order</button>
  </div>
  </template>

<script>
import {testRef} from '@/components/firebase.js'

export default {
  name: 'BasketBody',
  props: {
    basketContentProps: Array,
    credit: Number,
  },
  data: function () {
    return {
      supplements: []
    }
  },
  methods: {
    emptyBasket: function () {
      alert("Are you sure ?");
      this.$emit('basketEmpty', this.creditleft);
      this.$router.push({ name: 'home' });
    },
    check : function () {
      console.log(this.totalTva);
      console.log(this.credit);
    }
  },
  computed: {
    itemType: function () {
      var test = this.basketContentProps;
      var test2 = this.users
      var result = []
      for (var j in test) {
        for (var k in test2) {
          if (test[j][0] == test2[k][".key"]) {
            test2[k].quantity = test[j][1];
            test2[k]["Type"] === "Poster" ? test2[k].tva = 5.5 : test2[k].tva = 19.6;
            result.push(test2[k]);
          }
        }
      }
      return result;
    },
    itemNumber: function () {
      var test = this.basketContentProps;
      var newArray = [];
      for (var i in test) {
        newArray.push(test[i][1])
      }
      return newArray;
    },
    totalTva : function () {
      var totalCount = 0;
      var totalsupp = 0;
      var amountOfItems = this.itemNumber;
      for (var i in this.itemType) {
        totalCount += (parseInt(this.itemType[i]["price"]) * amountOfItems[i] + ((this.itemType[i]['tva'] * parseInt(this.itemType[i]["price"]) * amountOfItems[i])/100)  );
      }
      var supplementsToCount = this.supplements;
      for (var j in supplementsToCount) {
          totalsupp += parseInt(supplementsToCount[j]);
      }
      return totalsupp += parseFloat(totalCount.toFixed(2));
    },
    totalHorsTva : function () {
      var totalCount = 0;
      var totalsupp = 0;
      var amountOfItems = this.itemNumber;
      for (var i in this.itemType) {
        totalCount += (parseInt(this.itemType[i]["price"]) * amountOfItems[i]);
      }
      var supplementsToCount = this.supplements;
      for (var j in supplementsToCount) {
          totalsupp += parseInt(supplementsToCount[j]);
      }
      return totalsupp + totalCount;
    },
    FraisLivraison: function () {
      var check = this.totalTva;
      var Frais = 0;
      if (check < 15) {Frais = 10;}
      else if (15 >= check <= 31) {Frais = 7;}
      else if (check > 31 ){Frais = 0;}
      return Frais;
    },
    trueTotal : function () {
      var display;
      var result = (this.totalTva + this.FraisLivraison) - this.credit;
      if (result < 0) {
        display = 0;
      }
      else {
        display = "yup";
      }
      return display;
    },
    trueTotalHTVA: function () {
      var display;
      var result = (this.totalHorsTva + this.FraisLivraison) - this.credit;
      if (result < 0) {
        display = 0;
      }
      else {
        display = "nop";
      }
      return display;
    },
    creditleft: function () {
      return this.credit - (this.totalHorsTva + this.FraisLivraison);
    }
  },
  firebase: {
    users: testRef
  }
}
</script>

<style lang="css">
</style>
