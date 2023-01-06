import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ smallImg, largeImg, alt, openModal }) => {
  return (
    // <GalleryItem onClick={() => openModal(largeImg, alt)}>
    //   <GalleryItemImg src={smallImg} alt={alt} />
    //   </GalleryItem>

    <li
      className={css.imageGalleryItem}
      onClick={() => openModal(largeImg, alt)}
    >
      <img className={css.imageGalleryItemImage} src={smallImg} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

// export const ImageGalleryItem = ({
//   images,
//   index,

//   //   images,
//   //   handleModalImage,
//   //   handleModalAlt,
//   showModal,
// }) => {
//   return (
//     <>
//       {images.map(({ id, webformatURL, tags }) => (
//         <li key={id} className={css.ImageGalleryItem} onClick={showModal}>
//           <img
//             src={webformatURL}
//             alt={tags}
//             onClick={() => {
//               this.props.getIndex(index);
//             }}
//             // onClick={() => {
//             //   handleModalImage(image.largeImageURL);
//             //   handleModalAlt(image.tags);
//             // }}
//           />
//         </li>
//       ))}
//     </>
//   );
// };

// {
//   /* <>
//   {images.map(image => (
//     <li key={image.id} className={css.ImageGalleryItem} onClick={showModal}>
//       <img
//         src={image.webformatURL}
//         alt={image.tags}
//         onClick={() => {
//           this.props.getIndex(index);
//         }}
//              />
//     </li>
//   ))}
// </>; */
// }

// ImageGalleryItem.propTypes = {
//   image: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   getIndex: PropTypes.func,
//   tags: PropTypes.string,
//   index: PropTypes.number,
// };
