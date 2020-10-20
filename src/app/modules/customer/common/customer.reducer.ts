import { createReducer, on } from '@ngrx/store';
import { CustomerActions, CustomerActionsType } from './customer.actions';
import { InitialState } from './models/initialState';

export const initialState: InitialState = {
    loading: true,
    date: null
};


export const customerReducer = createReducer(
    initialState,
    on(CustomerActionsType.CANCEL, (state) => null),
    on(CustomerActionsType.GET_SERVICE, (state) => null),
    on(CustomerActionsType.LOADED_SERVICE, (state) => null),
    on(CustomerActionsType.LOAD_SERVICE, (state) => null),
    on(CustomerActionsType.RESCHEDULE, (state) => null)
);



export function todosReducer(state = initialState, action: CustomerActions) {

    switch (action.type) {

        case CustomerActionsType.RESCHEDULE: {
            return { ...state };
        }

        case CustomerActionsType.CANCEL: {
            let msgText = '';
            let bgClass = '';

            if (action.payload.length < 1) {
                msgText = 'No data found';
                bgClass = 'bg-danger';
            } else {
                msgText = 'Loading data';
                bgClass = 'bg-info';
            }

            return {
                ...state,
                todoList: action.payload,
                message: msgText,
                infoClass: bgClass
            };
        }

        case CustomerActionsType.RESCHEDULE: {
            return { ...state };
        }
    }
}
