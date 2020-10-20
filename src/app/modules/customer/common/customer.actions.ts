import { Action, createAction, props } from '@ngrx/store';

export enum CustomerActionsType {
    RESCHEDULE      = '[CUSTOMER COMPONENT] RESCHEDULE',
    CANCEL          = '[CUSTOMER COMPONENT] CANCEL',
    LOAD_SERVICE    = '[CUSTOMER COMPONENT] LOAD_SERVICE',
    LOADED_SERVICE  = '[CUSTOMER COMPONENT] LOADED_SERVICE',
}

export const Reschedule = createAction(
    CustomerActionsType.RESCHEDULE,
    props<{ id: string, date: number }>()
);

export const Cancel = createAction(
    CustomerActionsType.CANCEL,
    props<{ ids: string | string[] }>()
);

export const LoadService = createAction(
    CustomerActionsType.LOAD_SERVICE,
    props<{ ids: string | string[] }>()
);

export const ServiceIsLoaded = createAction(
    CustomerActionsType.LOADED_SERVICE,
    props<{ ids: string | string[] }>()
);

export type CustomerActions = Reschedule | Cancel | LoadSer ;