import './App.styl';

import * as React from 'react';
import { connect } from 'react-redux';

import * as injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import GlobalStateComponent from './GlobalStateComponent';
import LocalStateComponent from './LocalStateComponent';

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  render () {
    return (
      <div className='app-cmpt'>
        xi haga:
        <GlobalStateComponent />
        <br /><br /><br />
        Textfield component using local state:
        <LocalStateComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
