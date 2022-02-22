<template>
  <a class="HouseCard" href="#" target="_blank">
    <div class="HouseCard__image-block">
      <img
        class="HouseCard__image"
        src="https://picsum.photos/id/1040/300/400"
        alt="House Photo"
      />
      <span
        :class="[
          'HouseCard__tag',
          data.type === 'IndependentLiving' ? 'green' : 'orange',
        ]"
      >
        {{ formatedType }}
      </span>
    </div>
    <div class="HouseCard__main">
      <h2 class="HouseCard__title">{{ data.title }}</h2>
      <p class="HouseCard__text HouseCard__adress">{{ data.address }}</p>
      <p class="HouseCard__text HouseCard__price">
        New Properties for Sale from
        <span class="HouseCard__price-value">{{
          "&#163;" + data.price.toLocaleString("en-Gb")
        }}</span>
      </p>
      <p class="HouseCard__text HouseCard__info">Shared Ownership Available</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "HouseCard",
  props: ["data"],
  computed: {
    formatedType() {
      return this.data.type === "IndependentLiving"
        ? "Independent Living"
        : "Restaurant & Support available";
    },
  },
};
</script>

<style src="./HouseCard.scss" lang="scss"></style>