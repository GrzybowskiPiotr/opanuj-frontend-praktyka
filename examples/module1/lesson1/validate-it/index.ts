import { NUMBER_VALISATORS } from './validation/methods';
import { validate } from './validation/validator';

function main() {
  const input: HTMLInputElement = document.querySelector('#input')!;
  const validate_btn: HTMLElement = document.querySelector('#validation-btn')!;
  const cleanup_btn: HTMLElement = document.querySelector('#cleanup-btn')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validate_btn.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALISATORS);
    result.innerHTML = validationMessage;
  });

  cleanup_btn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}
main();
// function validator(validationRules: ValidationStrategy[]) {
//   const input = document.getElementById('input') as HTMLInputElement;
//   const validate_btn = document.getElementById(
//     'validation-btn'
//   ) as HTMLButtonElement;
//   const cleanup_btn = document.getElementById(
//     'cleanup-btn'
//   ) as HTMLButtonElement;
//   const result = document.getElementById('result') as HTMLDivElement;

//   input.addEventListener('input', () => {
//     result.innerHTML = '';
//   });

//   validate_btn.addEventListener('click', () => {
//     validationRules.every((rule) => {
//       const value = Number(input.value);
//       const validationResult = rule.validate(value);
//       if (validationResult.isValid) {
//         result.innerHTML = validationResult.message;
//         return validationResult.isValid;
//       } else {
//         result.innerHTML = validationResult.message;
//         return validationResult.isValid;
//       }
//     });
//   });

//   cleanup_btn.addEventListener('click', () => {
//     input.value = '';
//     result.innerHTML = '';
//   });
// }

// validator(validationStrategies);
