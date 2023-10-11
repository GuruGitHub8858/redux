import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from '../reduxprocess/counterSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import './css/Counter.css'; // You can remove this if it's not used

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;
  const subValue = Number(decrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    setDecrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <Typography variant="h4">
        {count}
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          style={{ background: 'linear-gradient(to bottom, #007bff, #0056b3)' }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ background: 'linear-gradient(to bottom, #dc3545, #bd2130)' }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Box>
      <Box>
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
      <Box>
        <Button
          variant="contained"
          color="primary"
          style={{ background: 'linear-gradient(to bottom, #007bff, #0056b3)' }}
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={resetAll}
        >
          Reset All
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ background: 'linear-gradient(to bottom, #dc3545, #bd2130)' }}
          onClick={() => dispatch(decrementByAmount(subValue))}
        >
          Reduce Amount
        </Button>
      </Box>
    </section>
  );
};

export default Counter;
