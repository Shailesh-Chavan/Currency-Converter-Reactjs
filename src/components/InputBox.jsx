import React, {useEffect, useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency="usd",
    onCurrencyChange,
    currencyList = [],

    
    className = "",
    }) 
{

    const amountInputId =useId()


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor='amountInputId'  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id='amountInputId'
                    className="outline-none border border-gray-300 rounded px-2 w-full bg-transparent py-1.5"
                    type="text"
                    value={amount}
                    placeholder="Amount"
                    min='0'
                    max='30'
                    onChange={(e) => {
                        let val = e.target.value;
                        val = val.replace(/[^0-9]/g, "");
                        return (
                            onAmountChange && onAmountChange(val)
                        ) 
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {currencyList.map((currency) => (
                                <option id={currency} value={currency}>
                                    {currency.toUpperCase()}
                                </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
