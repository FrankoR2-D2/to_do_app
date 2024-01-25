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
}
