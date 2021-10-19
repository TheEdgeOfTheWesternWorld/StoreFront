

retrieveProducts();

createCart();

function hardcodeItems(){
    if(localStorage.getItem('productList')){
        console.log('cool');
    }
    else{

        let testCar = new Products('Glory Days Letter Jacket','assets/jacket.jpg',250,'You can literally smell the nastalgia,, patent pending.',4000);
        new Products('Lifesize Darth Vader', 'assets/vader.jpg',66,'He IS your Father, and now he can stand somewhere.',20);
        new Products('Sick Longboard', 'assets/longboard.jpg',125,'Want to look SICK on the streets? Get this sick longboard.',2000);
        new Products('Rad Coder\'s Computer', 'assets/computer.jpg',2500,'Rip a gnarly code! ',200);
        new Products('The Corvette Compensator', 'assets/car.jpg',125000,'Jump into this ridiculously cool Corevette Comensator!',2);
        let prod = JSON.stringify(allProducts)
        localStorage.setItem('productList',prod);
    }
}

hardcodeItems();

featuredItem();

renderItem();

// prints all items in to itemCards
function renderItem(){
    let landingPageEl=document.getElementById('itemCard');
    landingPageEl.innerHTML ='';

    for (let i = 0; i<allProducts.length; i ++){
        let productName = allProducts[i].productName;
        let productImage = allProducts[i].productImage;
        let productPrice = allProducts[i].productPrice;
        let productDeets = allProducts[i].productDeets;
    
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'itemCard');
        let itemNameEl = document.createElement('h3');
        itemNameEl.setAttribute('id', productName);
        itemNameEl.textContent = productName;
        let imageEl = document.createElement('img');
        imageEl.src = productImage;
        let descriptionEl = document.createElement('p');
        descriptionEl.textContent = productDeets;
        let priceEl = document.createElement('h5');
        priceEl.textContent = '$ ' + productPrice;
        let formEl = document.createElement('form');
        formEl.setAttribute('id', productName);
        let buttonEl = document.createElement('button');
        buttonEl.id = productName;
        buttonEl.textContent = 'Add to my Stuff!';
        let inputValue = document.createElement ('input');
        let labelValue = document.createElement('label');
        labelValue.innerText = '<--How Many Stuffs';

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

// on click adds things to the cart
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
    event.target.reset();
}

}

productLanding.addEventListener('submit', addStuff);

// creates cart counter on page
function createCartCounter(cartLength){
    let cartCounter = document.getElementById('cartLink');
    console.log(cartCounter);
    cartCounter.innerHTML = '';
    let cartLink = document.createElement('a');
    cartLink.setAttribute('href','checkout.html');
    cartLink.textContent = 'Your Stuff  '
    cartCounter.appendChild(cartLink);
    let pEl = document.createElement('p');
    pEl.textContent = cartLength;
    cartCounter.appendChild(pEl);
}

// adds password protection
var merchantAccess = document.getElementById("merchantAccess");
            
function password() {
    var testV=1;
    var pass1 = prompt('Give Me The Password - Don\'t Mess it Up Neither!');
    while (testV < 3){
        if(!pass1);
        if(pass1.toLocaleLowerCase() == "alphasquad"){
        alert('You Have Been Found Worthy - Please Enter');
        window.open('merchantPage.html','_self');
        break;
        }
        console.log(pass1);

        testV+=1;
        pass1 = prompt('NOPE! You Gotta Do Better Than That!');
        }
    if(pass1.toLocaleLowerCase()!=="alphasquad" & testV == 3){
    alert ('Go Away!');
    }
    return 
}

merchantAccess.addEventListener("click", password);

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

//See a different picture and a different name each time the page renders
//randomly choose one item from the stored list
function featuredItem (){
    let randomNumber = Math.random();
    console.log(randomNumber);
    let multiplyRandomNumber = randomNumber * allProducts.length;
    randomNumber = Math.floor(multiplyRandomNumber);
    console.log(randomNumber);
    console.log(allProducts[0]);
    console.log(allProducts[1]);

    let pickedProduct = allProducts[randomNumber];
    console.log(pickedProduct.productName);
    randomNumber = allProducts;

    console.log(randomNumber);
    console.log(multiplyRandomNumber);

    let featureEl=document.getElementById('featured-section-container text-center-md text-center-sm text-center-xs');
    featureEl.innerHTML ='';

    let productName = pickedProduct.productName;
        let productImage = pickedProduct.productImage;
        let productPrice = pickedProduct.productPrice;
        let productDeets = pickedProduct.productDeets;

        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'itemCard');
        let featureTitle = document.createElement('h1');
        featureTitle.textContent = 'Featured Product';
        let itemNameEl = document.createElement('h3');
        itemNameEl.setAttribute('id', productName);
        itemNameEl.textContent = productName;
        let imageEl = document.createElement('img');
        imageEl.src = productImage;
        let descriptionEl = document.createElement('p');
        descriptionEl.textContent = productDeets;
        let priceEl = document.createElement('h5');
        priceEl.textContent = '$ ' + productPrice;
        let formEl = document.createElement('form');
        formEl.setAttribute('id', productName);
        let buttonEl = document.createElement('button');
        buttonEl.id = productName;
        buttonEl.textContent = 'Add to my Stuff!';
        let inputValue = document.createElement ('input');
        let labelValue = document.createElement('label');
        labelValue.innerText = '<--How Many Stuffs';

        inputValue.setAttribute('name', 'quantity');

        divEl.appendChild(featureTitle);
        divEl.appendChild(itemNameEl);
        divEl.appendChild(imageEl);
        divEl.appendChild(descriptionEl);
        divEl.appendChild(priceEl);
        divEl.appendChild(formEl);
        formEl.appendChild(buttonEl);
        formEl.appendChild(inputValue);
        formEl.appendChild(labelValue);
        featureEl.appendChild(divEl);


    console.log(featureEl);

}
//get the new item to render



//pull picture from somewhere
//correctly identify the picture pulled
//clear picture and re-insert new picture and details


//make sure pictures are correctly associated with the item



