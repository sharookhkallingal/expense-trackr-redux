// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addExpense } from '../redux/expenseSlice';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';

// const ExpenseForm = () => {
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addExpense({ name, amount: parseFloat(amount), date }));
//     setName('');
//     setAmount('');
//     setDate('');
//   };

//   return (
//     <Container component="form" onSubmit={handleSubmit} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3, maxWidth: 400, mb: 4 }}>
//       <Typography variant="h6" gutterBottom>
//         Add Expense
//       </Typography>
//       <TextField
//         label="Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <TextField
//         label="Amount"
//         variant="outlined"
//         type="number"
//         fullWidth
//         margin="normal"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <TextField
//         label="Date"
//         variant="outlined"
//         type="date"
//         fullWidth
//         margin="normal"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         InputLabelProps={{ shrink: true }}
//       />
//       <Box mt={2}>
//         <Button variant="contained" color="primary" type="submit" fullWidth>
//           Add Expense
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default ExpenseForm;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';

const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({ name, amount: parseFloat(amount), date }));
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <Container component="form" onSubmit={handleSubmit} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add Expense
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
              Add Expense
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExpenseForm;
