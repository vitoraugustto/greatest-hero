export const addTestId = (testId?: string) => {
  return {
    'data-testid': testId,
  };
};

export const percentage = (partialValue: number, totalValue: number) =>
  (100 * partialValue) / totalValue;
