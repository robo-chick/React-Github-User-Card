import React from 'react';



class UserCard extends React.Component {

    render() {
        return (   
            <div>
                <div className="user-card">
                <img width="50%" src={this.props.user.avatar_url} />
                <h2>{this.props.user.name}</h2>
                <p className="username">Username: {this.props.user.login}</p>
                <p className="following">Following: {this.props.user.following}</p>
                <p className="followers">Followers: {this.props.user.followers}</p>
                <p className="repos">Public Repos: {this.props.user.public_repos}</p>
            </div>  
            <div className="git-graph">
            <img src="https://grass-graph.moshimo.works/images/robo-chick.png" />
            </div>
            </div>         
            
        )
    }
}

export default UserCard;