import { useEffect, useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  
  const [amount, setAmount] = useState("")
  const [convetedAmount, setConvertedAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertBtn, setConvertBtn] = useState(false)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convetedAmount)
    setConvertedAmount(amount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
    setConvertBtn(true)
  }

  useEffect(() =>{
    // setConvertedAmount("")
    setConvertBtn(false)

  }, [amount, from, to])
  
  return (
    <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/4755123/pexels-photo-4755123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From" 
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            currencyList={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency) => setFrom(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convetedAmount}
                            // onAmountChange={(convetedAmount) => setConvertedAmount(convetedAmount)}
                            selectCurrency={to}
                            currencyList={options}
                            onCurrencyChange={(Currency) => setTo(Currency)}   
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg 
                    cursor-pointer" disabled={convertBtn}>
                        Convert {from.toUpperCase()} To {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
