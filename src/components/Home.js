import React,{ Component } from 'react'


const API = 'https://api.github.com/users/';
const DEFAULT_QUERY = 'cosydney';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatar_url: null,
    };
  }

  render(){
    return(
      <div className="container">
        <h2>Home</h2>
        <img src={this.state.avatar_url} />
        <button onClick={() => this.getProfile('kohaistyle')} >Get picture</button>
      </div>
    )
  }

  getProfile = (name) =>{
    fetch(API + name)
    .then(function(response) {
      //console.log(response);
      return response.json();
    }).then( json => {
      console.log(json);
      this.setState({avatar_url:json.avatar_url});
    })
    .catch(function(error) { console.log(error); });
  }

// https://github.com/axios/axios

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
    .then(function(response) {
      //console.log(response);
      return response.json();
    }).then( json => {
      console.log(json);
      this.setState({avatar_url:json.avatar_url});
    })
    .catch(function(error) { console.log(error); });
  }

}


export default Home;
