import React,{ Component } from 'react'
import Player from './Player.js'
import '../shoelace.css';

const queryString = require('query-string');

class Results extends React.Component {

  calcScore(p){
    return p.followers + p.following + p.public_gists + p.public_repos;
  }



  render(){

    //console.log(this.props);
    const parsed = queryString.parse(this.props.location.search);
    console.log('parsed', JSON.parse(parsed.o1));

    this.state = {
      p1 : JSON.parse(parsed.o1),
      p2 : JSON.parse(parsed.o2),
    };

    let score1 = this.calcScore(this.state.p1);
    let score2 = this.calcScore(this.state.p2);


    return(
      <div className="col">
        <h3>Results</h3>



        <div className="row">
          <Player player={this.state.p1} winner={score1 > score2 ? true : false}/>
          <Player player={this.state.p2} winner={score1 < score2 ? true : false}/>
        </div>

        <div className="row">
          <div className="col">
            <ul>
              <li>Login : { this.state.p1.login }</li>
              <li>Followers : { this.state.p1.followers }</li>
              <li>Following : { this.state.p1.following }</li>
              <li>public_gists : { this.state.p1.public_gists }</li>
              <li>public_repos : { this.state.p1.public_repos }</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Login : { this.state.p1.login }</li>
              <li>Followers : { this.state.p2.followers }</li>
              <li>Following : { this.state.p2.following }</li>
              <li>public_gists : { this.state.p2.public_gists }</li>
              <li>public_repos : { this.state.p2.public_repos }</li>
            </ul>
          </div>
        </div>


        {// <img src={this.state.obj.avatar_url} />
        // <h4>{this.state.obj.login}</h4>
        }
      </div>
    )
  }
}


export default Results;
