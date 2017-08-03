import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
  render() {
    const { show, bg } = this.props;

    const ModalDivWrapper = styled.div`
        display: ${show ? '-webkit-flex' : 'none'};
        background-color:  ${bg || 'rgba(255, 255, 255, 0.8)'};
        position: fixed;
        width: 100%;
        height: 100%;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: center;
        color: white;
        top: 0;
        left: 0;
    `;

    const ModalDivContent = styled.div`
      align-self: center;
    `;

    return (
      <ModalDivWrapper onClick={this.props.onClose} >
        {/*<span className="glyphicon glyphicon-remove-sign modal-item"
            onClick={this.props.onClose}></span>*/}
        <ModalDivContent>
            { this.props.children }
        </ModalDivContent>
      </ModalDivWrapper>
    )
  }
}

export default Modal;