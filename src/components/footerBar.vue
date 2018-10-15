<template>
  <div class="container-fluid bg-black size">
    <div class="row justify-content-center">
      <div v-if="test" class="border col-4 justify-content-center">
        <div class="row align-items-center mt-4 ml-2">
          <h4 class="text-light">AllezCiné Shop</h4>
        </div>
        <div class="row align-items-center ml-2">
          <p class="mb-0 text-light">Falcon Street 55895 NY department NewTech Inside The World</p>
        </div>
        <div class="row align-items-center ml-2">
          <p class="mb-0 text-light">vf-452-58-695-85458 websuprem jojolastico MIT</p>
        </div>
        <div class="row align-items-center ml-2">
          <p class="mb-0 text-light">www.dlfgrtyu.fg/fg/ttyh</p>
        </div>
      </div>
      <div class="col-8">
        <div class="row justify-content-center mt-2">
          <div class="btn-group">
            <button class="btn btn-secondary" type="button" name="button"><a href="https://gderuwez.github.io/frontend-AllezCine/"><span>ALLEZ</span>CINE</a></button>
            <button class="btn btn-secondary" type="button" name="button"><router-link class="nav-link" to="/">Accueil</router-link></button>
            <button class="btn btn-secondary" type="button" name="button"><router-link class="nav-link" to="/shop">Shop</router-link></button>
            <button class="btn btn-secondary" type="button" name="button"><router-link class="nav-link" to="/contact">Contact</router-link></button>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="text-center font-weight-bold pb-3 justify-content-center">
            <div class="subs">CONNECT US</div>
            <div class="border iconSocial"><i class="fab fa-facebook-f lineHeightIcon"></i></div>
            <div class="border iconSocial"><i class="fab fa-twitter lineHeightIcon"></i></div>
            <div class="border iconSocial"><i class="fab fa-linkedin-in lineHeightIcon"></i></div>
            <div class="border iconSocial"><i class="fab fa-youtube lineHeightIcon"></i></div>
            <div class="border iconSocial"><i class="fab fa-google-plus-g lineHeightIcon"></i></div>
          </div>
        </div>
        <div class="row justify-content-end pr-3">
          <a href="https://github.com/gderuwez">Deruwez Guillaume</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  props: {
    test: Boolean
  }
}
</script>

<style lang="css">
.size {
  height: auto;
  margin-top: 30px;
}
.iconSocial {
  height: 30px;
  width: 30px;
  display: inline-block;
}
.lineHeightIcon {
  line-height: 30px;
  color: white;
}
.subs {
  font-weight: normal;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  color: white;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
a:active {
  color: white;
}
span {
  color: red;
}
.bg-black {
  background-color: black;
}
</style>
