import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';

@Component({
  selector: 'app-todos', 
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {



  todos!:Todo[];

  constructor() {}

  inputTodo:string = '';

  ngOnInit(): void{
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }


  toggleDone (id: number) {
    this.todos.map((v, i) => {
      if( i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteToDo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });


    this.inputTodo = '';
  }
}
