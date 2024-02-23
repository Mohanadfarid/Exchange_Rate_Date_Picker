import { FunctionComponent } from "react";
import "./exchangeTable.scss";

export type ExchangeRow = {
  date: string;
  egp: number;
  cad: number;
};
interface ExchangeTableProps {
  exchangeRows: ExchangeRow[];
}

const ExchangeTable: FunctionComponent<ExchangeTableProps> = ({
  exchangeRows,
}) => {
  return (
    <table className="Exchange-table">
      <tr>
        <th>Date</th>
        <th>EGP</th>
        <th>CAD</th>
      </tr>
      {exchangeRows.map((exchangeRow) => (
        <tr key={exchangeRow.date}>
          <td>{exchangeRow.date}</td>
          <td>{exchangeRow.egp}</td>
          <td>{exchangeRow.cad}</td>
        </tr>
      ))}
    </table>
  );
};

export default ExchangeTable;
