'use strict';

const sub = document.getElementById('cart');
sub.addEventListener('click', subQuantity);

const add = document.getElementById('cart');
add.addEventListener('click', addQuantity);

const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let totalPrice = 0;

retrieveProducts();

function loadCart() 
{
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

loadCart();

function renderCart() 
{
  loadCart();
  clearCart();
  showCart();
}

function clearCart()
{
  let clearTable = document.querySelector('tbody');
  clearTable.innerHTML = '';
}

function showCart() 
{
  
  let clearTable = document.querySelector('tbody');
  
  for(let i = 0; i < cart.items.length; i++){

    let tableRow = document.createElement('tr');

    let itemData = document.createElement('td');
    itemData.innerText = cart.items[i].productName;
    itemData.setAttribute('class', cart.items[i].productName);
    itemData.setAttribute('id', 'productName');
      
    let deleteButton = document.createElement('td');
    
    let trashIcon = document.createElement('img');
    trashIcon.src = "assets/trash-icon.png";
    trashIcon.setAttribute('id', 'remover');
    trashIcon.classList.add(i);

    deleteButton.appendChild(trashIcon);
    
    let addBtn = document.createElement('button');
    addBtn.innerText = '+';
    addBtn.setAttribute('id', 'addQuant');
    addBtn.classList.add(i);

    let subBtn = document.createElement('button');
    subBtn.innerText = '-';
    subBtn.setAttribute('id', 'subQuant');
    subBtn.classList.add(i);

    let quantityTD = document.createElement('td');
    quantityTD.setAttribute('class','quantTD');
    let quantityData = document.createElement('p');
    let quantTD = 'quantity ' + i;
    quantityData.id = quantTD;
    quantityData.innerText = cart.items[i].quantity; 
    
    let priceData = document.createElement('td');
    let productPrice = 0;
    for(let price = 0; price < allProducts.length; price++)
    {
      if(cart.items[i].productName === allProducts[price].productName)
      {
        productPrice = allProducts[price].productPrice;
        let orderPrice = productPrice * cart.items[i].quantity;
        priceData.innerText = '$' + orderPrice;
        totalPrice = totalPrice + orderPrice;
        console.log('totalprice ' + totalPrice);
        console.log('orderprice ' + orderPrice);
        break;
      }
    }
    
    let picTD = document.createElement('td');
    let pictureData = document.createElement('img');
    pictureData.setAttribute('id', 'product');
    for(let img = 0; img < allProducts.length; img++){
      if(cart.items[i].productName === allProducts[img].productName){
        pictureData.setAttribute('src',allProducts[img].productImage);
        break;
      }
    }
    
    picTD.appendChild(pictureData);
    quantityTD.appendChild(subBtn);
    quantityTD.appendChild(quantityData);
    quantityTD.appendChild(addBtn);
    
    tableRow.appendChild(picTD);
    tableRow.appendChild(itemData);
    tableRow.appendChild(quantityTD);
    tableRow.appendChild(priceData);
    tableRow.appendChild(deleteButton);
    
    clearTable.appendChild(tableRow);
  }
}


function subQuantity(event)
{
  if(event.target.id === 'subQuant')
  {
    let index = parseInt(event.target.className);
    let subProduct = cart.items[index].productName;
    let subQuant = parseInt(cart.items[index].quantity);
    if(subQuant > 0){
        cart.items[index].quantity = subQuant - 1;
    cart.storeCart();
    totalPrice = 0;
    renderCart();
    priceTotal();
    }
  
  
  }
}

function addQuantity(event)
{
  if(event.target.id === 'addQuant')
  {
    let index = parseInt(event.target.className);
    let addProduct = cart.items[index].productName;
    let addQuant = parseInt(cart.items[index].quantity);
    cart.items[index].quantity = addQuant + 1;
    cart.storeCart();
    totalPrice = 0;
    renderCart();
    priceTotal();

  }
}

function priceTotal()
{
  let parentEl = document.querySelector('tfoot');
  parentEl.innerHTML = '';
  let rowEl = document.createElement('tr');
  
  let totalEl = document.createElement('td');
  totalEl.innerText = 'Total Price:';
  
  let blankEl = document.createElement('td');
  let blankEl2 = document.createElement('td');
  
  let dataEl = document.createElement('td');
  dataEl.innerText  = '$' + totalPrice;
  
  rowEl.appendChild(totalEl);
  rowEl.appendChild(blankEl);
  rowEl.appendChild(blankEl2);
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
  
}

function removeItemFromCart(event) 
{
  if(event.target.id === 'remover')
  {
    console.log('works');
    let proDuct = cart.items[parseInt(event.target.className)].productName;
    let quant = cart.items[parseInt(event.target.className)].quantity;
    // console.log(proDuct, quant);
    
    if (table)
    {
      cart.removeItem(proDuct, quant);
      console.log(cart.items);
      totalPrice = 0;
      cart.storeCart();
    }
    
    renderCart();
    priceTotal();
  }
}

//adds reset and cart clear on submission of customer info
let customerForm = document.getElementById('customerInfo')

function customerFormHandler(event){
  localStorage.removeItem('cart');
}

customerForm.addEventListener('submit',customerFormHandler);

//adds review to reviews section
let reviewInput = document.getElementById('reviewArea')

function reviewInputHandler(event){
  event.preventDefault();
  console.log(event.target)
  let review = event.target.leaveReview.value;
  console.log(review.value);
  let parentEl = document.getElementById('reviews');
  let reviewEl = document.createElement('div');
  let reviewTextEl = document.createElement('p');
  reviewTextEl.textContent = review;
  reviewEl.appendChild(reviewTextEl);
  parentEl.appendChild(reviewEl);
  event.target.reset();
}


reviewInput.addEventListener('submit',reviewInputHandler);

renderCart();
priceTotal();