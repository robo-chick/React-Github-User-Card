import React from 'react';


class FollowerCard extends React.Component {

    render() {
        return (
            <div className="follower-container">
                {this.props.followers.map(follower => 
                    <div>
                        <img width="25%" src={follower.avatar_url} />
                        <p className="login">{follower.login}</p>
                    </div>
                    )}
            </div>
        )
    }
}

export default FollowerCard;