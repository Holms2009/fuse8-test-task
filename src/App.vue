<template>
  <div class="App" id="app">
    <h1 class="App__title">Our Latest Developments</h1>
    <div class="App__filter">
      <span class="App__filter-tip">Filter</span>
      <input
        class="App__filter-input"
        type="text"
        name="filter"
        v-model="filterField"
      />
    </div>
    <div class="App__cards">
      <HouseCard v-for="house in filterHouses" :data="house" :key="house.id" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HouseCard from "./components/HouseCard/HouseCard.vue";

export default {
  name: "App",
  data() {
    return {
      filterField: "",
    };
  },
  methods: {
    ...mapActions(["actionFetchHouses"]),
  },
  computed: {
    ...mapGetters(["getHouses"]),
    filterHouses: function () {
      if (this.filterField.length < 4) {
        return this.getHouses;
      } else {
        return this.getHouses.filter(
          (house) =>
            house.title
              .toLowerCase()
              .indexOf(this.filterField.toLowerCase()) !== -1
        );
      }
    },
  },
  async created() {
    await this.actionFetchHouses();
  },
  components: {
    HouseCard,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

.App {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  padding-top: 36px;
  max-width: calc(100vw * (1180 / 1366));
  color: #363636;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-family: "Open Sans", sans-serif;
  }

  &__title {
    margin: 0;
    color: #45852d;
  }

  &__cards {
    margin: 45px 0 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .HouseCard:not(:last-of-type) {
      margin-bottom: 38px;
    }
  }

  &__filter {
    margin-top: 43px;
    align-self: flex-start;
    display: flex;
    align-items: center;

    &-tip {
      margin-right: 15px;
      font-weight: 700;
    }

    &-input {
      padding: 11px 10px;
      width: 418px;
      font-size: 20px;
      line-height: 26px;
      border: 1px solid #d8d8d8;
      border-radius: 25px;
    }
  }
}
</style>
