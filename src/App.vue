<template>
  <div class="container">
    <router-view></router-view>
    <Header
      @toggle-show-add-task="toggleShowAddTask"
      title="this is sample text"
    />
    <AddTask v-show="showAddTask" @add-task="addNewTask" />
    <Tasks @toggle-task="toggleTask" @delete-task="deleteTask" :tasks="tasks" />
    <!-- <About /> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/partials/AddTask";
// import About from "./views/footer";
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
    // About,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  emits: ["delete-task"],
  methods: {
    async deleteTask(id) {
      const response = await fetch(`api/tasks/${id}`, {
        method: "delete",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      } else console.log("error deleting task");
    },
    async toggleTask(id) {
      const task = this.tasks.filter((task) => task.id == id)[0];
      task.reminder = !task.reminder;
      const response = await fetch(`api/tasks/${id}`, {
        method: "put",
        headers: {
          "Content-type": "application/json",
          Accept: "json",
        },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const data = await response.json();
        this.tasks = this.tasks.map((task) =>
          task.id === data.id ? data : task
        );
      } else console.log("error updating data");
    },
    async addNewTask(task) {
      const response = await fetch("api/tasks", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Accept: "json",
        },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const data = await response.json();
        this.tasks.push(data);
      } else console.log("error adding the new task");
    },
    toggleShowAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  async created() {
    let result = await fetch("api/tasks");
    let data = await result.json();
    this.tasks = data;
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
