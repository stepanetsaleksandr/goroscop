<template>
  <div class="app">
    <HeaderTitle />

    <div class="content">
      <ProgressBar :barvalue="4" />
      <FormPage4 />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import ProgressBar from "./ProgressBar.vue";
import FormPage4 from "./FormPage4.vue";

export default {
  name: "PageFour",
  components: {
    HeaderTitle,
    ProgressBar,
    FormPage4,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
