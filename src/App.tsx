import "./App.scss";
import DatePicker from "./components/Date picker/DatePicker";
import ExchangeTable, {
  ExchangeRow,
} from "./components/Exchange table/ExchangeTable";
function App() {
  // to be deleted when acctual data come from the api
  const exchangeRowsDataPlaceHolder: ExchangeRow[] = [
    { date: "03/09/2022", egp: 19.99, cad: 0.79 },
    { date: "04/09/2022", egp: 18.79, cad: 0.89 },
    { date: "05/09/2022", egp: 19.34, cad: 0.98 },
  ];

  return (
    <>
      <DatePicker />
      <ExchangeTable exchangeRows={exchangeRowsDataPlaceHolder} />
    </>
  );
}

export default App;
