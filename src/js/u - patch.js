const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

// updateBookById({ title: 'Why NODEJS' }, 19);

// updateBookById({ rating: 7 }, 8);

// updateBookById({ rating: 5, author: 'Josef Jankulowski' }, 17);
