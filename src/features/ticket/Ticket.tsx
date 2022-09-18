import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {	
  changePhase,
  selectTicket,
  TicketPhase,
} from './ticketSlice';
import styles from './Ticket.module.css';

export function Ticket() {
  const ticket = useAppSelector(selectTicket);
  const dispatch = useAppDispatch();

  const inDevelopment: TicketPhase = { value: { ticketNumber: 1, phase: 'inDevelopment' } };
  
  const options = [
    { label: 'To Do', value: 'toDo' },
    { label: 'Ready for Development', value: 'readyForDevelopment' },
    { label: 'In Development', value: 'inDevelopment' },
	{ label: 'Ready for Testing', value: 'readyForTesting' },
	{ label: 'In QA', value: 'inQA' },
	{ label: 'In Product Owner Review', value: 'inPOReview' }, // 'inPOReview' is not part of the 'phase' type in 'TicketPhase', but Javascript will not throw an error if we try to select this option.
	{ label: 'Done', value: 'done' },
  ];  
  
  const handleChange = (event: any) => {
	console.log(`event.target.value = ${event.target.value}`);
	const ticketPhase: TicketPhase = { value: { ticketNumber: 1, phase: event.target.value } };
	dispatch(changePhase(ticketPhase))
  }

  return (
    <div>
	  <div className={styles.row}>
		<p className={styles.surroundingText}>This ticket is currently in the <span className={styles.value}>{ticket.phase}</span> stage</p>
	  </div>
      <div className={styles.row}>	    
        <p className={styles.paragraph}>Move ticket to </p>
        <select className={styles.dropDownList} value={ticket.phase} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>		
      </div>
    </div>
  );
}
