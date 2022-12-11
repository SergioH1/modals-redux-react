import { configureStore } from "@reduxjs/toolkit";

import { modalReducer, ModalState } from "../redux/modal.reducer";

export interface Store {
    modal: ModalState;
}
const preloadedState: Store = {
    modal: {} as ModalState,
};
export const appStore = configureStore({
    reducer: { modal: modalReducer },
    preloadedState,
});
export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
