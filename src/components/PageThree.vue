<template>
  <div class="app">
    <HeaderTitle />

    <div class="content">
      <ProgressBar :barvalue="3" />
      <FormPage3 />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import ProgressBar from "./ProgressBar.vue";
import FormPage3 from "./FormPage3.vue";

export default {
  name: "PageTwo",
  components: {
    HeaderTitle,
    ProgressBar,
    FormPage3,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
