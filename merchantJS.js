'use strict';

//==================================================
/*let workingArray = allProducts;
document.getElementById("search-form").addEventListener("submit",onSearch);
let onSearch = function(event) {
    let form = event.target;
    let searchField = event.target.searchField.value;
}*/
//==================================================
let checkLocalProducts = function() {
    if(localStorage.getItem("productList")){
        allProducts = [];
        retrieveProducts()
        console.log("reading");
    }
}

checkLocalProducts();
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
    //===============================================
    let removeIndex = getItemIndexByName(productName);
    if(removeIndex !== -1) {
        allProducts[removeIndex] = allProducts[allProducts.length - 1];
        allProducts.pop();
    }
    //===============================================

    /*if(hasProduct(productName)){
        let removeIndex;
        for(let i = 0; i  < allProducts.length;i++) {
            if(allProducts[i].productName === productName){
                removeIndex = i;
            }
        }
        allProducts[removeIndex] = allProducts[allProducts.length - 1];
        allProducts.pop();
    }*/
}
//========================================================
const getItemIndexByName = function(productName) {
    //if not found return -1
    let foundIndex = -1;
    if(hasProduct(productName)) {
        for(let i = 0; i < allProducts.length; i++) {
            if(allProducts[i].productName === productName) {
                foundIndex = i;
            }
        }
    }
    return foundIndex;
}
//========================================================

//Needs to account for which merchant has added a new product
let productSubmit = function(event) {
    event.preventDefault();
    let newProduct = event.target;
    let name = newProduct.productName.value;
    let url = newProduct.imgURL.value;
    let price = newProduct.price.value;
    let details = newProduct.details.value;
    let invQTY = newProduct.inventoryQuantity.value;
    newProduct = new Products(name,url,price,details,invQTY);
    renderTable();
    return newProduct;
}


let productForm = document.getElementById("add-new-item");
productForm.addEventListener("submit",productSubmit);

let tbody = document.querySelector('tbody');

const removeButtonOnClick = function(event) {
    event.preventDefault();
    console.log(event.target.parentElement.parentElement.id);
    removeProductByName(event.target.parentElement.parentElement.id);
    renderTable();
}

//needs to account for what merchant is calling
const addToTable = function(productsObject) {
    console.log("adding to table");
    //create row
    let tr = document.createElement("tr");
    tr.setAttribute("id", productsObject.productName);
    //create product name column
    let td = document.createElement("td");
    td.innerHTML = productsObject.productName;
    tr.appendChild(td);
    //create price column
    td = document.createElement('td');
    td.innerHTML = productsObject.productPrice;
    tr.appendChild(td);
    //create quantity column
    td = document.createElement('td');
    td.innerHTML = productsObject.productQuantity;
    tr.appendChild(td);
    //=========================================
    td = document.createElement('td');
    let btn = document.createElement('button');
    btn.innerHTML = "Adjust Price";
    btn.addEventListener("click", priceBtnOnClick);
    td.appendChild(btn);
    tr.appendChild(td);
    //=========================================
    //create column for remove item button
    td = document.createElement('td');/*
    let a = document.createElement('a');
    a.innerHTML = "Remove Item";
    a.setAttribute("href","#");
    a.addEventListener("click",removeButtonOnClick);
    td.appendChild(a);*/
    
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove Item";
    removeBtn.addEventListener("click",removeButtonOnClick);
    td.appendChild(removeBtn);
    tr.appendChild(td);
    tbody.appendChild(tr);
}

//=====================================================
const priceBtnOnClick = function(event) {
    event.preventDefault();
    //replace adjust price button with form on click
    let form = document.createElement("form");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let submit = document.createElement("input");
    label.innerHTML = "New Price"
    form.appendChild(label);
    input.setAttribute("type","number");
    input.setAttribute("step",".01");
    input.setAttribute("name","itemPrice");
    form.appendChild(input);
    submit.setAttribute("type","submit");
    form.appendChild(submit);
    let td = event.target.parentElement;
    td.innerHTML = '';
    td.appendChild(form);
    form.addEventListener("submit", priceAdjustSubmit);
}

const priceAdjustSubmit = function(event) {
    event.preventDefault();
    let newPrice = event.target.itemPrice.value;
    let productName = event.target.parentElement.parentElement.id;
    let productIndex = getItemIndexByName(productName);
    let productToAdjust = allProducts[productIndex];
    productToAdjust.productPrice = newPrice;
    renderTable();
}

//======================================================

const saveItems = function() { 
    console.log("Saving");
    let toSave = JSON.stringify(allProducts);
    localStorage.setItem("productList",toSave);
}

let renderTable = function() {
    console.log("renderTable");
    document.querySelector('tbody').innerHTML = "";
    for(let i = 0; i < allProducts.length; i++) {
        console.log(i);
        addToTable(allProducts[i]);
    }
    saveItems();
}

renderTable();




//==================================================

let onSearchSubmit = function() {

}

//===================================================

/*
let removeButton = document.querySelector("td a");
removeButton.addEventListener("click",removeButtonOnClick);*/


