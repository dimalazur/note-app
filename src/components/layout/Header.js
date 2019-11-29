import React from 'react';
import injectSheet from 'react-jss';

const Header = ({ classes, pageTitle }) => (
  <div className={classes.header}>
    <div className={classes.pageTitle}>
      {pageTitle}
    </div>
  </div>
);

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    backgroundColor: '#F9F9F9',
    padding: '0 70px',
    boxShadow: '0 4px 8px 0 rgba(115,107,107,0.2)',
  },
  pageTitle: {
    color: '#6C757C',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '36px',
  },
};

export default injectSheet(styles)(Header);
