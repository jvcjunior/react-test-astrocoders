import React from 'react';
import Image from '../../atoms/image'
import styled from 'styled-components';

const RoudedImg = styled(Image)`
	border-radius : 50%;
    height        : 40px;
    width         : 40px
`;

const UserInfo = (props) => {
    return (
        <RoudedImg src={props.img}/>
    );
}

export default UserInfo;