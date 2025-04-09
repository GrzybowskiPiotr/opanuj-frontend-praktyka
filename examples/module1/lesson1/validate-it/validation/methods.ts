export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMetchod = (input: string) => boolean;

const isEven: NumericValidationMethod = (input: number) => input % 2 === 0;

const isGeaterThan = (boundry: number): NumericValidationMethod => {
  return (input: number) => input > boundry;
};

const isLessThan = (boundry: number): NumericValidationMethod => {
  return (input: number) => input < boundry;
};

export const isValidInteger: StringValidationMetchod = (
  value: string
): boolean => {
  return value != '' && Number.isInteger(Number(value));
};

export const NUMBER_VALISATORS: NumericValidationMethod[] = [
  isEven,
  isGeaterThan(0),
  isLessThan(100),
];
