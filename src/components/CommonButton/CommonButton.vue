<template>
  <button class="CommonButton" :type="buttonType">
    <span class="CommonButton__text">{{ buttonText }}</span>
    <span class="CommonButton__icon"></span>
  </button>
</template>

<script>
export default {
  name: "CommonButton",
  props: ["buttonText", "buttonType"],
};
</script>

<style src='./CommonButton.scss' lang="scss"></style>