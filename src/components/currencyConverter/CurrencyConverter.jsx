/* import React ,{useState , useEffect} from 'react'


const CurrencyConverter = () => {
    const [basePrice, setBasePrice] = useState(20);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [convertedPrice, setConvertedPrice] = useState(basePrice);
    const [exchangeRate, setExchangeRate] = useState(1);
    const apiKey ='aff30a7a56a931be77af1c25';
    const apiEndPoint = 'https://v6.exchangerate-api.com/v6/aff30a7a56a931be77af1c25/latest/USD'
    
    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(apiEndPoint);
                const data = await response.json();
                const rate = data.rates[selectedCurrency];
                setExchangeRate(rate);
                const convertedPrice = basePrice * rate;

                setConvertedPrice(convertedPrice.toFixed(2))
            } catch (error) {
                console.error(error);
            }
        };
        fetchExchangeRate();
    }, [selectedCurrency, basePrice] );

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };
  return (
    <div>
        <h2>Currency Converter</h2>
        <input type="number" value={basePrice} onChange={(event) => setBasePrice(event.target.value)} />
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="NGN">NGN</option>
            <option value="GBP">GBP</option>
        </select>
    </div>
  )
}

export default CurrencyConverter */