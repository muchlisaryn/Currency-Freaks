export default function Footer ({base}) {
    return (
        <div className="d-flex justify-content-center">
           <div>
           <div>Rates are based from 1 {base}</div>
           <div>This application uses API from https://api.currencyfreaks.com</div>
           </div>
        </div>
    )
}