import { filtrosValidos } from './../../filter/filter.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    console.log(todos);

    switch (filtro) {
      case 'completados':
        
        return todos.filter(todo =>  todo.completado );
        
        case 'pendientes':
          
          return todos.filter(todo =>  !todo.completado );
      
      default:
        return todos;
    }

  }

}
