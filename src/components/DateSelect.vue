<template>
  <div class="date-select">
    <select id="day" name="day" v-model="day">
      <option disabled value="">День</option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select>
    <select id="month" name="month" v-model="month">
      <option disabled value="">Месяц</option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
    <select id="year" name="year" v-model="year">
      <option disabled value="">Год</option>
      <option value="2011">2011</option>
      <option value="2012">2012</option>
      <option value="2013">2013</option>
      <option value="2014">2014</option>
      <option value="2015">2015</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DateSelect",

  data() {
    return {
      day: "",
      month: "",
      year: "",
    };
  },

  methods: {},
};
</script>

<style>
.date-select {
  display: flex;
  flex-direction: column;
  margin: 27px;
}

.date-select select {
  margin-bottom: 15px;
  padding: 12px;
  width: 186px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
  color: #000000;
}
</style>
