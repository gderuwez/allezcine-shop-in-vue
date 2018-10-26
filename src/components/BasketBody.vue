<template>
  <div v-if="confirm">
    <div class="mb-5 mt-2">
      <div class="container-fluid">
        <div class="row ml-1">
          <div class="col-2">
            <h4>Your item(s)</h4>
          </div>
          <div class="col-3 align-self-center">
            <h4>Description</h4>
          </div>
          <div class="col-2 align-self-center">
            <h4 class="float-right pr-5">Price</h4>
          </div>
          <div class="col-1 align-self-center">
            <h4 class="float-right pr-5">Quantity</h4>
          </div>
          <div class="col-2 align-self-center">
            <h4 class="float-right pr-5">Total</h4>
          </div>
          <div class="col-2 align-self-center">
            <h4 class="float-right pr-5">Total TTC</h4>
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
          <div class="col-1 align-self-center">
            <p class="float-right pr-5">{{item['quantity']}}</p>
          </div>
          <div class="col-2 align-self-center">
            <p class="float-right pr-5">{{item['totalhtva']}} €</p>
          </div>
          <div class="col-2 align-self-center">
            <p class="float-right pr-5">{{item['total']}} €</p>
          </div>
        </div>
        <hr />
        <div class="row border justify-content-between" v-for="item in MontantObject2">
          <div class="col-2">
            <p class="pl-3"><strong>{{item.name}}</strong></p>
          </div>
          <div class="col-2 text-right pr-3">
            <p class="mr-5">{{item.total}} €</p>
          </div>
        </div>
      </div>

      <h5 class="container-fluid mt-5">Choisissez vos suppléments</h5>
      <div class="container-fluid">
        <div class="row justify-content-between border" v-for="item in supplementsDisplay" v-on:click="toggleSup(item)" v-bind:class="{active : item.isActive, inactive : !item.isActive}">
          <div class="col-2">
            <p class="pl-3 Linen">{{item.name}}</p>
          </div>
          <div class="col-2 text-right pr-3">
            <p class="mr-5 Linen">{{item.price}} €</p>
          </div>
        </div>
        <hr />
        <div class="row border justify-content-between">
          <div class="col-2">
            <p class="pl-3"><strong>Total des suppléments</strong></p>
          </div>
          <div class="col-2 text-right pr-3">
            <p class="mr-5">{{supplement}} €</p>
          </div>
        </div>
      </div>

      <h5 class="container-fluid mt-5">Montants</h5>
      <div class="container-fluid">
        <div class="row border justify-content-between" v-for="item in MontantObject">
          <div class="col-2">
            <p class="pl-3"><strong>{{item.name}}</strong></p>
          </div>
          <div class="col-2 text-right pr-3">
            <p class="mr-5">{{item.total}} €</p>
          </div>
        </div>
      </div>
      <button class="btn btn-primary float-right mr-3 mb-5" type="button" name="button" v-on:click="confirmOrder">Confirm order</button>
    </div>
  </div>
  <div v-else>
    <p class="pl-3">Félicitations, votre commande n°:<span class="blacked" :key="item.index" v-for="(item, index) in aleatoire">{{item}}</span> d'un montant de {{MontantObject[1].total}} € a bien été prise en compte</p>
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
  data () {
    return {
      confirm: true,
      aleatoire: [],
      supplementsDisplay: [
        {
          name: "Cadeau",
          price: 2,
          isActive: false
        },
        {
          name: "Prioritaire",
          price: 6,
          isActive: false
        },
        {
          name: "petit mot",
          price: 2,
          isActive: false
        },
        {
          name: "Membership",
          price: 0,
          isActive: false
        }
      ],
    }
  },
  methods: {
    confirmOrder () {
      alert("are you sure?");
      for (var i = 0; i < 6 ; i++) {
        let variable = Math.floor(Math.random() * 10);
        this.aleatoire.push(variable);
      }
      this.confirm = false;
    },
    emptyBasket () {
      this.$emit('basketEmpty', this.creditleft);
      this.$router.push({ name: 'home' });
    },
    toggleSup (item) {
      item.isActive = !item.isActive;
    }
  },
  computed: {
    MontantObject2() {
      return [
        {
          name: "Total des articles HTVA",
          total: this.ArticlesHTVA,
        },
        {
          name: "Total des articles TTC",
          total: this.ArticlesTVA,
        }
      ]
    },
    MontantObject() {
      return [
        {
          name: "Frais de livraison",
          total: this.FraisLivraison,
        },
        {
          name: "Total a payer hors utilisation des crédits",
          total: this.TotalBeforeCredit,
        },
        {
          name: "Credits",
          total: this.credit.toFixed(2),
        },
        {
          name: "Total a payer en utilisant les crédit",
          total: this.TotalWithCredit,
        },
        {
          name: "Credits Restant après payement",
          total: this.creditleft,
        },
      ];
    },
    itemType() {
      var test = this.basketContentProps;
      var test2 = this.users
      var result = []
      for (var j in test) {
        for (var k in test2) {
          if (test[j][0] == test2[k][".key"]) {
            test2[k].quantity = parseInt(test[j][1]);
            test2[k]["Type"] === "Poster" ? test2[k].tva = 5.5 : test2[k].tva = 19.6;
            test2[k]["totalhtva"] = (parseFloat(test2[k].price) * parseFloat(test2[k].quantity)).toFixed(2);
            test2[k].total = ((parseFloat(test2[k].price) + ((parseFloat(test2[k].price) * parseFloat(test2[k].tva)) /100)) * parseFloat(test2[k].quantity)).toFixed(2);
            result.push(test2[k]);
          }
        }
      }
      return result;
    },
    ArticlesHTVA() {
      var totalCount = 0;
      for (var i in this.itemType) {
        totalCount += (parseFloat(this.itemType[i]["price"]) * this.itemType[i]["quantity"]);
      }
      return totalCount.toFixed(2);
    },
    ArticlesTVA () {
      var totalCount = 0;
      for (var i in this.itemType) {
        totalCount += (parseFloat(this.itemType[i]["price"]) * this.itemType[i]["quantity"] + ((this.itemType[i]['tva'] * parseFloat(this.itemType[i]["price"]) * this.itemType[i]["quantity"])/100)  );
      }
      return totalCount.toFixed(2);
    },
    supplement() {
      var total = 0;
      this.supplementsDisplay.forEach(function(item){
        if (item.isActive){
          total+= item.price;
        }
      });
      return total.toFixed(2);
    },
    totalHTVA () {
      return parseFloat(this.ArticlesHTVA) + parseFloat(this.supplement);
    },
    totalTTC () {
      return parseFloat(this.ArticlesTVA) + parseFloat(this.supplement);
    },
    FraisLivraison() {
      var check = this.ArticlesHTVA;
      var Frais = 0;
      if (check < 15) {Frais = 10;}
      else if (15 >= check <= 31) {Frais = 7;}
      else if (check > 31 ){Frais = 0;}
      return parseFloat(Frais).toFixed(2);
    },
    TotalBeforeCredit() {
      return (parseFloat(this.totalTTC) + parseFloat(this.FraisLivraison)).toFixed(2);
    },
    TotalWithCredit() {
      if ((parseFloat(this.TotalBeforeCredit) - parseFloat(this.credit)) <= 0) {
        return (0).toFixed(2);
      }
      else {
        return (parseFloat(this.TotalBeforeCredit) - parseFloat(this.credit)).toFixed(2);
      }
    },
    creditleft() {
      var calc = parseFloat(this.credit) - parseFloat(this.TotalBeforeCredit);
      if (calc <= 0) {
        return 0;
      }
      else {
        return calc.toFixed(2);
      }
    }
  },
  firebase: {
    users: testRef
  }
}
</script>

<style lang="css">
  .active {
    background-color: MediumSeaGreen;
  }
  .inactive {
    background-color: Tomato;
  }
  .Linen {
    color: Linen;
  }
  .blacked {
    color: black;
  }
</style>
