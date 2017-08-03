import React, { Component } from 'react';
import './App.css';
import images from './data/images';
import Grid from './molecules/grid';
import Modal from './organisms/modal';

class App extends Component {

  constructor(props) {
    super(props);
    // Init state
    this.state = { modalOpen: false, selectedImage: null};

    // This binding is necessary to make `this` work in the callback
    this.toggleModal = this.toggleModal.bind(this);
  }

  // Toggle Modal visibility
  toggleModal(selectedImage) {
    console.log('AEEEE');
    const state = this.state.modalOpen;
    // Update state: modal visibility and its content
    this.setState({ modalOpen: !state, selectedImage });
  }

  render() {
    const { modalOpen, selectedImage } = this.state;
    return (
      <div>
        <Modal bg="#222" show={ modalOpen }
            onClose={ this.toggleModal }>
          <img src={ selectedImage } alt=""/>
        </Modal>
        <Grid images={images} onClick={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
