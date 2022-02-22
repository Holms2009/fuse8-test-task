<template>
  <div class="App" id="app">
    <h1 class="App__title">Our Latest Developments</h1>
    <div class="App__filter">
      <label class="App__filter-tip" for="filter">Filter</label>
      <input
        class="App__filter-input"
        type="text"
        name="filter"
        id="filter"
        v-model="filterField"
      />
    </div>
    <div class="App__cards">
      <HouseCard v-for="house in filterHouses" :data="house" :key="house.id" />
    </div>
    <CommonButton buttonText="See more" buttonType="button" />
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import HouseCard from "./components/HouseCard/HouseCard.vue";
import CommonButton from "./components/CommonButton/CommonButton.vue";

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
    CommonButton,
  },
};
</script>


<style lang="scss">
html {
  @media screen and (max-width: 1280px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (max-width: 870px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 490px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }

  @media screen and (max-width: 360px) {
    font-size: 11px;
  }
}

body {
  margin: 0;
}

.App {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  padding-top: 36px;
  padding-bottom: 77px;
  max-width: calc(100vw * (1180 / 1366));
  color: #363636;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  &__title {
    margin: 0;
    font-size: 2.25rem;
    color: #45852d;

    @media screen and (max-width: 600px) {
      font-size: 1.75rem;
    }
  }

  &__cards {
    margin: 45px 0 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 30px;
  }

  &__filter {
    margin-top: 43px;
    align-self: flex-start;
    display: flex;
    align-items: center;

    &-tip {
      margin-right: 15px;
      font-size: 16px;
      font-weight: 700;
    }

    &-input {
      padding: 11px 10px;
      width: 418px;
      font-size: 20px;
      line-height: 26px;
      border: 1px solid #d8d8d8;
      border-radius: 25px;

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
}
</style>
