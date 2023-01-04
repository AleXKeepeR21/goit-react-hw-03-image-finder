import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
// import fetchImage  from './FetchImage/FetchImage';

import { toast } from 'react-toastify';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    index: null,
    page: 1,
    loading: false,
    showModal: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(`https://pixabay.com/api/?key=31213831-079e96808e6f65bd38889e682&q=cat&image_type=photo&orientation=horizontal&
  //     safesearch=true&page=1&per_page=12`)
  //     .then(res => res.json())
  //     .then(images => this.setState({ images: images.hits }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  handleFormSubmit = query => {
    if (this.state.query === query) {
      toast.error('You enter the same word!!! Enter new one!!!', {
        theme: 'colored',
      });
    }
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.handleFormSubmit} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <img src={largeImageURL} alt="" /> */}
          </Modal>
        )}
      </div>
    );
  }
}
