import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import Player from './Player.js'
import '../App.css'

const API = 'https://api.github.com/users/';
const DEFAULT_QUERY = 'cosydney';

class Battle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id1: '',
      id2: '',
      p1: null,
      p2: null,
    };

    //this.updateInputValue = this.updateInputValue.bind(this);
  }

  getProfile = (id) => {

    var name = this.state.id1;
    if( id === 2)
      name = this.state.id2;

    fetch(API + name)
    .then(function(response) {
      //console.log(response);
      return response.json();
    }).then( json => {
      if(id===1)
        this.setState({p1:json});
      else
        this.setState({p2:json});

      console.log(this.state);
    })
    .catch(function(error) { alert('Oops!'); console.log(error); });
  }

  updateInputValue = (evt, p) => {

    if(p === 2){
      this.setState({
        id2: evt.target.value
      });
    }else{
      this.setState({
        id1: evt.target.value
      });
    }

    console.log(this.state);

  }

  comparePlayers = () => {

    alert('compare');

  }

  render(){

    var battle = false;

    if(this.state.p1 != null && this.state.p2 != null){
      /*  Battle mode */
      return(
        <div className="container">
          <h2>Battle</h2>

          <div className="row">

            <Player player={this.state.p1}/>
            <Player player={this.state.p2}/>

        {/* <div className="col">
              <h3>Player One</h3>
              <img src={this.state.p1.avatar_url} />
              <h4>{this.state.p1.login}</h4>
            </div>

            <div className="col">
              <h3>Player Two</h3>
              <img src={this.state.p2.avatar_url} />
              <h4>{this.state.p2.login}</h4>
            </div>
        */}
          </div>

          <div className="row">
            <div className="col text-center">
              <Link to={{
                pathname: "/battle/results",
                search: "?o1="+ JSON.stringify(this.state.p1)+"&o2="+ JSON.stringify(this.state.p2),
              }}
              className="btn button-large button-warning">Battle</Link>
              {/* <button className="btn button-large button-warning" onClick={ () => this.comparePlayers() }>Battle</button> */}
            </div>
          </div>

        </div>
      )

    }else{

      return(
        <div className="container">
          <h2>Battle</h2>

          <div className="row">

            <div className="col">
              <h3>Player One</h3>
              <label>{this.state.p1 != null ? this.state.p1.login : ''}</label>
              <input type="text" onChange={evt => this.updateInputValue(evt,1)} /><br/>
              <button onClick={ () => this.getProfile(1)} >Submit</button>
            </div>

            <div className="col">
              <h3>Player Two</h3>
              <label>{this.state.p2 != null ? this.state.p2.login : ''}</label>
              <input type="text" onChange={evt => this.updateInputValue(evt,2)} /><br/>
              <button onClick={ () => this.getProfile(2)} >Submit</button>
            </div>

          </div>
        </div>
      )
    }
  }
}

export default Battle;
