<template>
  <progress class="progress" max="6" v-bind:value="bv"></progress>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    barvalue: Number,
  },

  data() {
    return {
      bv: this.barvalue,
    };
  },
};
</script>

<style>
.progress {
  display: block;
  width: 100%;
  height: 8px;
  margin-top: 19px;
  margin-bottom: 25px;
  background-color: #f3f4f8;
}
.progress::-webkit-progress-value {
  background: #b53e42;
}
.progress::-webkit-progress-bar {
  background-color: #f3f4f8;
  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
