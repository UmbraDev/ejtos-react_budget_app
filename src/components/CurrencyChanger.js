import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyChanger = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };
    return (
        
        <div className=''>
            <span className='alert alert-success'>
            Currency
               <select className='alert' value={currency} onChange={e => changeCurrency(e.target.value)}>
                    <option style={{backgroundColor:"#d4edda"}} value="$">$ Dollar</option>
                    <option style={{backgroundColor:"#d4edda"}} value="£">£ Pound</option>
                    <option style={{backgroundColor:"#d4edda"}} value="€">€ Euro</option>
                    <option style={{backgroundColor:"#d4edda"}} value="₹">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};
export default CurrencyChanger;