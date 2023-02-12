import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  inputTodoAdd!: FormControl;


  constructor(private store: Store<AppState>){

    this.inputTodoAdd = new FormControl('', Validators.required);

  }

  ngOnInit(): void{

  }

  addTodo(){
     if (this.inputTodoAdd.valid) {
         this.store.dispatch( actions.crearToDo({texto: this.inputTodoAdd.value}))
         this.inputTodoAdd.reset();
     }
  }

}
