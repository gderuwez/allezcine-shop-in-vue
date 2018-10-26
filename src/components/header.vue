<template lang="html">
    <nav class="navbar navbar-expand-md bg-black">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="container-fluid">
          <div class="row">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" v-bind:class="{active2 : isActive === 'panier'}">
                <router-link class="nav-link faCusto" to="/panier" ><i class="faCusto fas fa-shopping-basket"></i></router-link>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center">
            <h1><a class="navbar-brand textCusto titleSize" href="#"><slot></slot></a></h1>
          </div>
          <div class="row justify-content-between row-bg">
            <div class="col-4">
              <ul class="navbar-nav mb-2 mt-2">
                <li class="nav-item mr-5 border-dark linkSize custom-bg" v-bind:class="{active2 : isActive === 'home'}">
                  <router-link class="nav-link textCusto" to="/" >Home</router-link>
                </li>
                <li class="nav-item mr-5 border-dark linkSize custom-bg" v-bind:class="{active2 : isActive === 'shop'}">
                  <router-link class="nav-link textCusto" to="/shop" >Shop</router-link>
                </li>
                <li class="nav-item mr-5 border-dark linkSize custom-bg" v-bind:class="{active2 : isActive === 'contact'}">
                  <router-link class="nav-link textCusto" to="/contact" >Contact</router-link>
                </li>
              </ul>
            </div>
            <div class="col-2">
              <div class="input-group mb-2 mt-2">
                <input class="form-control" type="search" v-model="searchterm" v-on:input="testfunction()" placeholder="Search" aria-label="Search">
                <div class="input-group-append mr-sm-2">
                  <div class="input-group-text"><i class="fas fa-search"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>


<style lang="css">
.linkSize {
  width: 120px;
  text-align: center;
}
.titleSize {
  font-size: 5rem !important;
}
.fa-shopping-basket {
  font-size: 1.5rem;
}
.row-bg {
  background-color: #FD433F;
}
.navbar {
  padding: 0 !important;
}
.custom-bg {
  color: white;
  background-color: black;
}
.custom-bg:hover, .active2:hover {
  background-color: #616161;
}
.textCusto:hover {
  color: white;
}
.faCusto:hover {
  color: #616161;
}
.active2 {
  background-color: #616161;
}
</style>

<script>
export default {
  name: 'Header',
  methods: {
    makeActive: function(item){
      this.isActive = item;
    },
    testfunction: function() {
      this.$emit('test', this.searchterm);
    }
  },
  data: function () {
    return {
      searchterm: "",
      isActive: this.$route.name,
    }
  }
}
</script>
