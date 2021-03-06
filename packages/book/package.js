Package.describe({
  summary: 'A book'
})

Package.on_use(function (api) {
  api.use('ecmascript')
  api.use(['templating'], 'client')
  api.add_files([
    'lib/client/Library.js',
    'lib/client/book_create.html',
    'lib/client/book_create.js',
    'lib/client/books_proposed.html',
    'lib/client/books_proposed.js',
    'lib/client/books_frozen.html',
    'lib/client/books_frozen.js',
    'lib/client/books_frozen.css',
    'lib/client/book_view.html',
    'lib/client/book_view.css',
    'lib/client/book_view.js',
    'lib/client/adm_book_list.html',
    'lib/client/adm_book_list.js',
    'lib/client/adm_book_edit.html',
    'lib/client/adm_book_edit.js'
  ],
    'client')
  api.add_files('lib/server/server.js', 'server')
  api.add_files('lib/collections/books.js', ['client', 'server'])

  api.export([
    'Library',
    'associateBookToNextKlub',
    'discussedBookWhenPastKlub'
  ], 'client')
  api.export('Books', 'server')
})

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('book');
  api.add_files('lib/client/Library.js', 'client')
  api.mainModule('book_test.js', 'client');
});
