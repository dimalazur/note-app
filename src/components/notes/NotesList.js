import _ from 'lodash';
import React, { Component } from 'react';

import NoteItem from './NoteItem';

class NotesList extends Component {
  renderNodesList() {
    const { notes } = this.props;
    return _.map(notes, note => (
      <NoteItem note={note} />
    ));
  }

  render() {
    return (
      <div className="notes-list">
        {this.renderNodesList()}
      </div>
    );
  }
}

export default NotesList;
