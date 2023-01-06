import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              smallImg={image.webformatURL}
              largeImg={image.largeImageURL}
              alt={image.tags}
              openModal={openModal}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

// export class ImageGallery extends Component {
//   render() {
//     return <ul className={css.imageGallery}>{this.props.children}</ul>;
//   }
// }

// ImageGallery.propTypes = {
//   children: PropTypes.array,
// };

// export const ImageGallery = ({
//   images,
//   //   handleModalImage,
//   //   handleModalAlt,
//   showModal,
// }) => {
//   return (
//     <>
//       <ul className={css.ImageGallery}>
//         <ImageGalleryItem
//           images={images}
//           //   handleModalImage={handleModalImage}
//           //   handleModalAlt={handleModalAlt}
//           showModal={showModal}
//         />
//       </ul>
//     </>
//   );
// };
