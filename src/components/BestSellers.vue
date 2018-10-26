<template lang="html">
  <div class="">
    <TitleWithVerticalBar content='Les + vendus' />
    <div class="ml-5 mr-5">
      <swiper :options="swiperOption" >
        <swiper-slide :key="index" v-for="(item, index) in users">
          <div class="card" style="width: 18rem;">
            <router-link to="/shop"><img class="card-img-top" v-bind:src="require('../assets/images/' + item['image'])" alt="Card image cap"></router-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      </swiper>
    </div>
    <hr />
    <TitleWithVerticalBar content='Services' />
    <div class="container-fluid border">
      <div class="row">
        <div class="col-2"></div>
        <Services title='Cadeau' content='The facture will not be delivered with the package and the products will be individually packaged.' />
        <Services title='Prioritaire' content='The package will be delivered within 24 hours.' />
        <Services title='Petit mot' content='A message will be included with the package.' />
        <Services title='Member ship' content="Allow you to get a 10% reduction on your next purchase." />
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
        slidesPerView: 4,
        spaceBetween: 40,
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
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
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
.swiper-pagination-bullet-active {
  color: black;
  background-color:  black;
}
</style>
