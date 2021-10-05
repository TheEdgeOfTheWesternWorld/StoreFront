
// contains all sellable products
allProducts =[];

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

function recoverStoredMerchant(){
    let selectedMerchant = JSON.parse(localStorage.getItem('selectedCompany'));
    return selectedMerchant
}

//using a test case
let testCar = new Products('car','assets/car.jpg',4,4000)

//testing 
console.log(testCar);



// creates cart items
function CartItem (product,quantity){
    for (let i = 0; i<allProducts.length; i ++){
        if(product === allProducts[i].productName){
            this.productName =allProducts[i].productName;
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
    this.items.push(item);

}

//add function to remove item from cart
Cart.prototype.removeItem = function(product,quantity){
    let modifiedCart = [];
    for(let i =0; i<this.items.length; i++){
        if (product === this.items[i].product && quantity ===this.items[i].quantity){
            continue;
        }
        else{
            modifiedCart.push(this.items[i]);
        }
    }


}



//contains all merchants that have products for sale
allMerchants = [];

//creates instances of merchants and stores them in allMerchants
function Merchants('nameOfCompany', 'contactEmail'){
    this.nameOfCompany = this.nameOfCompany;
    this.contactEmail = this.contactEmail;
    allMerchants.push(this);
}

// using as a test case
let testMerchant = new Merchants("Bob's Burger","jimmyBuffetRulez@yahoo.com");

//continued testing
console.log(testMerchant);



// targets the button next to an input in the nav bar on the indes
let merchantLogin = document.getElementById('BUTTON--CHANGE TO MATCH INDEX PAGE');

// creates both a link to the merchant page and denies access if it is the wrong login
function loginHandler(event){
    event.preventDefualt();
    let loginInput = event.target.'NAME OF VALUE OF INPUT FROM INDEX';
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
function merchantStoreSelectHandler(event){
    event.preventDefualt();
    let {WHATEVER VALUE WE CHOOSE FOR THE DROP DOWN} = event.target;
    let storedMerchant = JSON.stringify(WHATEVER VALUE WE CHOOSE FOR THE DROP DOWN);
    localStorage.setItem('selectedCompany',storedMerchant)
}

// adds an eventlistener to the drop down menu on merchant selection
merchantSelect.addEventListener('submit',merchantStoreSelectHandler);




//targets form for creating new merchants
let merchantFormInput = document.getElementById('FORM TO CREATE MERCHANTS');

//gathers data to create new company
function merchantFormHandler(event){
    event.preventDefualt();
    let {companyName, email} = event.target
    console.log(companyName.value);
    console.log(email.value);
    new Merchants(companyName.value,email.value);
}

//adds eventlistener to the form for new merchant
merchantFormInput.addEventListener('submit',merchantFormHandler);