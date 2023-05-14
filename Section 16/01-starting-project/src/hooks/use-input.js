import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
}

const inputReducerFunction = (state, action) => {
  if (action.type === 'VALUE') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return initialInputState;
  }
  return initialInputState;
};

const useInput = valueCheck => {
  const [eneteredValue, dispach] = useReducer(inputReducerFunction, initialInputState);
  console.log(eneteredValue);

  const eneteredValueIsValid = valueCheck(eneteredValue.value);
  const valueHasError = !eneteredValueIsValid && eneteredValue.isTouched

  const valueChangeHandler = event => {
    dispach({ type: 'VALUE', value: event.target.value })
  };

  const touchInputHandler = () => {
    dispach({ type: 'BLUR' })
  };

  const valueBlurHandler = () => {
    dispach({ type: 'BLUR' })
  };

  const reset = () => {
    dispach({ type: 'RESET' });
  };

  const inputClasses = valueHasError ? 'form-control invalid' : 'form-control';

  return {
    eneteredValue: eneteredValue.value,
    eneteredValueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    valueHasError,
    inputClasses,
    touchInputHandler,
    reset,
  };
};

export default useInput;