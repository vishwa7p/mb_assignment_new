import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import Admin from './containers/Admin/Admin';
import User from './containers/User/User'
import NavigationItems from'./components/NavigationItems/NavigationItems'
class App extends Component {
  compone
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavigationItems />
        </header>
  <Switch>
 <Route path='/' exact component={SignIn} />
 <Route path='/SignUp' component={SignUp} />
 <Route path='/Admin' component={Admin} />
 <Route path='/User' component={User} />
{/* <Route path='/BarChart' component={BarChart} /> */}
 </Switch>
      </div>
    );
  }
}

export default App;
