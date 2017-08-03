import React from 'react';
import styled from 'styled-components';

// const Modal = () => {
//     return (
//       <div className="modal-wrapper" style={styles.modal}>
//         { /* Close Button: invoke callback */ }
//         <span className="glyphicon glyphicon-remove-sign modal-item"
//             onClick={this.props.onClose}></span>
//         { /* Content */ }
//         <div className="modal-item">
//             { this.props.children }
//                 </div>
//       </div>
//     )
// }
class Modal extends React.Component {
  render() {
    const { show, bg, closeModal } = this.props;
    // Custom styles: set visibility and backbround color
    const ModalDivWrapper = styled.div`
        display: ${show ? null : 'none'};
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

    // const styles = {
    //   modal: {
    //     display: (show) ? null : 'none',
    //     backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
    //   }
    // };

    return (
      <ModalDivWrapper onClick={this.props.onClose}>
        {/*<span className="glyphicon glyphicon-remove-sign modal-item"
            onClick={this.props.onClose}></span>*/}

        <div className="modal-item">
            { this.props.children }
        </div>
      </ModalDivWrapper>
    )
  }
}

export default Modal;