# Exchange Rate Calendar Picker

## Overview

This React TypeScript application allows users to select a start date and an end date using two calendars. The selected date range is then used to fetch the exchange rate between Egyptian Pounds (EGP) and Canadian Dollars (CAD) from an external API. Additionally, the application provides predefined date ranges for this year, this month, and this week.

## Features

- **Date Range Selection:** Users can pick a start date and an end date using the provided calendars.
- **Exchange Rate Retrieval:** The selected date range is sent to an API to fetch the exchange rate between EGP and CAD.
- **Named Ranges:** Users can quickly select predefined date ranges for this year, this month, and this week.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohanadfarid/Exchange_Rate_Date_Picker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Exchange_Rate_Date_Picker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to http://localhost:5173/.

3. Use the calendar interface to select a start date and an end date.

4. Alternatively, use the named ranges buttons to select predefined date ranges.

5. Exchange rates for the selected date range will be displayed.

## Configuration

- Update the API access_key in src/config.ts to add your key.

## Dependencies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [scss](https://sass-lang.com/)
- [Exchange Rate API](https://exchangerate.host/#/docs)
- [date-fns](https://date-fns.org/) - For date manipulation and formatting.

## Acknowledgments

- Exchange rate data is retrieved from [Exchange Rate API].

- date-fns for providing date manipulation and formatting functionality.

## Areas of Improvement

- **State Management :** Consider implementing state management using tools like React Context or Redux to avoid prop drilling and improve overall application structure.

- **Pagination in Exchange Rate Table :** Implement pagination in the exchange rate table to handle large datasets more efficiently.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
