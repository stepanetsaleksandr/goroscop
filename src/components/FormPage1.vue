<template>
  <div class="form" v-bind:style="formvisible">
    <div class="rectangle-black">
      <div>В какое время суток вы чувствуете себя наиболее комфортно?</div>
    </div>

    <div class="rectangle-grey-v">
      <div class="action-panel-v">
        <label class="action-item"
          ><input @click="show" id="genderChoice1" type="radio" name="gender" />
          <span style="margin: 10px"> Утро</span></label
        >
        <label class="action-item"
          ><input @click="show" id="genderChoice2" type="radio" name="gender" />
          <span style="margin: 10px">Ночь</span></label
        >
        <label class="action-item"
          ><input @click="show" id="genderChoice2" type="radio" name="gender" />
          <span style="margin: 10px">Вечер</span></label
        >
        <label class="action-item"
          ><input @click="show" id="genderChoice2" type="radio" name="gender" />
          <span style="margin: 10px">День</span></label
        >
      </div>
    </div>
    <router-link to="/2"
      ><button v-bind:style="visible" @click="saveData">
        Далее
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "FormPage1",
  components: {},

  data() {
    return {
      visible: "display: none",
    };
  },
  methods: {
    show() {
      this.visible = "display: block";
    },
  },
};
</script>

<style>
.rectangle-black {
  text-align: center;
  padding: 16px;
  background-color: #343b4d;
  color: #ffffff;
  height: 100%;
  min-width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
}
.rectangle-grey-v {
  background-color: #f3f4f8;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
  height: 100%;
  width: 100%;
}
.action-panel-v {
  margin: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
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
