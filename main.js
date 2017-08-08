const io = require('socket.io-client');

const socket = io('http://prismapayments.com');

let product = {
    // required
    account: 'tt9YWfboNNlHySZhss',
    name: 'My Product Name',
    currency: 'BRL',
    price: 199.9,

    // optionals
    id: 1,
    img: 'http://product/image.jpg',
};

socket.emit('product', product, data => {
    console.log(data);
});
