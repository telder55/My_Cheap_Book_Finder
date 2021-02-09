// Pseudo Coding for My Cheap Book Finder
//Global Variables Needed
// Create global variable for DIV with ID "book-info-area" use this variable to create and append elements to this section. 
// Searchbox section
// Create a single searchbox that the user can enter book title, author, or category into. 
// fetch google books url and return first 5 book titles, authors, and store 5 IDs associated with each result in an array. 
// Display 5 link options underneath search box and make so when result 1 is chosen, index 0 from IDs array is used as query parameter in second api call to retrieve google book info. Result 2 is index 1 from IDs array etc...
//Google Book Api Responds with following Items; Book Title, Author, Book Cover Image, Description, retail price, average rating, link to buy book new. 
// Have a button to find book on ebay. Use event listener on button to make an api call using book title and author parameters from google books api response. 
// Ebay Section
// Create global variable for DIV with ID "ebay-listings-area" use this variable to create and append elements to this section.
let searchBar = document.querySelector(".searchBar");
let goButton = document.querySelector(".goButton");
let imageBox = document.querySelector(".fourthBox");
let author = document.querySelector(".author");
let bootTitle = document.querySelector(".bookTitle");
let publisher = document.querySelector(".publisher");
let pageCount = document.querySelector(".pageCount");
let buyLink = document.querySelector(".buyLink");
let ebayButton = document.querySelector(".findListings");
goButton.addEventListener("click", function() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchBar.value + '')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let updateAuthor = data['items'][0]['volumeInfo']['authors'];
            author.innerHTML = "Author: " + updateAuthor;
            let updatePublisher = data['items'][0]['volumeInfo']['publisher'];
            publisher.innerHTML = "Publisher: " + updatePublisher;
            let updatePageCount = data['items'][0]['volumeInfo']['pageCount'];
            pageCount.innerHTML = "Page Count: " + updatePageCount;
            let updateBuyLink = data['items'][0]['saleInfo']['buyLink'];
            buyLink.innerHTML = "Buy Link: " + updateBuyLink;
        })
})