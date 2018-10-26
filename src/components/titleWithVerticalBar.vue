<template lang="html">
  <div class="clearfix">
    <div class="border float-left verticalBar ml-5"></div><h1 class="ml-2 border float-left">{{content}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitleWithVerticalBar',
  props: {
    content: String,
  }
}
</script>

<style lang="css">
.verticalBar {
  background-color: red;
  height: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  width: 6px;
  display: block;
}
</style>
