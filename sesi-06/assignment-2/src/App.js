import * as React from "react";

import styles from "./App.Modules.css";
import { fetchExchangeRates, searchFxRates } from "./assignment/currancy";
import CurrancyItem from "./components/currency.item";

function App() {
  const [rates, setRates] = React.useState(null);
  const [ratesBase, setRatesBase] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(null);

  const onSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    let componentIsMounted = true;

    const getFxData = () => {
      fetchExchangeRates()
        .then((data) => {
          console.log(data);
          if (componentIsMounted) {
            setRates(data.rates);
            setRatesBase(data.base);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getFxData();

    const fetchInterval = setInterval(getFxData, 1000 * 60);
    return () => {
      clearInterval(fetchInterval);
      componentIsMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchResults(searchFxRates(rates, searchTerm));
    } else {
      setSearchResults(rates);
    }
  }, [searchTerm, rates]);

  return (
    <div className={styles.app}>
      <h1>currancy rate</h1>
      <input value={searchTerm} classname={styles.input} placeholder="Search..." onChange={onSearch} />

      {searchResults ? Object.keys(rates).map((key) => <CurrancyItem key={key} currancySymbol={key} fxRate={searchResults[key]} ratesBase={ratesBase} />) : []}
    </div>
  );
}

export default App;
