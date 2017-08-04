import React from 'react';

const Image = ({ className, src }) => {
    return (
        <figure>
            <img className={className} src={src} alt="" />
        </figure>
    );
}

export default Image;