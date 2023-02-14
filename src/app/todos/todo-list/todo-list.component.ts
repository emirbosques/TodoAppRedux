import { filtrosValidos } from './../../filter/filter.actions';
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

  public todoList: Todo[] = [];
  public filterSelected!: filtrosValidos;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.todoList = state.todos;
      this.filterSelected = state.filter;
    });
  }



}
