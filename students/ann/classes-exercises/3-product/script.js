class Product {
    constructor (name, description, img, price, quantity, freeCharge = false) {
        this.name = name,
        this.description = description,
        this.img = img,
        this.price = price,
        this.freeCharge = false,
        this.quantity = 1;
    }
}

const piano = new Product('Piano', 'A piano keyboard is an essential instrument for anyone who likes to play classical, jazz, and many other genres of music. Having a keyboard in your home allows you to practice, play, and enjoy music whenever you want.', './icons/Piano.png', 90)
const skate = new Product('Skate', 'Complete Skateboard is 10mm thick and composed of 7 layers Maple Wood, strong and durable to withstand riders up to 220lbs(100KG).', './icons/Skate.png', 350)
const speakers = new Product('Speakers', `A speaker is an essential tool for any music lover. It's the device that lets you listen to your favorite tunes and it's also a great way to listen to the world around you.`, './icons/Speakers.png', 1200)
const pingPong = new Product('Ping-pong', 'The Viper 1 Star Table Tennis Balls are essential to a first class game room experience. These regulation sized table tennis balls measure 40 mm, the approved size of the ITTF for consistent tournament performance.', './icons/Pimpong.png', 400)

class Cart {
    constructor() {
        this.products = [],
        this.totalPrice = 0
    }

    addProducts(product) {
        this.products.push(product);
        this.totalPrice += product.price; 
        this.products.quantity = 1;
        printProduct(product);
        printTotalPrice();
    }

    getTotalPrice() {
        const result = this.products.reduce((acc, curr) => acc + curr.price, 0);
        console.log(result);
    }

    applyDiscount() {
        console.log('working');
        // const totalProducts = cart.products.length
        this.products.forEach( (p, i, arr) => {
            if (i % 5 === 3) {
                this.totalPrice -= arr[i].price;
                arr[i].price = 0;
                arr[i].freeCharge = true;
            }
        })
        printTotalPrice();
    }
}


const userCart = new Cart();

function printProduct(product) {
    const productArticle = document.createElement('article');
    productArticle.classList.add('product', `${product.name.toLowerCase()}`);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('product-img-container');
 
    const productImage = document.createElement('img');
    productImage.classList.add('product-img');
    productImage.src = product.img
    
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('product-info-container');

    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.textContent = product.name;
    
    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.description;

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('product-price-container');

    const productPrice = document.createElement('h2');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${product.price}`;

    const cartIcon = document.createElement('i');
    cartIcon.classList.add('fas', 'fa-shopping-cart');

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-button-container');

    const productQuantity = document.createElement('p');
    productQuantity.classList.add('product-quantity');
    productQuantity.textContent = product.quantity;

    const addProductButton = document.createElement('button');
    addProductButton.classList.add('product-quantity-item', 'product-add-button');
    addProductButton.textContent = '+';

    const substractProductButton = document.createElement('button');
    substractProductButton.classList.add('product-quantity-item', 'product-substract-button');
    substractProductButton.textContent = '-';

    document.querySelector('main').appendChild(productArticle);
    productArticle.appendChild(imgContainer);
    imgContainer.appendChild(productImage);
    productArticle.appendChild(infoContainer);
    infoContainer.appendChild(productName);
    infoContainer.appendChild(productDescription);
    productArticle.appendChild(priceContainer);
    priceContainer.appendChild(productPrice);
    priceContainer.appendChild(cartIcon);
    productArticle.appendChild(productContainer);
    productContainer.appendChild(addProductButton);
    productContainer.appendChild(productQuantity);
    productContainer.appendChild(substractProductButton);
}

function addSameProduct() {
    document.querySelectorAll('.product-quantity-item').forEach(b => b.addEventListener('click', (e) => {
        const article = e.target.parentElement.parentElement;
        console.log(article);

        if (e.target.classList.contains('product-add-button')) {
            let quantity = parseInt(e.target.nextElementSibling.textContent);
            quantity++;
            e.target.nextElementSibling.textContent = quantity;
            updateQuantityOfItem(article);

        } else if (e.target.classList.contains('product-substract-button')) {
            if (e.target.previousElementSibling.textContent < 2) {
                article.remove();
            } else {
                let quantity = parseInt(e.target.previousElementSibling.textContent);
                quantity--;
                e.target.previousElementSibling.textContent = quantity;
            }
        }  
    }))
}

function updateQuantityOfItem(element) {
    console.log(element.className);
    const thisNameProduct = element.className.split(' ').slice(1, 2).join('');
    console.log(thisNameProduct);
    const nameOfProducts = userCart.products.map( p => p.name.toLowerCase());
    console.log(nameOfProducts);
    const indexInArrayOfProducts = nameOfProducts.indexOf(thisNameProduct);
    console.log(indexInArrayOfProducts);
    userCart.products[indexInArrayOfProducts].quantity ++;
}

function printTotalPrice() {
    document.querySelector('.cart-total-price').textContent = `Total price: ${userCart.totalPrice} €`
}

userCart.addProducts(pingPong);
userCart.addProducts(skate);
userCart.addProducts(piano);
userCart.addProducts(speakers);
userCart.applyDiscount();
addSameProduct();