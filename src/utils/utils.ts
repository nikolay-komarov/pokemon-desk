const toCapitalizeFirstLetter = (inputStr: string): string =>
  inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase();

// eslint-disable-next-line import/prefer-default-export
export { toCapitalizeFirstLetter };
