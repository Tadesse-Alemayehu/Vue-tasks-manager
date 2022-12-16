<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @toggle-show-add-task="$emit('toggle-show-add-task')"
      text="Add Task"
      color="green"
    />
  </header>
</template>

<script>
import Button from "./partials/Button.vue";
export default {
  name: "HeaderElement",
  emits: ["toggle-show-add-task"],
  props: {
    title: {
      type: String,
      default: "Default prop",
    },
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
