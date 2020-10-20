import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { TodosService } from './../../services/todos/todos.service';

import {
    TodosActionType,
    GetTodosSuccess, GetTodosFailed,
    AddTodoSuccess, AddTodoFailed,
    UpdateTodoSuccess, UpdateTodoFailed,
    DeleteTodoSuccess,
    DeleteTodoFailed
} from './todos.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Todo } from '../../models/todo';

@Injectable()
export class TodosEffects {

    constructor(
        private actions$: Actions,
        private todosService: TodosService
    ) { }

    @Effect()
    getTodos$ = this.actions$.pipe(
        ofType(TodosActionType.GET_TODOS),
        switchMap(() =>
            this.todosService.getAPITodos().pipe(
                map((todos: Array<Todo>) => new GetTodosSuccess(todos)),
                catchError(error => of(new GetTodosFailed(error)))
            )
        )
    );
}
