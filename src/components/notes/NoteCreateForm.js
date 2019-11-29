import React from 'react';
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
  className,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <input {...input} className={className} placeholder={placeholder} type={type} />
    {touched && (error && <span className={classes.formGroupError}>{error}</span>)}
  </React.Fragment>
);

const renderTextareaField = ({
  input,
  placeholder,
  type,
  classes,
  className,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <textarea {...input} className={className} placeholder={placeholder} type={type} />
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
const styledTextareaField = injectSheet(stylesField)(renderTextareaField);
const styledField = injectSheet(stylesField)(renderField);

let NoteCreateForm = ({
  handleSubmit,
  submitting,
  classes,
  isFetching,
  errorSignIn,
}) => (
  <form onSubmit={handleSubmit} className={classes.NoteCreateForm}>
    {errorSignIn && (
      <div className={classes.formErrors}>
        {errorSignIn.errors.map((item, index) => (
          <div key={index} className={classes.errors}>{item}</div>
        ))}
      </div>
    )}
    <div className={classes.formGroup}>
      <Field
        className={classes.title}
        name="title"
        component={styledField}
        type="text"
        placeholder="Title"
      />
    </div>
    <div className={classes.formGroup}>
      <Field
        className={classes.details}
        name="text"
        component={styledTextareaField}
        type="text"
        placeholder="Details"
      />
    </div>
    <div className={classes.footer}>
      <button
        className={classNames(classes.button, classes.buttonSubmite)}
        type="submit"
        disabled={submitting || isFetching}
      >
        Create Note
      </button>
    </div>
  </form>
);

NoteCreateForm = reduxForm({
  form: 'signup',
  validate,
})(NoteCreateForm);

const styles = {
  NoteCreateForm: {
    padding: '20px 5%',
  },
  formGroup: {
    marginBottom: '20px',

    '& input': {
      width: '100%',
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
    '& textarea': {
      width: '100%',
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
  title: {
    fontSize: '36px!important',
    lineHeight: '42px!important',
  },
  details: {
    fontSize: '24px!important'
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

export default injectSheet(styles)(NoteCreateForm);
