import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses, deleteExpense } from '../redux/expenseSlice';
import ExpenseEditForm from './ExpenseEditForm';
import { Container, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Grid, Paper, TextField, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expense.amount.toString().includes(searchQuery) ||
    new Date(expense.date).toLocaleDateString().includes(searchQuery)
  );

  return (
    <Container component={Paper} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Expense List
      </Typography>
      <TextField
        label="Search Expenses"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 4 }}
      />
      {editingExpense ? (
        <ExpenseEditForm expense={editingExpense} onCancel={() => setEditingExpense(null)} />
      ) : (
        <List>
          {filteredExpenses.map(expense => (
            <ListItem key={expense.id} divider>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={6}>
                  <ListItemText
                    primary={expense.name}
                    secondary={`₹${expense.amount}   -   ${new Date(expense.date).toLocaleDateString()}`}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(expense)}>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteExpense(expense.id))}>
                      <Delete color="error" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ExpenseList;
