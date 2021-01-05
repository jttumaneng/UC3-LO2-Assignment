var books = document.querySelectorAll('#book-list li,name');

//change text content of an element
Array.from(books).forEach(function(book) {
    book.textContent += '(book title)';
});

//append HTML content
const bookList = document.querySelector("#book-list");
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';

//Nodes
const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

//DOM Traversal
const bookList2 = document.querySelector('#book-list');

console.log('the parent node is:', bookList2.parentNode);
console.log('the parent element is:', bookList2.parentElement.parentElement);

console.log(bookList.childNodes);

//DOM Traversal Sibling
const bookList3 = document.querySelector('#book-list');
console.log('book-list next sibling is: ', bookList3.nextSibling);
console.log('book-list next element sibling is: ', bookList3.nextElementSibling);

console.log('book-list previous sibling is: ', bookList3.previousSibling);
console.log('book-list previous element sibling is: ', bookList3.previousElementSibling);

bookList3.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';