import * as actions from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filterSelected: actions.filtrosValidos = 'todos';
  public filterOptions: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  public pendingTodos!: number;

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.store.subscribe(state => {
      // Filtro
      this.filterSelected = state.filter;
      // ToDos Pendientes
      this.pendingTodos = state.todos.filter(todo => todo.completado === false).length;
    })
  }

  changeFilter(filter: actions.filtrosValidos) {
    console.log(filter);
    this.store.dispatch(actions.setFilter({ filter }))
  }

}
