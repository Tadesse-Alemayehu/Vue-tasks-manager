<template>
  <div class="container">
    <Header title="this is sample text" />
    <AddTask @add-task="addNewTask" />
    <Tasks @toggle-task="toggleTask" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/partials/AddTask";
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  emits: ["delete-task"],
  methods: {
    deleteTask(id) {
      if (confirm(`delete ${id}`))
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTask(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    addNewTask(task) {
      console.log(task);
      this.tasks.push({ ...task, id: Math.floor(Math.random() * 1000) });
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at shool",
        day: "March 3st at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "really who cares appointment",
        day: "Jul 13st at 8:30am",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
