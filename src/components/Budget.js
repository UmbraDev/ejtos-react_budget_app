import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,currency, dispatch, remaining } = useContext(AppContext);
    const [budget1, setBudget] = useState(budget);
    const limit = 20000;

    const budgetChange = (budget1) => {
        if(budget1 > limit) {
            alert("The value cannot exceed limit "+currency+limit);
            setBudget(budget);
            return;
        }else if (budget1 < (budget-remaining)){
            alert("The value cannot be lower than the spending "+currency+(budget-remaining));
            setBudget(budget);
            return;
        }else{
            dispatch({
                type: 'SET_BUDGET',
                payload: budget1,
            });
            setBudget(budget1);
    
        }
    };  
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget1}
                        style={{ marginLeft: '0rem' , size: 10}}
                        onChange={(event) => budgetChange(event.target.value)}>
                        </input></span>
        </div>
    );
};
export default Budget;