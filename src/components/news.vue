<template>

	<div class="new">
		<h1> {{ news }} </h1>
	</div>

	<div id="but">
  		<p>{{ message }}</p>
 		<input v-model="message">
	</div>

	<div id="list">
  		<ul>
    		<li v-for="todo in todos">
      			{{ todo.text }}
    		</li>
  		</ul>
	</div>

	<div id="clic">
		<p>{{ info }}</p>
		<button v-on:click="reverseMessage">Reverse Message</button>
	</div>

	<div id="todoList">
  		<input v-model="newTodo" v-on:keyup.enter="addTodo">
  		<ul>
   			<li v-for="todoList in todoLists">
      			<span>{{ todoList.text }}</span>
      			<button v-on:click="removeTodo($index)">X</button>
    		</li>
  		</ul>
	</div>

</template>

<script>
export default {
  el: '#but, #list, #clic',
  data () {
    return {news: 'petit nouvelle',
    message: 'Cest mon texte',
    info: 'Ma petite info',
    todos: [
    { text: 'Leern JavaScript' },
    { text: 'Learn Vue.js' },
    { text: 'Build Something Awesome' },
    { text: 'Build Something Awesome' }
    ],
    newTodo: '',
    todoLists: [
      { text: 'Add some todos' }
    ]
    }
  },
  methods: {
  	reverseMessage: function () { 
  		this.info = this.info.split('').reverse().join('')
  	}
  }

  */
}
</script>

<style>
	button {
		background-color: red;
	}
</style>



