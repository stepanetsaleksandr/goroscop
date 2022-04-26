<template>
  <div>
    <div class="header-title">
      <h1>Новый гороскоп на 2021 год!</h1>
      <h4>Узнайте, что вас ждёт.</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
header {
  display: flex;
  flex-direction: column;
}
.header-title {
  display: flex;
  flex-direction: column;
  height: 57px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 94%;
  color: #afdce6;
  background: #315dfa;
}

h1 {
  margin: 10px 0 0 0;
  padding-left: 21px;
  font-size: 17px;
  text-transform: uppercase;
}

h4 {
  margin: 5px 0 0 0;
  padding-left: 21px;
  font-size: 10px;
}
</style>
