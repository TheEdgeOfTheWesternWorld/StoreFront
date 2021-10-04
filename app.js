
// contains all sellable products
allProducts =[];

//creates instances of products and stores it in allProducts
function Products(productName,productImage,productPrice,productQuantity) {
    this.productName = productName;
    this.productImage = productImage;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    allProducts.push(this);

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

allCart = []
// creates Cart
function Cart(product,quantity){
    new CartItem(product,quantity);
    allCart.push

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
    let loginInput = event.target.NAMEOFVALUEOFINPUTFROMINDEX;
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