'use strict';

const hasProduct = function(productName) {
    let hasProduct = false;
    for(let i = 0; i < allProducts.length; i++) {
        if(allProducts[i].productName === productName) {
            hasProduct = true;
        }
    }
    return hasProduct;
}

const removeProductByName = function(productName) {
    if(hasProduct(productName)){
        let removeIndex;
        for(let i = 0; i  < allProducts.length;i++) {
            if(allProducts[i].productName === productName){
                removeIndex = i;
            }
        }
        allProducts[removeIndex] = allProducts[allProducts.length - 1];
        allProducts.pop();
    }
}


//Needs to account for which merchant has added a new product
let productSubmit = function(event) {
    event.preventDefault();
    let newProduct = event.target;
    let name = newProduct.productName.value;
    let url = newProduct.imgURL.value;
    let price = newProduct.price.value;
    let invQTY = newProduct.inventoryQuantity.value;
    newProduct = new Products(name,url,price,invQTY);
    renderTable();
    return newProduct;
}


let productForm = document.getElementById("add-new-item");
productForm.addEventListener("submit",productSubmit);

let tbody = document.querySelector('tbody');


//needs to account for what merchant is calling
const addToTable = function(productsObject) {
    let tr = document.createElement("tr");
    tr.setAttribute("id", productsObject.productName);
    let td = document.createElement("td");
    td.innerHTML = productsObject.productName;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = productsObject.productPrice;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = productsObject.productQuantity;
    tr.appendChild(td);
    td = document.createElement('td');
    let a = document.createElement('a');
    a.innerHTML = "Remove Item";
    a.setAttribute("href","#");
    a.addEventListener("click",removeButtonOnClick);
    td.appendChild(a);
    tr.appendChild(td);
    tbody.appendChild(tr);
}

let renderTable = function() {
    document.querySelector('tbody').innerHTML = "";
    for(let i = 0; i < allProducts.length; i++) {
        addToTable(allProducts[i]);
    }
    saveItems();
}

const saveItems = function() { 
    let toSave = JSON.stringify(allProducts);
    localStorage.setItem("productList",toSave);
}

const removeButtonOnClick = function(event) {
    event.preventDefault();
    console.log(event.target.parentElement.parentElement.id);
    removeProductByName(event.target.parentElement.parentElement.id);
    renderTable();
}

let removeButton = document.querySelector("td a");
removeButton.addEventListener("click",removeButtonOnClick);


