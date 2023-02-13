import * as actions from './../todo.actions';
import { AppState } from './../../app.reducer';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})


export class TodoItemComponent implements OnInit {

  @Input() todoItem!: Todo;
  @ViewChild('inputEdit') inputEdit!: ElementRef;

  // FORM
  checkCompleted!: FormControl;
  textInput!: FormControl;
  editingTodo: boolean = false;


  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todoItem.completado);
    this.textInput = new FormControl(this.todoItem.texto, Validators.required)


    this.checkCompleted.valueChanges
      .subscribe((checkValue: boolean) => {
        this.setActionOnTodoCompleted();
      });
  }


  editTodo() {
    this.editingTodo = true;
    this.textInput.setValue(this.todoItem.texto);
    setTimeout(() => {
      this.inputEdit.nativeElement.select();
    }, 1);
  }

  saveChanges() {
    this.editingTodo = false;
    if (this.textInput.valid && this.textInput.value !== this.todoItem.texto) {
      this, this.store.dispatch(actions.editTodo({ id: this.todoItem.id, texto: this.textInput.value }))
    }

  }

  setActionOnTodoCompleted() {
    this.store.dispatch(actions.toggleTodo({ id: this.todoItem.id }))
  }


  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id: this.todoItem.id}))
  }

}
