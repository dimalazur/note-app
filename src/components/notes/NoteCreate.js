import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { notesConstants } from '../../_constants';

import NoteCreateForm from './NoteCreateForm';

class NoteCreate extends Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(values) {
    const { dispatch } = this.props;
    const { CREATE_NOTE_REQUEST } = notesConstants;

    console.log('values', values);

    dispatch({ type: CREATE_NOTE_REQUEST, values });
  }

  render() {
    const { classes, isFetchingCreate } = this.props;

    return (
      <div className={classes.noteCreate}>
        <NoteCreateForm
          onSubmit={this.onSubmitHandler}
          isFetching={isFetchingCreate}
        />
      </div>
    );
  }
}

const styles = {
  noteItem: {},
};

const mapStateToProps = state => ({
  isFetchingCreate: state.notes.isFetchingCreate,
});

export default compose(
  connect(
    mapStateToProps,
  ),
  injectSheet(styles),
)(NoteCreate);
