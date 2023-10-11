import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount, decrementByAmount } from '../reduxprocess/counterSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h4">
        {count}
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
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
          size="small"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Typography variant="subtitle1">Decrement Amount:</Typography>
        <TextField
          type="number"
          variant="outlined"
          size="small"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </Button>
        <Button
          variant="contained"
          onClick={resetAll}
        >
          Reset All
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(decrementByAmount(subValue))}
        >
          Reduce Amount
        </Button>
      </Box>
    </div>
  );
};

export default Counter;
