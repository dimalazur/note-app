import React, { Component } from 'react';
import injectSheet from 'react-jss';

class NoteItem extends Component {
  render() {
    const { classes, note } = this.props;

    return (
      <div className={classes.noteItem}>
        <div className={classes.title}>
          {note.title}
        </div>
        <div className={classes.description}>
          {note.text}
        </div>
      </div>
    );
  }
}

const styles = {
  noteItem: {
    
  },
  title: {},
  description: {},
};

export default injectSheet(styles)(NoteItem);
