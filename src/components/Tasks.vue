<template>
  <div :key="task.id" v-for="task in tasks">
    <Task @delete-task="deleteTask" :task="task" />
  </div>
</template>

<script>
import Task from "./partials/Task";
export default {
  name: "ListOfTasks",
  components: {
    Task,
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
  props: {
    tasks: Array,
  },
};
</script>
