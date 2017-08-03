import React, { Component } from 'react';
import images from './data/images';

import Image from './atoms/image';
import Grid from './molecules/grid';
import Modal from './organisms/modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { modalOpen: false, selectedImage: null};
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(selectedImage) {
    const state = this.state.modalOpen;
    this.setState({ modalOpen: !state, selectedImage });
  }

  render() {
    const { modalOpen, selectedImage } = this.state;
    return (
      <div>
        <Modal bg="#222" show={ modalOpen }
            onClose={ this.toggleModal }>
          <Image src={ selectedImage } />
        </Modal>
        <Grid images= { images } onClick={ this.toggleModal }/>
      </div>
    );
  }
}

export default App;
