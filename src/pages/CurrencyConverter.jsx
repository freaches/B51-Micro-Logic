import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import  axios  from "axios";

const api = import.meta.env.VITE_SOME_KEY;
const BASE_URL = `http://api.freecurrencyapi.com/v1/latest?apikey=${api}`


export function CurrencyCoverter() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)

  useEffect(()=>
  {axios.get(BASE_URL).then((respone)=>{
    const firstCurrency = Object.keys(respone.data)[0]
        setCurrencyOptions([respone.base, ...Object.keys(respone.data)])
        setFromCurrency(respone.base)
        setToCurrency(firstCurrency)
        setExchangeRate(respone.data[firstCurrency])
  })},[])

  useEffect(() => {
    axios.get(BASE_URL)
      .then(respone => {
        const firstCurrency = Object.keys(respone.data)[0]
        setCurrencyOptions([respone.base, ...Object.keys(respone.data)])
        setFromCurrency(respone.base)
        setToCurrency(firstCurrency)
        setExchangeRate(respone.data[firstCurrency])
      })
  }, [])

  return (
    <>
      <BackButton />
      <div className="title">Currency Converter</div>
    </>
  );
}
