import React from 'react';

const Image = (props) => {
    return (
        <figure>
            <img src={props.src} alt="" />
        </figure>
    );
}

export default Image;