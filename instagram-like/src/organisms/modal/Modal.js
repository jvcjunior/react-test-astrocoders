import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/icon';

class Modal extends React.Component {
  render() {
    const { show, bg } = this.props;

    const ModalDivWrapper = styled.div`
      display                 : ${show ? '-webkit-flex' : 'none'};
      background-color        :  ${bg || 'rgba(0, 0, 0, 0.6)'};
      position                : fixed;
      width                   : 100%;
      height                  : 100%;
      flex-direction          : column;
      -webkit-flex-direction  : column;
      justify-content         : center;
      /*color                   : white;*/
      top                     : 0;
      left                    : 0;
    `;

    const ModalDivContent = styled.div`
      align-self      : center;
      display         : -webkit-flex;
      flex-direction  : row;
      justify-content : center;
      align-items     : center;
    `;

    const styles = {
      closeIcon: {
        display   : 'inline',
        position  : 'fixed',
        top       : 10,
        right     : 15,
        fontSize  : 30,
        color     : 'white'
      },
      arrow: {
        fontSize  : 30,
        color     : 'white'
      }
    };

    return (
      <ModalDivWrapper className="modal">
        <Icon name="times" onClick={this.props.onClose} style={styles.closeIcon}/>
        <ModalDivContent>
            <Icon name="chevron-left" onClick={this.props.previous} style={styles.arrow} />
            { this.props.children }
            <Icon name="chevron-right" onClick={this.props.next} style={styles.arrow} />
        </ModalDivContent>
      </ModalDivWrapper>
    )
  }
}

export default Modal;