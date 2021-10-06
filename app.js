

// contains all sellable products
allProducts =[];

//creates product list
function retrieveProducts(){
    let parsedProducts = JSON.parse(localStorage.getItem('productList'));
    for( let i = 0; i<parsedProducts.length; i++){
        let newProduct = parsedProducts[i]
        new Products(newProduct.productName,newProduct.productImage,newProduct.productPrice,newProduct.productQuantity);
    }
}

retrieveProducts();

//creates instances of products and stores it in allProducts
function Products(productName,productImage,productPrice,productQuantity) {
    if(recoverStoredMerchant()){
        this.company = recoverStoredMerchant();
    }
    this.productName = productName;
    this.productImage = productImage;
    this.productPrice = productPrice;
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
    let modifiedCart = [];
    for(let i =0; i<this.items.length; i++){
        if (product === this.items[i].productName && quantity ===this.items[i].quantity){
            console.log('hello');
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



let cart = new Cart([]);
console.log(cart);
// let testCar = new Products('car','assets/car.jpg',4,4000);
// new Products('oreo', 'assets/oreo.jpg',5,200); 



function recoverStoredMerchant(){
    let selectedMerchant = JSON.parse(localStorage.getItem('selectedCompany'));
    return selectedMerchant
}

renderItem();

// prints all items in to itemCards
function renderItem(){
    let landingPageEl=document.getElementById('itemCard');
    landingPageEl.innerHTML ='';

    for (let i = 0; i<allProducts.length; i ++){
        let productName = allProducts[i].productName;
        let productImage = allProducts[i].productImage;
        let productPrice = allProducts[i].productPrice;
    
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'itemCard');
        let itemNameEl = document.createElement('h3');
        itemNameEl.setAttribute('id', productName);
        itemNameEl.textContent = productName;
        let imageEl = document.createElement('img');
        imageEl.src = productImage;
        let descriptionEl = document.createElement('h4');
        let priceEl = document.createElement('h5');
        priceEl.textContent = productPrice;
        let formEl = document.createElement('form');
        formEl.setAttribute('id', productName);
        let buttonEl = document.createElement('button');
        buttonEl.id = productName;
        buttonEl.textContent = 'Add to my Stuff!';
        let inputValue = document.createElement ('input');
        let labelValue = document.createElement('label');
        labelValue.innerText = 'How many stuffs?';

        inputValue.setAttribute('name', 'quantity');

        divEl.appendChild(itemNameEl);
        divEl.appendChild(imageEl);
        divEl.appendChild(descriptionEl);
        divEl.appendChild(priceEl);
        divEl.appendChild(formEl);
        formEl.appendChild(buttonEl);
        formEl.appendChild(inputValue);
        formEl.appendChild(labelValue);
        landingPageEl.appendChild(divEl);
    }
}


let productLanding=document.getElementById('itemCard');

function addStuff (event){
    event.preventDefault();
    let product = event.target.id;
    let quantity = event.target.quantity;
    if (quantity.value){
    cart.addItem(product,quantity.value);
    console.log(cart.items);
    createCartCounter(cart.items.length);
    cart.storeCart();
}

}

productLanding.addEventListener('submit', addStuff);

function createCartCounter(cartLength){
    let cartCounter = document.getElementById('cartLink');
    console.log(cartCounter);
    cartCounter.innerHTML = '';
    let cartLink = document.createElement('a');
    cartLink.setAttribute('href','checkout.html');
    cartLink.textContent = 'Your Stuff'
    cartCounter.appendChild(cartLink);
    let pEl = document.createElement('p');
    pEl.textContent = cartLength;
    cartCounter.appendChild(pEl);
}




//contains all merchants that have products for sale
allMerchants = [];

//creates instances of merchants and stores them in allMerchants
// NEEDS TO BE TESTED
function Merchants(nameOfCompany, contactEmail){
    this.nameOfCompany = this.nameOfCompany;
    this.contactEmail = this.contactEmail;
    allMerchants.push(this);
}

// using as a test case
let testMerchant = new Merchants("Bob's Burger","jimmyBuffetRulez@yahoo.com");

//continued testing
console.log(testMerchant);



// targets the button next to an input in the nav bar on the indes
let merchantLogin = document.getElementById('merchantAccess');

// creates both a link to the merchant page and denies access if it is the wrong login
// NEEDS TO BE TESTED
function loginHandler(event){
    event.preventDefualt();
    let loginInput = event.target;
    for (let i =0; i<allMerchants.length; i++){

        //if it is the correct login info
        if(loginInput.value === allMerchants[i].nameOfCompany){
            let parentEl = document.getElementById('CORRECT PARENT ID TO BE ABLE TO CREATE A LINK OR BUTTON UNDER THE INPUT');
            let merchantPageLink = document.createElement('button');
            let pageLink = document.createElement('a');
            pageLink.textContent = 'Merchant Page';
            pageLink.setAttribute('src','/merchantPage.html');
            merchantPageLink.appendChild(pageLink);
            parentEl.appendChild(merchantPageLink);
        }

        //if it is incorrect login info
        else {
            let parentEl = document.getElementById('CORRECT PARENT ID TO BE ABLE TO CREATE A LINK OR BUTTON UNDER THE INPUT');
            let accessDenied = document.createElement('p');
            accessDenied.textContent = 'access denied';
            parentEl.appendChild(accessDenied);
        }

            
    }
}

//creates eventlistener for the button named in merchantLogin
merchantLogin.addEventListener('click',loginHandler);




// targets merchant drop down menu to select their company
let merchantSelect = document.getElementById('THE DROP DOWN SELECTION ON THE MERCHANT PAGE');

// assigns the merchant into stored memory  SHOULD THIS JUST BE SETTING A GLOBAL VARIABLE TO SET PROPERTIES OF PRODUCTS OR SHOULD IT BE A STORED VALUE
// NEEDS TO BE TESTED
// function merchantStoreSelectHandler(event){
//     event.preventDefualt();
//     let {WHATEVER VALUE WE CHOOSE FOR THE DROP DOWN} = event.target;
//     let storedMerchant = JSON.stringify(WHATEVER VALUE WE CHOOSE FOR THE DROP DOWN);
//     localStorage.setItem('selectedCompany',storedMerchant)
// }

// adds an eventlistener to the drop down menu on merchant selection
// merchantSelect.addEventListener('submit',merchantStoreSelectHandler);




// //targets form for creating new merchants
// let merchantFormInput = document.getElementById('FORM TO CREATE MERCHANTS');

// //gathers data to create new company
// // NEEDS TO BE TESTED
// function merchantFormHandler(event){
//     event.preventDefualt();
//     let {companyName, email} = event.target
//     console.log(companyName.value);
//     console.log(email.value);
//     new Merchants(companyName.value,email.value);
// }

// //adds eventlistener to the form for new merchant
// merchantFormInput.addEventListener('submit',merchantFormHandler);