<template>
  <div class="app">
    <HeaderTitle />
    <div class="content">
      <MainImage />
      <TextContent />
      <FormMainPage :someProps="parent" />
    </div>
    <div>{{ parentData }}</div>
  </div>
</template>

<script>
import MainImage from "./MainImage.vue";
import TextContent from "./TextContent.vue";
import HeaderTitle from "./HeaderTitle.vue";
import FormMainPage from "./FormMainPage.vue";

export default {
  name: "HomePage",
  data() {
    return {
      parent: {
        parentData: "",
      },
    };
  },

  components: {
    MainImage,
    TextContent,
    HeaderTitle,
    FormMainPage,
  },
};
</script>

<style></style>
