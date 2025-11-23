import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

type AuthorInfoProps = {
    author: string;
    bio: string;
    topBooks: string[];
};

class AuthorInfo extends Component<AuthorInfoProps> {
    componentDidMount() {
        console.log(`AuthorInfo component mounted for ${this.props.author}`);
    }

    render() {
        const { author, bio, topBooks } = this.props;
        return (
            <Card className="mt-4">
                <Card.Header>
                    <h4>{author}</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{bio}</Card.Text>
                    <h5>Top Books:</h5>
                    <ul>
                        {topBooks.map((book, index) => (
                            <li key={index}>{book}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        );
    }
}

AuthorInfo.propTypes = {
    author: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    topBooks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AuthorInfo;
