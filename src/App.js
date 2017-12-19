import React,{ Component } from 'react'
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './components/Home'
import Battle from './components/Battle'
import Popular from './components/Popular'
import Results from './components/Results'
import './App.css'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <ul className="navbar">
          <li><NavLink  to="/" >Home</NavLink></li>
          <li><NavLink to="/battle" activeClassName="selected">Battle</NavLink></li>
          <li><NavLink to="/popular" activeClassName="selected">Popular</NavLink></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/battle" component={Battle}/>
        <Route path="/battle/results" component={Results}/>
        <Route path="/popular" component={Popular}/>

      </div>
      </BrowserRouter>

    )
  }



}
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )


// const Topic = ({ match }) => (
//   <div>
//     <h2>Topic</h2>
//   </div>
// )


export default App;
