<template>
  <div>
    <ul>
      <li v-for="value in filterData " :key="gen(value.id)">
        {{value.id}} - {{value.title}}
        <br />
        Completed : {{value.completed}}
        <br />
        <el-button type="primary" @click="deleteBox = true" plain>Delete</el-button>
        <el-dialog title="Notification" :visible.sync="deleteBox" width="35%">
          <span>Are you sure to delete this note?</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="deleteBox = false">Cancel</el-button>
            <el-button type="primary" @click="deleteItem(value.title)">Confirm</el-button>
          </span>
        </el-dialog>

        <el-button type="primary" @click="editBox = true" plain>Edit</el-button>
        <el-dialog title="Edit me!" :visible.sync="editBox" width="40%">
          ID:
          <input type="number" v-model="value.id" min="1"/>
          <br />
          <br />Title:
          <input type="text" v-model="value.title" />

          <br />
          <br />
          Completed:
          <input type="radio" value="true" v-model="value.completed" checked />
          <label for="true">True</label>
          <input type="radio" value="false" v-model="value.completed" />
          <label for="false">False</label>
          <span slot="footer" class="dialog-footer">
            <el-button @click="editBox = false">Cancel</el-button>
            <el-button type="primary" @click="editElement(value) ">Confirm</el-button>
          </span>
        </el-dialog>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      deleteBox: false,
      editBox: false
    };
  },
  created() {
    this.filterData;
  },
  methods: {
    deleteItem(arg) {
      this.deleteBox = false,
      this.$store.commit('removeElement', arg),
      this.$notify({
        title: "Success",
        message: "Deleted successfully!",
        type: "success"
      });
    },

    editElement(arg){
       this.editBox = false;
      this.$notify({
        title: "Success",
        message: "Edited successfully!",
        type: "success"
      });
      // this.arg.userID = this.arg.id
      // this.$store.dispatch('editElement',arg)
      
    },
    gen(arg) {
      //console.log(Math.floor(Math.random() * (10 - 1 + 1)));
      return Math.random() + arg;
    }
  },
  computed: {
    filterData() {
      return this.$store.state.list.filter(e => {
        return e.id == this.$route.params.id;
      });
    }
  }
};
</script>