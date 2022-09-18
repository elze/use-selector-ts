import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface TicketPhase {
  value: { 
	ticketNumber: number;
	phase: 'toDo' | 'readyForDevelopment' | 'inDevelopment' | 'readyForTesting' | 'inQA' | 'done';
  }
  
  // status: 'idle' | 'loading' | 'failed';
}

const initialState: TicketPhase = {
  value: { 
	ticketNumber: 0,
	phase: 'toDo'
  },
  // status: 'idle',
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changePhase: (state, action: PayloadAction<TicketPhase>) => {
		console.log(`ticketSlice: action.payload.value.phase =  ${action.payload.value.phase}`);
		state.value.phase = action.payload.value.phase;
		console.log(`ticketSlice: state.value.phase =  ${state.value.phase}`);
    },		  		
  },
});

export const { changePhase } = ticketSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectTicket = (state: RootState) => state.ticket.value;

export default ticketSlice.reducer;
