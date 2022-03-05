<template>
  <div class="app"></div>
</template>
<script>
import fetch from "./utils/fetch";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getUser() {
      fetch
        .request({
          url: "/user",
          method: "GET",
        })
        .then(function (resp) {
          console.log("resp: ", resp);
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    addUser() {
      fetch
        .request({
          url: "/user",
          method: "POST",
          data: {
            username: "luohao",
            password: "123456",
          },
        })
        .then(function (resp) {
          console.log("resp: ", resp);
        })
        .catch(function (err) {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>