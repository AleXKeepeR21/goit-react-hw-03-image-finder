import React, { Component } from 'react';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <button type="button" onClick={this.toggleModal}>
          open
        </button>

        {showModal && (
          <Modal>
            <h1>hello</h1>
            <p>this is text</p>
            <button type="button" onClick={this.toggleModal}>
              cloce
            </button>

            {/* <img src={largeImageURL} alt="" /> */}
          </Modal>
          // {showModal && (
          //   <Modal onClose={this.toggleModal}>
          //     {/* <img src={largeImageURL} alt="" /> */}
          //   </Modal>
        )}
      </div>
    );
  }
}
