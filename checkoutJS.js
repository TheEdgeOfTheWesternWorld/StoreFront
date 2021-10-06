'use strict';

const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() 
{
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cartItems);
    cart = new Cart(cartItems);
    console.log(cart);
}
loadCart();
console.log(cart);
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
      
      let deleteButton = document.createElement('td');
      deleteButton.innerText = 'X';
      deleteButton.classList.add('remover');
      deleteButton.setAttribute('id', i);
      
      
      let quantityData = document.createElement('td'); 
      quantityData.innerText = cart.items[i].quantity;

      let priceData = document.createElement('td');
      for(let price = 0; price < allProducts.length; price++)
      {
        if(cart.items[i].productName === allProducts[price].productName)
        {
          priceData.innerText = allProducts[price].productPrice;
          break;
        }
      }
      
      let pictureData = document.createElement('img');
      console.log(cart.items[0].productName);
      for(let img = 0; img < allProducts.length; img++){
        if(cart.items[i].productName === allProducts[img].productName){
          pictureData.setAttribute('src',allProducts[img].productImage);
          break;
        }
      }
      
      tableRow.appendChild(pictureData);
      tableRow.appendChild(itemData);
      tableRow.appendChild(quantityData);
      tableRow.appendChild(priceData);
      tableRow.appendChild(deleteButton);
  
      clearTable.appendChild(tableRow);
    }
}

function removeItemFromCart(event) 
{

    let table = event.target.classList.contains('remover');
    let proDuct =cart.items[parseInt(event.target.id)].productName;
    let qunt = cart.items[parseInt(event.target.id)].quantity;
    console.log(proDuct,qunt);
  
    if (table){
      cart.removeItem(proDuct, qunt);
      console.log(cart.items);
      cart.storeCart();
    }
  
    renderCart();
}

renderCart();