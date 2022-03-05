<template>
  <div class="app"></div>
</template>
<script>
import fetch from './utils/fetch';
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    fetch.request({
      url: '/hello',
      method: 'GET'
    }).then(function(resp) {
      console.log('resp: ', resp);
    }).catch(function(err) {
      console.error(err);
    });
  }
};
</script>