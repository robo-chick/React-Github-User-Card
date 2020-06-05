import React from 'react';


class UserCard extends React.Component {

    render() {
        return (
            <div className="user-card">
                <img width="50%" src={this.props.user.avatar_url} />
                <h2>{this.props.user.name}</h2>
                <p className="username">Username:</p>
                <p className="following">Following: {this.props.user.following}</p>
                <p className="followers">Followers: {this.props.user.followers}</p>
                <p className="repos">Public Repos: {this.props.user.public_repos}</p>
            </div>
        )
    }
}

export default UserCard;