import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0

  },
  reducers: {
    increment: state => {

      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    reset: (state) =>
     {
        state.count = 0
      },
    incrementByAmount: (state, action) => {
      state.count=state.count + action.payload // action =10 => payload  10+=10
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload
    }
  }
})
export const { increment, decrement, incrementByAmount,reset,decrementByAmount } = counterSlice.actions

export default counterSlice.reducer