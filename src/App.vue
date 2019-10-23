<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">List</router-link>  -->
      <router-link to="/list" >List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from 'axios'
export default {
  created() {
    this.getData();
  },
  destroyed() {
    console.log("Destroyed APP!!!");
  },

  methods: {
    async getData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      this.$store.commit("syncList", res.data);
      //console.log( res.data)
    }
  }
};
</script>