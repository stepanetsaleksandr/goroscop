<template>
  <div class="form" v-bind:style="formvisible">
    <div class="rectangle-black">Укажите свой пол:</div>

    <div class="rectangle-grey">
      <div class="action-panel">
        <div>Picked: {{ data }}</div>

        <input
          type="radio"
          id="one"
          value="Женщина"
          v-model="data"
          @click="show"
        />
        <label for="one">Женщина</label>

        <input
          type="radio"
          id="two"
          value="Мужчина"
          v-model="data"
          @click="show"
        />
        <label for="two">Мужчина</label>
      </div>
    </div>
    <router-link to="/1"
      ><button v-bind:style="visible" @click="saveData">
        Далее
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "FormMainPage",
  props: ["someProps"],
  components: {},

  data() {
    return {
      data: "",
      visible: "display: none",
    };
  },
  methods: {
    show() {
      this.visible = "display: block";
      this.data;
    },
    dataToHome() {
      this.$emit("updateParent", {
        data: this.data,
      });
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}

.rectangle-black {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #343b4d;
  color: #ffffff;
  height: 50px;
  min-width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
}
.rectangle-grey {
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: #f3f4f8;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
  height: 100%;
  width: 100%;
}
.action-panel {
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 15px; */
}
.action-item {
  display: inline-flex;
  align-items: center;
  margin: 10px;
}

button {
  display: block;
  margin-top: 14px;
  color: #ffffff;
  width: 186px;
  height: 45px;
  background: #315dfa;
  border: 1px solid #315dfa;
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
  text-align: center;
  text-transform: uppercase;
}

button:active {
  background: #355adf;
  border: 1px solid #315dfa;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.35);
}
</style>
