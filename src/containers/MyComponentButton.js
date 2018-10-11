import React, { Component } from 'react';
import { connect } from 'react-redux';
import { command_setFlagOn } from '../store/actions.js';

class MyComponentButton extends Component {

  constructor(props) {
    super(props);
    this.processClick = this.processClick.bind(this);
  }

  processClick() {
    this.props.dispatch(command_setFlagOn());
  }

  render() {
    let showFlag = <h1>no flag</h1>;
    if(this.props.flag) {
      showFlag = <h1>flag!</h1>;
    }

    return (
      <div>
        {showFlag}
        <button onClick={(e)=>{this.processClick(e)}}>click</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    flag : state.storeFlags.flag,
  };
}

export default connect(mapStateToProps)(MyComponentButton);
