import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { Switch, Route }    from 'react-router-dom';

import configureStore       from './state/store';
import { Loader,
         Header,
         Calendar,
         Countries }        from './components';
         
import './App.scss';
import 'bulma/bulma.sass';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }
  
  componentDidMount() {
    this.setState({isLoading: false})
  }  

  render() {
    const store = configureStore();

  return ( this.state.isLoading ? <Loader /> : (
    <>
      <Provider store={store}>
        <Header />
        <div className="tabs-content-style">
          <Switch>
            <Route path="/calendar" component={Calendar} />
            <Route path="/countries" component={Countries} />
          </Switch>
        </div>
      </Provider>
    </>)
  );
  }
}

export default App;
