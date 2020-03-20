function calculateValue(value) {
  // Strip everything that isn't a digit or an allowed operator
  const strippedValue = value.replace(/[^-().\d/*+]/g, '');

  let calculatedValue;
  try {
    // eslint-disable-next-line no-eval
    calculatedValue = String(eval(strippedValue));
  } catch (e) {
    // Clear calculatedValue when the calculated value cannot be evaluated
    calculatedValue = '';
  }

  return calculatedValue;
}

export default calculateValue;
