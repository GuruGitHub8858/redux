import React ,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment , reset ,incrementByAmount ,decrementByAmount} from '../reduxprocess/counterSlice';

import './css/Counter.css'

const Counter = () => {

  const [incrementAmount, setIncremetAmount] = useState(0);
  const[decrementAmount , setDecremetAmount] = useState(0)
  const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch()
  
  const addValue = Number(incrementAmount) || 0;

  const munValue = Number(decrementAmount) || 0;

  const resetAll = () =>
  {
    setIncremetAmount(0);
    setDecremetAmount(0);
    dispatch(reset());
    }
  return (
    <section className="count_section">
    <p className="count">{count}</p>
    <div className="button_container">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div className='input'>
        <p>Input feild</p>
      <input
        type="text"
        value={incrementAmount} 
        onChange={(e)=>setIncremetAmount(e.target.value)}
        />
        <input
          type="text"
          value={decrementAmount}
          onChange={(e) => setDecremetAmount(e.target.value)} />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset All</button>
        <button onClick={() => dispatch(decrementByAmount(munValue))}>Reduce Amount</button>
        
      </div>
  </section>
  )
}

export default Counter