import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { Header } from '../layout';
import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteCreate from './NoteCreate';

import { notesConstants } from '../../_constants';

class Notes extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { FETCH_NOTES_REQUEST } = notesConstants;

    dispatch({ type: FETCH_NOTES_REQUEST });
  }

  render() {
    const { classes, notes } = this.props;

    return (
      <React.Fragment>
        <Header pageTitle="NOTE APP" />
        <Toolbar />
        <div className={classes.notes}>
          <div className={classes.notesList}>
            <NotesList notes={notes} />
          </div>
          <div className={classes.noteDetail}>
            <NoteCreate />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  notes: {
    display: 'flex',
  },
  notesList: {
    flexGrow: '1',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 12px 0 rgba(71,61,61,0.1)',
  },
  noteDetail: {
    flexGrow: '3',
  },
};

const mapStateToProps = state => ({
  notes: state.notes.data,
});

export default compose(
  injectSheet(styles),
  connect(
    mapStateToProps,
  ),
)(Notes);
