import styles from "..//App.Modules.css";

const CurrancyItem = ({ currancySymbol, fxRate, ratesBase }) => {
  return (
    <div className={styles.card}>
      <strong>
        {currancySymbol}/{ratesBase}
      </strong>
      <span className={styles.rate}>{fxRate}</span>
    </div>
  );
};

export default CurrancyItem;
