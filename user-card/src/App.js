import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard';



class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/robo-chick")
      .then(res => {
        console.log(res.data);
        this.setState({user: res.data});
      })

      .catch(err => console.log(err));

      axios 
      .get("https://api.github.com/users/robo-chick/followers")
      .then(res => {
        this.setState({followers: res.data});
      })

      .catch(err => console.log(err));
    };

    render() {
      return (
        <div className="App">
          <h1>Github Users</h1>
          <UserCard user={this.state.user} />
          <br />
          <h1 className="followers-heading">Followers</h1>
          <FollowerCard followers={this.state.followers} />
        </div>
      )
    }
}

export default App;