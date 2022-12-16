<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @dblclick="$emit('toggle-task', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Task from "./partials/Task";
export default {
  name: "ListOfTasks",
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-task"],
  methods: {},
  props: {
    tasks: Array,
  },
};
</script>
