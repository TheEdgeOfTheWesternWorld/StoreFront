
let cart;

// contains all sellable products
allProducts =[];

//creates product list
function retrieveProducts(){
    let parsedProducts = JSON.parse(localStorage.getItem('productList'));
    if (parsedProducts)
    {
        for( let i = 0; i<parsedProducts.length; i++){
            let newProduct = parsedProducts[i]
            new Products(newProduct.productName,newProduct.productImage,newProduct.productPrice,newProduct.productDeets,newProduct.productQuantity);
        }
    }
}


//creates instances of products and stores it in allProducts
function Products(productName,productImage,productPrice,productDeets,productQuantity) {

    this.productName = productName;
    this.productImage = productImage;
    this.productPrice = productPrice;
    this.productDeets = productDeets;
    this.productQuantity = productQuantity;
    allProducts.push(this);

}

// creates order Items
function CartItem (product,quantity){
    console.log(product);
    console.log(allProducts[0].productName);
    for (let i = 0; i<allProducts.length; i ++){
        if(product === allProducts[i].productName){
            this.productName =allProducts[i].productName;
            break;
        }
        else{
            console.log('hey you got problems creating CartItems');
        }
    }
    this.quantity = quantity;
}


// creates Cart
const Cart = function(items){
    this.items = items;

}

//add function to add an item to cart
Cart.prototype.addItem = function(product,quantity){
    let item = new CartItem(product,quantity);
    if(this.items){
    console.log(this.items);
    console.log(item);
    this.items.push(item);
    }
    else{
        this.items =[]
        this.items.push(item);
    }
    
}


//add function to remove item from cart 
Cart.prototype.removeItem = function(product,quantity){
    let round1 = true;
    let modifiedCart = [];
    for(let i =0; i<this.items.length; i++){
        if (product === this.items[i].productName && quantity ===this.items[i].quantity && round1 === true){
            console.log('hello');
            round1 = false;
            continue;
        }
        else{
            modifiedCart.push(this.items[i]);
        }
    }
    this.items = modifiedCart;
    
}


//storing cart in local storage
Cart.prototype.storeCart = function(){

    let storedCart = JSON.stringify(this.items);
    localStorage.setItem('cart',storedCart);
}

//retrieving cart from local storage
Cart.prototype.retreiveCart = function(){
    let retreivedCart = JSON.parse(localStorage.getItem('cart'));
    let cart = new Cart(retreivedCart);
}


// maintains cart even when you come back to the home page
function createCart(){
    if (localStorage.getItem('cart')){
        let retreiveCart = JSON.parse(localStorage.getItem('cart'));
        cart = new Cart(retreiveCart);

    }

    else {
        cart = new Cart([]);
    }
}

createCart();

// let testCar = new Products('Glory Days Letter Jacket','assets/jacket.jpg',250,'Relive that one time a long long time ago when High School was the pinnacle of your life. You can literally smell the nastalgia, no really, patent pending.',4000);
// new Products('Lifesize Darth Vader', 'assets/vader.jpg',66,'He IS your Father, and now he can stand somewhere, in your home or your office. Together you can rule. Priced in honor of the order that changed the galaxy forever - order 66.',20);
// new Products('Sick Longboard', 'assets/longboard.jpg',125,'Want to look SICK on the streets? Then get this sick longboard, bro! You\'ll rip it up, like a the dope, cowabunga, shaka throwing, mamajamma you know you are. Just buy the board, it\'s everything you need dude.',2000);
// new Products('Rad Coder\'s Computer', 'assets/computer.jpg',2500,'Rip a gnarly code; see what your ex is up to on their webcam; be an international superspy hacker person! It\'s the rig you never knew you always needed, built for speed, customized to impress, and yes you\'ll be able to code your whole face off.',200);
// new Products('The Corvette Compensator', 'assets/car.jpg',125000,'Jump into this ridiculously cool, unnecessarily loud, impractically fast, gas guzzling Corevette Comensator. Compensation where it counts!',2);
 
// renderItem();

// // prints all items in to itemCards
// function renderItem(){
//     let landingPageEl=document.getElementById('itemCard');
//     landingPageEl.innerHTML ='';

//     for (let i = 0; i<allProducts.length; i ++){
//         let productName = allProducts[i].productName;
//         let productImage = allProducts[i].productImage;
//         let productPrice = allProducts[i].productPrice;
//         let productDeets = allProducts[i].productDeets;
    
//         let divEl = document.createElement('div');
//         divEl.setAttribute('class', 'itemCard');
//         let itemNameEl = document.createElement('h3');
//         itemNameEl.setAttribute('id', productName);
//         itemNameEl.textContent = productName;
//         let imageEl = document.createElement('img');
//         imageEl.src = productImage;
//         let descriptionEl = document.createElement('h4');
//         descriptionEl.textContent = productDeets;
//         let priceEl = document.createElement('h5');
//         priceEl.textContent = '$ ' + productPrice;
//         let formEl = document.createElement('form');
//         formEl.setAttribute('id', productName);
//         let buttonEl = document.createElement('button');
//         buttonEl.id = productName;
//         buttonEl.textContent = 'Add to my Stuff!';
//         let inputValue = document.createElement ('input');
//         let labelValue = document.createElement('label');
//         labelValue.innerText = '<--How Many Stuffs';

//         inputValue.setAttribute('name', 'quantity');

//         divEl.appendChild(itemNameEl);
//         divEl.appendChild(imageEl);
//         divEl.appendChild(descriptionEl);
//         divEl.appendChild(priceEl);
//         divEl.appendChild(formEl);
//         formEl.appendChild(buttonEl);
//         formEl.appendChild(inputValue);
//         formEl.appendChild(labelValue);
//         landingPageEl.appendChild(divEl);
//     }
// }


// // on click adds things to the cart
// let productLanding=document.getElementById('itemCard');

// function addStuff (event){
//     event.preventDefault();
//     let product = event.target.id;
//     let quantity = event.target.quantity;
//     if (quantity.value){
//     cart.addItem(product,quantity.value);
//     console.log(cart.items);
//     createCartCounter(cart.items.length);
//     cart.storeCart();
// }

// }

// productLanding.addEventListener('submit', addStuff);

// // creates cart counter on page
// function createCartCounter(cartLength){
//     let cartCounter = document.getElementById('cartLink');
//     console.log(cartCounter);
//     cartCounter.innerHTML = '';
//     let cartLink = document.createElement('a');
//     cartLink.setAttribute('href','checkout.html');
//     cartLink.textContent = 'Your Stuff  '
//     cartCounter.appendChild(cartLink);
//     let pEl = document.createElement('p');
//     pEl.textContent = cartLength;
//     cartCounter.appendChild(pEl);
// }

// // adds password protection
// var merchantAccess = document.getElementById("merchantAccess");
            
// function password() {
//     var testV=1;
//     var pass1 = prompt('Give Me The Password - Don\'t Mess it Up Neither!');
//     while (testV < 3){
//         if(!pass1);
//         if(pass1.toLocaleLowerCase() == "alphasquad"){
//         alert('You Have Been Found Worthy - Please Enter');
//         window.open('merchantPage.html','_self');
//         break;
//         }
//         console.log(pass1);

//         testV+=1;
//         pass1 = prompt('NOPE! You Gotta Do Better Than That!');
//         }
//     if(pass1.toLocaleLowerCase()!=="alphasquad" & testV == 3){
//     alert ('Go Away!');
//     }
//     return 
// }

// merchantAccess.addEventListener("click", password);