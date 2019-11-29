import React, { Component } from 'react';
import injectSheet from 'react-jss';

class Toolbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Toolbar}>
        Toolbar
      </div>
    );
  }
}

const styles = {
  Toolbar: {
    height: '64px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
  },
};

export default injectSheet(styles)(Toolbar);
