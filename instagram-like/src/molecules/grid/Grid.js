import React from 'react';
// import PropTypes from 'prop-types';
import Image from '../../atoms/image'
import styled from 'styled-components';

const GridDiv = styled.div`
    display         : flex;
    flex-wrap       : wrap;
    justify-content : center;
`;

const Grid = (props) => {
    return (
        <GridDiv>
        {
          props.images.map(img => {
            return (
              <a onClick={() => props.onClick(img)} key={img}>
                <Image src={img}/>
              </a>
            );
          })
        }
       </GridDiv>
    );
}

export default Grid;