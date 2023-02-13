import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAllTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public completeAll: boolean = false;

  constructor( private store: Store<AppState>){

  }
  ngOnInit(): void {
   
  }

  completeAllTodos(){
    this.completeAll = !this.completeAll;
    this.store.dispatch(toggleAllTodos({completado: this.completeAll}));
  }

}
