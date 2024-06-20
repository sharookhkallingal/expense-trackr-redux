import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../redux/expenseSlice';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';

const ExpenseEditForm = ({ expense, onCancel }) => {
  const [name, setName] = useState(expense.name);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExpense({ id: expense.id, name, amount: parseFloat(amount), date }));
    onCancel();
  };

  return (
    <Container component="form" onSubmit={handleSubmit} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Edit Expense
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Amount"
            variant="outlined"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Update Expense
            </Button>
            <Button variant="outlined" color="secondary" onClick={onCancel} fullWidth sx={{ mt: 1 }}>
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExpenseEditForm;
