import { useGetAllCardsQuery } from '../../Store/Slice/apiSlice';

const useCalculateAmount = () => {
  const { data = [], isLoading, isError } = useGetAllCardsQuery();

  const calculate = (data, currency) => {
    return data
      .filter((card) => card.currency === currency)
      .reduce((prev, curr) => {
        return prev + curr.amount;
      }, 0);
  };

  const balanceUAH = calculate(data, 'UAH');
  const balanceUSD = calculate(data, 'USD');
  const balanceEUR = calculate(data, 'EUR');

  return { balanceUAH, balanceUSD, balanceEUR, isLoading, isError };
};

export default useCalculateAmount;
