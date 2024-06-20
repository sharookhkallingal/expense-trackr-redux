import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://redux-expensive-tracker-server.onrender.com/expenses';

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addExpense = createAsyncThunk('expenses/addExpense', async (expense) => {
  const response = await axios.post(API_URL, expense);
  return response.data;
});

export const deleteExpense = createAsyncThunk('expenses/deleteExpense', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updateExpense = createAsyncThunk('expenses/updateExpense', async (expense) => {
  const response = await axios.put(`${API_URL}/${expense.id}`, expense);
  return response.data;
});

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.fulfilled, (state, action) => action.payload)
      .addCase(addExpense.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        return state.filter(expense => expense.id !== action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.findIndex(expense => expense.id === action.payload.id);
        state[index] = action.payload;
      });
  }
});

export default expenseSlice.reducer;
