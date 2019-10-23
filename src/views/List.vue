<template>
  <div>
    <h1>Todo List</h1>

    <div>
      <el-button type="primary" @click="dialogVisible = true" plain>Add to Todo list</el-button>

      <el-dialog title="Add to Todo list" :visible.sync="dialogVisible" width="40%">
        <form action>
          ID:
          <input type="number" v-model="newElement.id" min="1" />
          <br />
          <br />Title:
          <input type="text" v-model="newElement.title" />
          <br />
          <br />Completed:
          <input type="radio" value="true" v-model="newElement.completed" checked />
          <label for="true">True</label>
          <input type="radio" value="false" v-model="newElement.completed" />
          <label for="false">False</label>
          <br />
        </form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="addList">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="list">
      <li v-for="(value, index) in list " :key="index">
        <button @click="value.thuocTinh = !value.thuocTinh">Gan A</button>
        Gia tri {{ value.id }} {{ value.thuocTinh }}
        <br />
        <router-link :to="{name: 'detail', params: {id: value.id}}">{{value.id}} - {{value.title}}</router-link>
      </li>

      <li v-for="(value, key, index) in objectDemo " :key="key">
        {{ index}}
        value : {{ value}}
        <br />
        key: {{ key}}
      </li>
      <li v-for="(value, index) in 6" :key="index">{{ index }} {{value}}</li>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      newElement: {},
      dialogVisible: false,
      objectDemo: {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      }
    };
  },
  created() {
    this.list = this.$store.getters.getList;

    // this.list = this.list.map(e => {
    //   return {...e, thuocTinh: false}
    // })
    // this.list.forEach(e => {
    //   this.$set(e, "thuocTinh", false);
    // });
  },
  computed: {
    // list() {
    //   return this.$store.getters.getList;
    // }
  },
  methods: {
    addList() {
      this.dialogVisible = false;
      console.log(this.newElement);
      this.$store.commit("addElement", this.newElement);
      this.$notify({
        title: "Success",
        message: "Created successfully!",
        type: "success"
      });
    },
    gen(arg) {
      return Math.random() + arg;
    }
  }
};
</script>

<style >
.list {
  text-align: left;
}
</style>