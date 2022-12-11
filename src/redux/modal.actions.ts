import { createAction } from "@reduxjs/toolkit";
import { ModalProperties } from "../interfaces/modal.propierties";
import { ModalActionTypes } from "./modal.types";

export const showModalAction = createAction<ModalProperties>(
    ModalActionTypes["modal@show"]
);
export const hideModalAction = createAction(ModalActionTypes["modal@hide"]);
