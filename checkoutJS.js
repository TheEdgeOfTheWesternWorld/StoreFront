'use strict';


const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let totalPrice = 0;

function loadCart() 
{
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  // console.log(cartItems);
  cart = new Cart(cartItems);
  // console.log(cart);
}
loadCart();
// console.log(cart);
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
    // const sub = document.getElementById('cart');
    // sub.addEventListener('click', subQuantity);
    
    // const add = document.getElementById('cart');
    // add.addEventListener('click', addQuantity);

    let tableRow = document.createElement('tr');

    let itemData = document.createElement('td');
    itemData.innerText = cart.items[i].productName;
    itemData.setAttribute('class', cart.items[i].productName);
      
    let deleteButton = document.createElement('td');
    
    let trashIcon = document.createElement('img');
    trashIcon.src = "assets/trash-icon.png";
    trashIcon.setAttribute('id', i);
    trashIcon.classList.add('remover');

    deleteButton.appendChild(trashIcon);
    
    // let addBtn = document.createElement('button');
    // addBtn.innerText = '+';
    // addBtn.setAttribute('id', i);
    // addBtn.classList.add('addQuant');

    // let subBtn = document.createElement('button');
    // subBtn.innerText = '-';
    // subBtn.setAttribute('id', i);
    // subBtn.classList.add('subQuant');

    let quantityData = document.createElement('td');
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
        // console.log(totalPrice);
        // console.log(orderPrice);
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
    
    
    // function subQuantity(event)
    // {
    //   let sub = event.target.classList.contains('subQuant');
    //   console.log('Sub is ' + sub);
    //   let subQuant = cart.items[i].quantity;
    //   console.log(subQuant);

    //   for(let subQty = 0; subQty < subQuant; subQty--)
    //   {
    //     if(sub)
    //     {
    //       subQuant--;
    //       quantityData.innerText = subQuant;
    //       console.log(quantityData);
    //       cart.storeCart();
    //       sub = false;
    //     }
    //     break;
    //   }
    // }
    
    // function addQuantity(event)
    // {
    //   let add = event.target.classList.contains('addQuant');
    //   console.log('Add is ' + add);
    //   let addQuant = cart.items[i].quantity;
      
    //   for(let addQty = 0; addQty < addQuant; addQty--)
    //   {
    //     if(add)
    //     {
    //       addQuant++;
    //       quantityData.innerText = addQuant;
    //       console.log(quantityData);
    //       cart.storeCart();
    //     }
    //     break;
    //   }
    // }
    

    picTD.appendChild(pictureData);
    // quantityData.appendChild(subBtn);
    // quantityData.appendChild(addBtn);
    
    tableRow.appendChild(picTD);
    tableRow.appendChild(itemData);
    tableRow.appendChild(quantityData);
    tableRow.appendChild(priceData);
    tableRow.appendChild(deleteButton);
    
    clearTable.appendChild(tableRow);
  }
}

function priceTotal()
{
  let parentEl = document.querySelector('tfoot');
  parentEl.innerText = '';
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
  let table = event.target.classList.contains('remover');
  let proDuct = cart.items[parseInt(event.target.id)].productName;
  let quant = cart.items[parseInt(event.target.id)].quantity;
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

renderCart();
priceTotal();