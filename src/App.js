import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios"
import { useEffect, useState} from "react"
import Footer from './component/Footer';
import Currency from './component/Currency';
import Exchange from './component/Exchange';
import WeBuy from './component/WeBuy';
import WeSell from './component/WeSell';


function App() {

    const symbols = ["CAD","IDR ","CHF","EUR","GBP"]
    const API_URL = `https://api.currencyfreaks.com/latest?apikey=${process.env.REACT_APP_KEY}&symbols=${symbols}`
    

    const [based, setBased] = useState()
    const [currency, setCurrency] = useState([])
    const [exchange, setExchange] = useState([])


    useEffect(() => {
        axios.get(`${API_URL}`)
        .then((Response) => {
            setBased(Response.data.base)
            setCurrency(Response.data.rates)
            setExchange(Object.values(Response.data.rates))
          
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

   const weBuy = (value) => {
      return value + (value * 5 / 100)
   }

   const weSell = (value) => {
    return value - (value * 5 / 100)
   }

  return (
    <div className="App">
      
      <div className='d-flex justify-content-center p-5'>

      <div className='px-5'>
        <div className='pb-4'>Currency</div>
        {Object.keys(currency).map((key) => 
        <Currency name = {key}/> )}
      </div>

      <div className='px-5'>
        <div className='pb-4'>We Buy</div>
        {exchange.map((values) => 
        <WeBuy value = {weBuy(values)}/> )}
      </div>

      <div className='px-5'>
        <div  className='pb-4'>Exchange Rate</div>
        {exchange.map((values) => 
        <Exchange value = {values}/>)}
      </div>

      <div className='px-5'>
        <div className='pb-4'>We Sell</div>
        {exchange.map((values) => 
        <WeSell value = {weSell(values)}/> )}
      </div>

      </div>
      <Footer base = {based}/>
    </div>
  );
}

export default App;
