//findAccountById returns the account object when given a particular ID.
/*
1.findAccountById function has an arity of 2, with the parameters of accounts which is expected to be an array of objects and id which is a string.
2.using the higher array function find loop through the accounts array and find the first instance of the accounts id that equals the string id. 
*/
function findAccountById(accounts, id) {
  return accounts.find(account=>account.id === id)
}

// sortAccountsByLastName function returns the list of accounts ordered by last name.
/*
1.sortAccountsByLastName function has the arity of 1, and the parameter (accounts) is expected to be an array of objects.
2.loop through the array using sort convert all last names to lower case and compare first letter. This should return last names in abc order.
*/
function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b)=>a.name.last.toLowerCase() > b.name.last.toLowerCase()?1:-1)
 

}
//getTotalNumberOfBorrows function returns the number of times an account has created a 'borrow' record.
/*
1.getTotalNumberOfBorrows function has the arity of 2, and the parameters account is expected to be an array of objects and books which is expected to be a array of objects.
2.Declare and assign variables newID to account.id and borrowedBooks to an empty array.loop through the books array and declare a new variable book to each element in book[prop].ForEach books.borrows element if the books.id equals the newID push a 1 into borrowedBooks array.
3.return borrowedBooks reduced.
*/
function getTotalNumberOfBorrows(account, books) {
const NewID = account.id;
  let borrowedBooks = [];
  for (prop in books){
    const book = books[prop];
    book.borrows.forEach((book1) =>
      book1.id === NewID ? borrowedBooks.push(1) : borrowedBooks);
  }
  return borrowedBooks = borrowedBooks.reduce((a,b) =>a+b,0 )
}



// getBooksPossessedByAccount returns all of the books taken out by an account with the author embedded.
/*
1.getBooksPossessedByAccount function has the arity of 3, its is expecting 3 arrays with objects, accounts,books and authors.
2.declare an empty array variable (newBooks).
3.loop through the books array checking for the id in the borrows array.
4.push the new instance (book) into the newBook array.
5.loop through the books array finding the authors id that equals the book authorId.
6.assign book.auhtor to the newAuthors variable, through each iteration of newBooks
7.return newBooks
*/
function getBooksPossessedByAccount(account, books, authors) {
const newBooks = [];
  books.forEach((book) => {
    let newBorrows = book.borrows;
    newBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        newBooks.push(book);
      }
    });
  });
  let answer = newBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return answer
}
//*********************************
// Helper function
// Returns author object
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}
//***********************************
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
