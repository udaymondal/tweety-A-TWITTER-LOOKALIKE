import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


const Tweet = (props) => {
    const { text, author, date } = props;
    return (
        <div>
            <Card style={{ width: '50rem', margin: 'auto', marginBottom:'30px' }}>
                <Card.Body>
                    <Card.Title>{author}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tweet;