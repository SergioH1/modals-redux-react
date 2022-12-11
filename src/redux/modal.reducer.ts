import { createReducer } from "@reduxjs/toolkit";
import { ModalProperties } from "../interfaces/modal.propierties";
import { ModalActionTypes } from "./modal.types";
import * as actions from "./modal.actions";
export type ModalState = {
    modal: ModalProperties | null | undefined;
};

const initialState: ModalState = {
    modal: null,
};
export interface ModalAction {
    type: ModalActionTypes;
    payload?: ModalProperties;
}

export const modalReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(actions.showModalAction, (state, action) => ({
            ...state,
            modal: action.payload,
        }))
        .addCase(actions.hideModalAction, (state, action) => ({
            ...state,
            modal: null,
        }))
        .addDefaultCase((state) => state);
});
