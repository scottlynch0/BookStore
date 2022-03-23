import { addOrderToList } from './app';

window.submitOrder = function submitOrder() {                  
    const bookForm = document.getElementById("bookList");
    const selectedBook = bookForm.options[bookForm.selectedIndex].value;
    const bookName = selectedBook;
    const quantity = document.getElementById("q1").value
    const price = getPrice(bookName);
    const time = new Date();
    const totalPrice = quantity * price;
    const order = {
        bookName,
        quantity,
        price,
        time,
        totalPrice,
    };
    addOrderToList(order);
}

function getPrice(bookName) {
    switch (bookName) {
        case "Moby Dick":
            return 10;
        case "The Bible":
            return 11;
        case "James Bond":
            return 12;
        case "The Expanse":
            return 13;
        case "Wheel of Time":
            return 14;
        default:
            return 0;
    }
}
