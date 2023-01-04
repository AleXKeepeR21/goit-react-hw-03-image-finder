export default async function fetchImage(value, page = 1) {
  const apiUrl = 'https://pixabay.com/api/';
  const apiKey = '31213831-079e96808e6f65bd38889e682';

  return await fetch(`${apiUrl}?key=${apiKey}&q=${value}&image_type=photo&orientation=horizontal&
    safesearch=true&page=${page}&per_page=12`)
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .then(images => ({ images: images.hits }))
    .catch(error => {
      console.error(error);
    });
}

// export default function fetchImage() {
//   const apiUrl = 'https://pixabay.com/api/';
//   const apiKey = '31213831-079e96808e6f65bd38889e682';

//   return fetch(`https://pixabay.com/api/?key=31213831-079e96808e6f65bd38889e682&q=cat&image_type=photo&orientation=horizontal&
//       safesearch=true&page=${page}&per_page=12`)
//     .then(images => this.SetState({ images }))
//     .then(console.log);
// }
