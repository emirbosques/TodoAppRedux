import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private store: Store<AppState>) {

  }


  ngOnInit(): void {

    this.store.select('todos')
      .subscribe(todos => {
        this.todoList = todos
        console.log(todos);
        
      });
  }



}
