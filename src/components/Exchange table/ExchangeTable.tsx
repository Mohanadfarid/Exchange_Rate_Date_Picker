import { FunctionComponent, useEffect, useState } from "react";
import "./exchangeTable.scss";
import { DateState } from "../../App";
import { fetchExchangeData } from "../../API";

interface ExchangeTableProps {
  startDate: DateState;
  endDate: DateState;
}

interface ExchangeDateType {
  [date: string]: {
    USDEGP: number;
    USDCAD: number;
  };
}

const ExchangeTable: FunctionComponent<ExchangeTableProps> = ({
  startDate,
  endDate,
}) => {
  useEffect(() => {
    const isDatesNotEqual =
      JSON.stringify(startDate) !== JSON.stringify(endDate);

    //fetching the data when there is a valid range
    if (isDatesNotEqual) {
      setHideTable(false);
      fetchExchangeData(startDate, endDate)
        .then((data) => {
          console.log("Fetched data:", data);
          setExchangeDate(data.quotes);
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        });
    } else {
      setHideTable(true);
    }

    return () => {
      setError(null);
    };
  }, [startDate, endDate]);

  const [ExchangeDate, setExchangeDate] = useState<null | ExchangeDateType>(
    null
  );
  const [hideTable, setHideTable] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  return (
    <table className={`Exchange-table ${hideTable && "hide-table"}`}>
      <thead>
        <tr>
          <th>Date</th>
          <th>EGP</th>
          <th>CAD</th>
        </tr>
      </thead>
      {error ? (
        <tbody>
          <tr className="error">
            <td colSpan={3}>Error! for more info check the console</td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {ExchangeDate &&
            Object.keys(ExchangeDate).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{ExchangeDate[key]["USDEGP"]}</td>
                  <td>{ExchangeDate[key]["USDCAD"]}</td>
                </tr>
              );
            })}
        </tbody>
      )}
    </table>
  );
};

export default ExchangeTable;
