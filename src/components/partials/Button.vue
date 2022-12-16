<template>
  <button
    @click="$emit('toggle-show-add-task')"
    class="btn"
    :style="`background-color: ${color}`"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonComp",
  emits: ["toggle-show-add-task"],
  props: {
    text: {
      type: String,
      default: "Button without text",
    },
    color: {
      type: String,
    },
  },
  methods: {},
};
</script>
