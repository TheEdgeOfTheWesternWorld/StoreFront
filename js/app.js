
let cart;

// contains all sellable products
allProducts =[];

//creates product list
function retrieveProducts(){
    let parsedProducts = JSON.parse(localStorage.getItem('productList'));
    console.log(parsedProducts);
    if (parsedProducts)
    {
        console.log(parsedProducts.length);
        for( let i = 0; i<parsedProducts.length; i++){
            console.log(i);
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
    for (let i = 0; i<allProducts.length; i ++){
        if(product === allProducts[i].productName){
            this.productName =allProducts[i].productName;
            break;
        }
        else{
            console.log('hey you are creating CartItems but it wasnt this one');
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
