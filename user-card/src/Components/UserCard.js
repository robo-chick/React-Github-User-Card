import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

class UserCard extends React.Component {
    render() {
        return (
            <div>
                <Card inverse>
                    <CardImg top width="50%" src={this.props.user.avatar_url} alt="profile image" />
                    <CardImgOverlay>
                        <CardTitle>{this.props.user.name}</CardTitle>
                            <CardText>{this.props.user.bio}</CardText>
                            <CardText>User Name: {this.props.user.login}</CardText>
                            <CardText>Following: {this.props.user.following}</CardText>
                            <CardText>Followers: {this.props.user.followers}</CardText>
                            <CardText>Public Repos: {this.props.user.public_repos}</CardText>
                    </CardImgOverlay>         
                </Card>            
            </div>
        );
    }
}

export default UserCard;