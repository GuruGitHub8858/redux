import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from '../reduxprocess/counterSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

import './css/Counter.css';

const useStyles = makeStyles((theme) => ({
  countSection: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  countText: {
    fontSize: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const classes = useStyles();

  const addValue = Number(incrementAmount) || 0;
  const subValue = Number(decrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    setDecrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className={classes.countSection}>
      <Typography variant="h4" className={classes.countText}>
        {count}
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Box>
      <Box className={classes.inputContainer}>
        <Typography variant="subtitle1">Increment Amount:</Typography>
        <TextField
          type="number"
          variant="outlined"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Typography variant="subtitle1">Decrement Amount:</Typography>
        <TextField
          type="number"
          variant="outlined"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
      </Box>
      <Box className={classes.buttonContainer}>
        <Button variant="contained" color="primary" onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </Button>
        <Button variant="contained" color="default" onClick={resetAll}>
          Reset All
        </Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(decrementByAmount(subValue))}>
          Reduce Amount
        </Button>
      </Box>
    </section>
  );
};

export default Counter;
