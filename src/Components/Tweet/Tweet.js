import React from 'react';

const Tweet = (props) => {
    const {text, author, date} = props;
    return (
        <div>
            <h3>This is {text.toUpperCase()} component</h3>
            <h6>by {author} on {date}</h6>
        </div>
    );
};

export default Tweet;