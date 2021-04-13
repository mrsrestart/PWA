<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row justify="center" content="center">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Enter Your Works</v-card-title>
              <v-row class="px-3 py-3">
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                      label="Title"
                      placeholder="write your title here..."
                      outlined
                      v-model="todo.title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                      label="Content"
                      placeholder="write your content here..."
                      outlined
                      v-model="todo.content"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-btn
                      color="green"
                      @click="saveToDo()"
                      block
                      dark
                  >Save ToDo
                  </v-btn>
                </v-col>
                <v-list
                    subheader
                    three-line
                >

                </v-list>

                <v-divider></v-divider>

                <div v-if="todos.length">
                  <v-list flat subheader three-line>
                    <v-subheader>General</v-subheader>

                    <v-list-item-group multiple active-class="">
                      <div v-for="(todo,index) in todos" :key="index">
                        <v-list-item>
                          <template v-slot:default="{ active }">
                            <v-list-item-action>
                              <v-checkbox v-model="todo.active"></v-checkbox>
                            </v-list-item-action>

                            <v-list-item-content>
                              <v-list-item-title>{{ todo.title }}</v-list-item-title>
                              <v-list-item-subtitle>{{ todo.content }}
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </v-list-item>
                      </div>
                    </v-list-item-group>
                  </v-list>
                  <v-btn
                      class="py-3 px-3"
                      color="red"
                      dark
                      block
                      @click="removeToDo()"
                  >
                    Remove Selected ToDo
                  </v-btn>
                </div>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {},

  data: () => ({
    todo: {
      title: '',
      content: '',
      active: false
    },
    todos: [],
  }),
  watch: {
    todos:{
      handler(){
        localStorage.setItem("todos",JSON.stringify(this.todos))
      }
    }
  },
  methods: {
    saveToDo: function () {
      let emptyTodo = {
        title: '',
        content: '',
        active: false,
      }
      if (this.todo.title.length > 0) {
        this.todos.push(this.todo);
      }
      this.todo = emptyTodo
    },
    removeToDo: function () {
      this.todos.forEach((todo, index) => {
            if (todo.active === true) {
              this.todos.splice(index)
            }
          }
      )
    }
  },

  mounted() {
    if (localStorage.getItem("todos")){
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  }
});
</script>
