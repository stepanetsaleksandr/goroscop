<template>
  <div class="app">
    <HeaderTitle />

    <div class="content">
      <ProgressBar :barvalue="2" />
      <FormPage2 />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import ProgressBar from "./ProgressBar.vue";
import FormPage2 from "./FormPage2.vue";

export default {
  name: "PageTwo",
  components: {
    HeaderTitle,
    ProgressBar,
    FormPage2,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
