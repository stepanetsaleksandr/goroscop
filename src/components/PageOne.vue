<template>
  <div class="app">
    <HeaderTitle />

    <div class="content">
      <ProgressBar :barvalue="1" />
      <FormPage1 />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import ProgressBar from "./ProgressBar.vue";
import FormPage1 from "./FormPage1.vue";

export default {
  name: "PageOne",
  components: {
    HeaderTitle,
    ProgressBar,
    FormPage1,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
