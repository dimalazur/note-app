import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';

import { Header } from '../layout';
import SignInForm from './SignInForm';

import { authActions } from '../../_actions';

const actionCreators = {
  signIn: authActions.signIn,
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(values) {
    const { actions, history } = this.props;

    actions.signIn(values.email, values.password, history);
  }

  render() {
    const { classes, isFetching, errorSignIn } = this.props;

    return (
      <React.Fragment>
        <Header pageTitle="Sing In" />
        <div className={classes.singUp}>
          <div className={classes.formWrap}>
            <SignInForm
              onSubmit={this.onSubmitHandler}
              isFetching={isFetching}
              errorSignIn={errorSignIn}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  singUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
  },
  formWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '305px',
    width: '413px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
  },
};

const mapStateToProps = state => ({
  isFetching: state.auth.isFetchingSignIn,
  errorSignIn: state.auth.errorSignIn,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default compose(
  injectSheet(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(SignIn);
