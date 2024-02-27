import type { ModalState } from '../../definitions';

import { createSlice } from '@reduxjs/toolkit';

const initialState: ModalState = {
    isOpened: false,
    title: '',
    children: null,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            const { title, children } = action.payload;

            state.title = title;
            state.children = children;
            state.isOpened = true;
        },
        closeModal: (state) => {
            state.isOpened = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
