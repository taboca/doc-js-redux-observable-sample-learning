import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyComponentButton extends Component {

  constructor(props) {
    super(props);
    this.processClick = this.processClick.bind(this);
  }

  processClick() {
    alert(this.props.flag);
  }

  render() {
    return (
      <div>
        {this.props.flag}
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
