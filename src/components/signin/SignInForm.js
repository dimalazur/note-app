import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames/bind';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more';
  }
  return errors;
};

const renderField = ({
  input,
  placeholder,
  type,
  classes,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className={classes.formGroupError}>{error}</span>)}
  </React.Fragment>
);

const stylesField = {
  formGroupError: {
    display: 'block',
    textAlign: 'right',
    color: '#FF7275',
    fontSize: '12px',
    fontWeight: '300',
    lineHeight: '14px',
    paddingTop: '2px',
  },
};

const styledField = injectSheet(stylesField)(renderField);

let SignInForm = ({
  handleSubmit,
  submitting,
  classes,
  isFetching,
  errorSignIn,
}) => (
  <form onSubmit={handleSubmit} className={classes.SignInForm}>
    {errorSignIn && (
      <div className={classes.formErrors}>
        {errorSignIn.errors.map((item, index) => (
          <div key={index} className={classes.errors}>{item}</div>
        ))}
      </div>
    )}
    <div className={classes.formGroup}>
      <Field name="email" component={styledField} type="email" placeholder="Email" />
    </div>
    <div className={classes.formGroup}>
      <Field name="password" component={styledField} type="password" placeholder="Password" />
    </div>
    <div className={classes.footer}>
      <Link to="/auth/sing-up">
        <button className={classes.button} type="button">Sign Up</button>
      </Link>
      <button
        className={classNames(classes.button, classes.buttonSubmite)}
        type="submit"
        disabled={submitting || isFetching}
      >
        Sign In
      </button>
    </div>
  </form>
);

SignInForm = reduxForm({
  form: 'signup',
  validate,
})(SignInForm);

const styles = {
  SignInForm: {
    width: '250px',
  },
  formGroup: {
    marginBottom: '20px',

    '& input': {
      width: '250px',
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '19px',
      padding: '5px 10px',
      outline: 'none',
      border: 'none',
      borderBottom: '1px solid #ccc',

      '&::placeholder': {
        color: '#B5BABD',
      },
    },
    '&:last-child': {
      marginBottom: '0',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '30px',
  },
  button: {
    cursor: 'pointer',
    color: '#403F3F',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '19px',
    padding: '17px',
    borderRadius: '3px',
    border: 'none',
    outline: 'none',
    background: 'none',
  },
  buttonSubmite: {
    color: '#FFFFFF',
    backgroundColor: '#403F3F',
    boxShadow: '0 2px 12px 0 rgba(71,61,61,0.1)',

    '&:disabled': {
      cursor: 'default',
      backgroundColor: '#403f3f9e',
    },
  },
  formErrors: {},
  errors: {
    color: '#FF7275',
    fontSize: '12px',
    fontWeight: '300',
    lineHeight: '14px',
    marginBottom: '10px',
  },
};

export default injectSheet(styles)(SignInForm);
