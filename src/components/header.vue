<template lang="html">
  <div >
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-flex flex-column" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/panier">Panier</router-link>
          </li>
        </ul>
        <h1><a class="navbar-brand" href="#">{{title}}</a></h1>
        <div class="flex-grow-1 border">
          <div class="border d-flex flex-row">
            <ul class="navbar-nav border">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shop">Shop</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>
            <div class="border flex-grow-1"></div>
            <form class="form-inline border">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<style lang="css">

</style>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  }
}
</script>
