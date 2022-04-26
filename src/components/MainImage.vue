<template>
  <div class="header-img">
    <img class="header-img_main" src="..\assets\623.png" alt="" />
    <img class="header-img_circle" src="..\assets\thumb_348.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "MainImage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.header-img {
  display: flex;
  float: right;
}

.header-img_circle {
  position: absolute;
  top: 50px;
  left: 50%-50px;
  max-width: 50%;
  margin: 17px;
  z-index: 1;
  animation: spin 25s linear 0s infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.header-img_main {
  max-width: 100%;
}
</style>
