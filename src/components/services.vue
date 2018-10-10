<template lang="html">
  <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
    <div class="border inner">
      <h3>{{title}}</h3>
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
    title: String,
    content: String
  }
}
</script>

<style lang="css">
.inner {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 100%;
  height: 100%;
}
</style>
