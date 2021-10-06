'use strict';


// console.log('hello');
// console.log(testCar);
// Cart.additem(testCar, 2);
// Cart.storeCart();

const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() 
{
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cartItems);
    cart = new Cart(cartItems);
    console.log(cart);
}

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
      itemData.innerText = cart.items[i].product;
      itemData.setAttribute('class', cart.items[i].product);
      
      let deleteButton = document.createElement('td');
      deleteButton.innerText = 'X';
      deleteButton.classList.add('remover');
      deleteButton.setAttribute('id', i);
      
      
      let quantityData = document.createElement('td'); 
      quantityData.innerText = cart.items[i].quantity;
      
      let pictureData = document.createElement('img');
      for(let img = 0; img < Product.allProducts.length; img++){
        if(cart.items[i].product === Product.allProducts[img].name){
          pictureData.setAttribute('src',Product.allProducts[img].filePath);
          break;
        }
      }
      
      tableRow.appendChild(deleteButton);
      tableRow.appendChild(quantityData);
      tableRow.appendChild(itemData);
      tableRow.appendChild(pictureData);
  
      clearTable.appendChild(tableRow);
    }
}

function removeItemFromCart(event) 
{
    let table = event.target.classList.contains('remover');
    let proDuct =cart.items[parseInt(event.target.id)].product;
    let qunt = cart.items[parseInt(event.target.id)].quantity;
    console.log(proDuct,qunt);
  
    if (table){
      cart.removeItem(cart.items[parseInt(event.target.id)].product,cart.items[parseInt(event.target.id)].quantity);
      cart.saveToLocalStorage();
    }
  
    renderCart();
}

renderCart();