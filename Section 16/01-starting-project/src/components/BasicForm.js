import useInput from "../hooks/use-input";

const inputValidation = value => value.trim() !== '';

const BasicForm = () => {
  const {
    eneteredValue: firstName,
    valueChangeHandler: firstNameChangeHandler,
    eneteredValueIsValid: firstNameIsValid,
    valueHasError: firstNameHasError,
    inputClasses: firstNameClasses,
    touchInputHandler: firstNameTouched,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(inputValidation);

  const {
    eneteredValue: lastName,
    valueChangeHandler: lastNameChangeHandler,
    eneteredValueIsValid: lastNameIsValid,
    valueHasError: lastNameHasError,
    inputClasses: lastNameClasses,
    touchInputHandler: lastNameTouched,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(inputValidation)

  const {
    eneteredValue: emailName,
    valueChangeHandler: emailChangeHandler,
    eneteredValueIsValid: emailIsValid,
    valueHasError: emailHasError,
    inputClasses: emailClasses,
    touchInputHandler: emailTouched,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(value => value.includes('@'))

  let formValidity = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formValidity = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    firstNameTouched();
    lastNameTouched();
    emailTouched();

    if (!formValidity) {
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(emailName);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && <p className="error-text">This input is invalid!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && <p className="error-text">This input is invalid!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailName}
        />
        {emailHasError && <p className='error-text'>The email adress is incorrect!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formValidity}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
