import React from 'react';
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
          <div className="heading">
            <h1>Github User Card</h1>
            </div>
          <div className="user-container">
          <UserCard user={this.state.user} />
          </div>
          <br />
          <div className="follower-heading">
          <h1>Followers</h1>
          </div>
          <div className="follower-container">
          <FollowerCard followers={this.state.followers} />
          </div>        
        </div>
      )
    }
}

export default App;