import React, { Component } from 'react';
import SearchBar from './SearchBar/Searchbar';
import Modal from './Modal/Modal';
import fetchImage from './FetchImage/FetchImage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    // index: null,
    page: 1,
    loading: false,
    showModal: false,
    // error: null,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(`https://pixabay.com/api/?key=31213831-079e96808e6f65bd38889e682&q=cat&image_type=photo&orientation=horizontal&
  //     safesearch=true&page=1&per_page=12`)
  //     .then(res => res.json())
  //     .then(images => this.setState({ images: images.hits }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  // async componentDidUpdate(prevProps, prevState) {
  //   try {
  //     if (prevState.query !== this.state.query) {
  //       this.setState({ loading: true });

  //       const response = fetchImage(this.state.query);
  //       const { hits, totalHits } = response;

  //       this.setState({
  //         images: [...this.state.images, ...hits],
  //         totalHits,
  //         loading: false,
  //       });
  //     }
  //   } catch (error) {
  //     toast.error('Something went wrong, please try again');
  //     this.setState({ loading: false });
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true });

      const data = fetchImage(this.state.query, this.state.page);
      data
        .then(response => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          return new Error('Image not found.Try again');
        })
        .then(images => this.setState({ images: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
          this.setState(prevState => ({ page: prevState.page + 1 }));
        });
    }
  }

  //   const data = fetchImage(this.state.query, this.state.page)
  // .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         return new Error('Image not found.Try again');
  //       })
  //         .then(images => this.setState({ images: images.hits }))
  //         .catch(error => this.setState({ error }))
  //         .finally(() => {
  //           this.setState({ loading: false });
  //           this.setState(prevState => ({ page: prevState.page + 1 }));
  //         });

  handleFormSubmit = query => {
    if (this.state.query === query) {
      toast.error('You enter the same word!🦄 Enter new one!', {
        theme: 'colored',
      });
    }
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };
  // handleFormSubmit = query => {
  //   this.setState({ query });
  //   this.setState({ page: 1 });
  // };

  getIndex = index => {
    this.setState({ index });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal, loading, images } = this.state;
    return (
      <div className={css.App}>
        {/* {error && alert(`{error.massage}`)} */}
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery openModal={this.toggleModal} images={images} />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          theme="colored"
          // transition="flip"
        />
        {loading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ justifycontent: 'center', margin: 'auto' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <img src={largeImageURL} alt="" /> */}
          </Modal>
        )}
      </div>
    );
  }
}
