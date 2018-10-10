<template lang="html">
  <div class="">
    <TitleWithVerticalBar content='Les + vendus' />
    <div class="ml-5 mr-5">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="item in users">
          <div class="card" style="width: 18rem;">
            <router-link to="/shop"><img class="card-img-top" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap"></router-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <hr />
    <TitleWithVerticalBar content='Services' />
    <div class="container-fluid border">
      <div class="row">
        <div class="col-2"></div>
        <Services title='Cadeau' content='la facture ne sera pas livrée dans le colis et les produits sont emballés.' />
        <Services title='Prioritaire' content='le colis sera livré dans les 24 heures.' />
        <Services title='Petit mot' content='un petit mot sera joint dans le colis' />
        <Services title='Member ship' content="permet d'obtenir une réduction sur la prochaine commande à hauteur de 10%." />
      </div>
    </div>
  </div>
</template>

<script>
import {testRef} from '@/components/firebase.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import TitleWithVerticalBar from '@/components/titleWithVerticalBar.vue'
import Services from '@/components/services.vue'

export default {
  name: "BestSellers",
  components: {
    swiper,
    swiperSlide,
    TitleWithVerticalBar,
    Services
  },
  data() {
    return {
      users: {},
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        slidesPerGroup: 4,
        preventClicks: true,
        loopFillGroupWithBlank: true,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
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
