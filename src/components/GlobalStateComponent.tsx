import * as React from 'react';
import { connect } from 'react-redux';

import * as sample from '../reducer/sample';

interface Props {
  text: string;
  setText(arg): void;
}

interface State {
}

class GlobalStateComponent extends React.Component<Props, State> {
  handleChange (event) {
    this.props.setText(event.target.value);
  }
  render () {
    return (
      <div>
        <input type='text' value={this.props.text} onChange={this.handleChange.bind(this)} />
        <br />
        your text: {this.props.text}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.sample.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setText: (arg) => dispatch(sample.setText(arg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStateComponent);
