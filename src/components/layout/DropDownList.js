import React, { Component } from 'react';

import Arrow from '../../assets/icons/ArrowDown.svg';

class DropDownList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  render() {
    const { show } = this.state;
    const { classes, title } = this.props;

    return (
      <div>
        <div className={classes.header}>
          <div className={classes.title}>
            {title}
          </div>
          <div className={classes.btn}>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className={classes.dropDown}>

        </div>
      </div>
    );
  }
}

export default DropDownList;
