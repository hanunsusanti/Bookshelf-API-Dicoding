const {
  addBookHandler,
  getAllBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

// MENYIMPAN BUKU
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // MENAMPILKAN SELURUH BUKU
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },

  // MENAMPILKAN DETAIL BUKU BERDSARKAN ID NYA
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },

  // MENGUBAH DATA BUKU BERDASARKAN ID NYA
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },

  // MENGHAPUS BUKU BERDASARKAN ID NYA
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
