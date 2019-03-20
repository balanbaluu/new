import type from '../types';

const  {INCREMENT, DECREMENT} = type;

export const handleIncrement =()=> ({
    type: INCREMENT,
})

export const handleDecrement =()=> ({
    type: DECREMENT,
})
