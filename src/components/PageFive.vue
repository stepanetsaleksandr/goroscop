<template>
  <div class="app">
    <HeaderTitle />

    <div class="content">
      <ProgressBar :barvalue="6" />
      <FormPage5 />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import ProgressBar from "./ProgressBar.vue";
import FormPage5 from "./FormPage5.vue";

export default {
  name: "PageFour",
  components: {
    HeaderTitle,
    ProgressBar,
    FormPage5,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
