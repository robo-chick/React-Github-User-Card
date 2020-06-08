import React from 'react';


class FollowerCard extends React.Component {

    render() {
        return (
            <div className="follower-card-container">
                {this.props.followers.map(follower => 
                    <div className="follower-card">
                        <img width="75%" src={follower.avatar_url} />
                        <p className="login">Username: {follower.login}</p>
                    </div>
                    )}
            </div>
        )
    }
}

export default FollowerCard;