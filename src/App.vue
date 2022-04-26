<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentPath: window.location.hash,
      visible: "display: none",
    };
  },

  components: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Roboto, sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 17px;
}
</style>
