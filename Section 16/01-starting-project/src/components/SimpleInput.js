import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const {
    hasError: nameInputHasError,
    enteredValue: enteredName,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(value => value.trim() !== '');

  const {
    hasError: emailInputHasError,
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEamil,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissonHandler = event => {
    event.preventDefault();

    nameBlurHandler();
    emailBlurHandler();

    if (!enteredEmailIsValid || !enteredEmailIsValid) {
      return;
    };

    console.log(enteredName);
    console.log(enteredEmail);

    resetName();
    resetEamil();
  };

  const nameInputClass = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissonHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type='text'
          id='name'
          value={enteredName} />
        {nameInputHasError && <p className='error-text'>The name input is invalid!</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type='email'
          id='email'
          value={enteredEmail} />
        {emailInputHasError && <p className='error-text'>The email input is invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
