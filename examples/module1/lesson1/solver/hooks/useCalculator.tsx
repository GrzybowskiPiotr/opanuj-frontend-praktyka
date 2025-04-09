import { useEffect, useState } from 'react';
import { addFn } from '../utils/baseCalculationsFn/addFn';
import { multiplicationFn } from '../utils/baseCalculationsFn/multiplicationFn';
import { subtractionFn } from '../utils/baseCalculationsFn/subtractionFn';
import { divideFn } from '../utils/baseCalculationsFn/divideFn';

export type job = 'add' | 'subtract' | 'multiply' | 'divide' | '';

export function useCalculator(
  calculationJob: job,
  firstNumber: number,
  secondNumber: number
) {
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const validFirstNumber = isNaN(firstNumber) ? 0 : firstNumber;
    const validSecondNumber = isNaN(secondNumber) ? 0 : secondNumber;

    switch (calculationJob) {
      case 'add':
        setResult(addFn(validFirstNumber, validSecondNumber));
        break;
      case 'subtract':
        setResult(subtractionFn(validFirstNumber, validSecondNumber));
        break;
      case 'multiply':
        setResult(multiplicationFn(validFirstNumber, validSecondNumber));
        break;
      case 'divide':
        if (validSecondNumber === 0) {
          setError('Cannot divide by zero');
          return;
        }
        setError('');
        setResult(divideFn(validFirstNumber, validSecondNumber));
        break;
      default:
        setResult(0);
    }
  }, [calculationJob, firstNumber, secondNumber]);

  return { result, error };
}
