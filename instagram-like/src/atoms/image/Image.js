import React from 'react';

const Image = ({ className, src, style }) => {
    return (
        <figure>
            <img className={className} src={src} style={style} alt="" />
        </figure>
    );
}

export default Image;