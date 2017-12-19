import React,{ Component } from 'react'


class Player extends React.Component {

  state = {
    obj : this.props.player,
    winner: this.props.winner
  };

  render(){
    return(
      <div className="col">
        <h3>Player Two</h3>{ this.state.winner && <h3 className="text-warning">WINNER</h3>}
        <img src={this.state.obj.avatar_url} />
        <h4>{this.state.obj.login}</h4>
      </div>
    )
  }
}


export default Player;
