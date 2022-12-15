<template>
  <div :key="task.id" v-for="task in tasks">
    <Task :task="task" />
  </div>
</template>

<script>
import Task from "./partials/Task";
export default {
  name: "ListOfTasks",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
};
</script>
