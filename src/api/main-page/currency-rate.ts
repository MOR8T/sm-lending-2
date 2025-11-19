import { CurrencyRateT } from "@/types/main-page/ui/types";

export const app_url = process.env.NEXT_PUBLIC_API_URL;

export const getCurrencyRate = async (): Promise<CurrencyRateT | null> => {
  try {
    const response = await fetch(
      `${app_url}currency_rate/v1/get_latest_currency_rates/`
    );
    const data: CurrencyRateT = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
