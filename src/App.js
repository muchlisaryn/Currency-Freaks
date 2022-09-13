import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios"
import { useEffect} from "react"

function App() {

    const API_URL = `https://api.currencyfreaks.com/latest?${process.env.REACT_APP_KEY}`
    
    console.log("KEY ===> ", process.env.REACT_APP_KEY)
    useEffect(() => {
        axios.get(API_URL)
        .then((Response) => {
            console.log("response ==>", Response.data)
        })
    }, [])

    


  return (
    <div className="App">

    </div>
  );
}

export default App;
