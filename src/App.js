import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4, bgcolor: 'background.default' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Expense Tracker
        </Typography>
      </Box>
      <ExpenseForm />
      <ExpenseList />
    </Container>
  );
}

export default App;
