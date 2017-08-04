import React, { Component } from 'react';
import { imagesData } from './data/data';

import Image from './atoms/image';
import Grid from './molecules/grid';
import UserInfo from './molecules/userInfo';
import Modal from './organisms/modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: imagesData,
      modalOpen: false,
      selectedImage: null,
      selectedIndex: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  toggleModal(selectedImage) {
    const state = this.state.modalOpen;
    const index = this.state.images.indexOf(selectedImage);
    this.setState({ modalOpen: !state, selectedImage, selectedIndex: index });
  }

  next() {
    const next = this.state.selectedIndex === this.state.images.length ? 0 : (this.state.selectedIndex + 1);
    this.setState({selectedIndex: next, selectedImage: this.state.images[next] })
  }

  previous() {
    const previous = this.state.selectedIndex === 0 ? (this.state.images.length -1) : (this.state.selectedIndex - 1);
    this.setState({selectedIndex: previous, selectedImage: this.state.images[previous] })
  }

  render() {
    const { modalOpen, images, selectedIndex } = this.state;
    return (
      <div>
        <Modal
          show={modalOpen}
          onClose={this.toggleModal}
          next={this.next}
          previous={this.previous}>
          <div style={{backgroundColor: 'white',  display: '-webkit-flex', flexDirection  : 'row'}}>
            <Image src={images[selectedIndex]} />
            <div style={{height: '100%'}}>
              <UserInfo img={images[selectedIndex]} />
            </div>
          </div>
        </Modal>
        <Grid images= {images} onClick={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
