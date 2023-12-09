import { createReducer } from "@reduxjs/toolkit";


export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';
export const SELECT_DATA_REQUEST = 'SELECT_DATA_REQUEST';
export const SELECT_DATA_SUCCESS = 'SELECT_DATA_SUCCESS';
export const SELECT_DATA_FAILURE = 'SELECT_DATA_FAILURE';

export const dataReducer = createReducer(
  {
    loading: false,
    allTickets: [],
    allUser: [],
  },
  (builder) => {
    builder
      .addCase(DATA_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DATA_SUCCESS, (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
      })
      .addCase(DATA_FAILURE, (state) => {
        state.loading = false;
        state.allTickets = [];
        state.allUser = [];
      });
  }
);

export const selectDataReducer = createReducer(
  {
    loading: false,
    selectedData: [],
    user: null,
    message: null,
  },
  (builder) => {
    builder
      .addCase(SELECT_DATA_REQUEST, (state) => {
        state.loading = true;
        state.selectedData = [];
      })
      .addCase(SELECT_DATA_SUCCESS, (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user;
      })
      .addCase(SELECT_DATA_FAILURE, (state, action) => {
        state.loading = false;
        state.selectedData = [];
        state.message = action.payload.message;
      });
  }
);
