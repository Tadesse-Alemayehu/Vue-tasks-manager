<template>
  <button @click="onClick()" class="btn" :style="`background-color: ${color}`">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    text: {
      type: String,
      default: "Button without text",
    },
    color: {
      type: String,
    },
  },
  methods: {
    onClick() {
      console.log("button clicked");
    },
  },
};
</script>
