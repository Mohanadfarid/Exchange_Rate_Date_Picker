import { DateState } from "./components/Date picker/DatePicker";
import { ACCESS_KEY, BASE_URL, END_POINT } from "./config";

// Define a TypeScript interface for the expected response structure
type ApiResponse = {
  success: boolean;
  terms: string;
  privacy: string;
  timeframe: boolean;
  start_date: string;
  end_date: string;
  source: string;
  quotes: {
    [date: string]: {
      [currency: string]: number;
    };
  };
};

export async function fetchExchangeData(
  startDate: DateState,
  endDate: DateState
): Promise<ApiResponse[]> {
  const startDateApiFormat = `${startDate.year}-${startDate.month}-${startDate.day}`;
  const endDateApiFormat = `${endDate.year}-${endDate.month}-${endDate.day}`;

  const urlApiFormat = `${BASE_URL}/${END_POINT}?access_key=${ACCESS_KEY}&currencies=EGP,CAD&start_date=${startDateApiFormat}&end_date=${endDateApiFormat}`;

  const response = await fetch(urlApiFormat);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: ApiResponse[] = await response.json();
  return data;
}
