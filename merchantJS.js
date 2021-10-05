/*const Merchant = function(name) {
    this.name = name;
    this.products = [];
    this.addProduct = function(productObj) {
        this.products.push(productObj);
    }
    this.removeProductByName = function(productName) {
        let newArr = [];
        for(let i = 0; i < this.products.length; i++) {
            if(!this.products[i].productName === productName) {
                newArr.push(this.products[i]);
            }// else this is the product being removed, do nothing
        }
        this.products = newArr;
    }
    this.hasProduct = function(productName) {
        let hasProduct = false;
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].productName === productName) {
                hasProduct = true;
            }
        }
        return hasProduct;
    }
}*/


//const allProducts = [];

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
    let newArr = [];
    for(let i = 0; i < allProducts.length; i++) {
        if(!allProducts[i].productName === productName) {
            newArr.push(allProducts[i]);
        }// else this is the product being removed, do nothing
    }
    allProducts = newArr;
}

//Needs to account for which merchant has added a new product
let productSubmit = function(event) {
    event.preventDefault();
    let newProduct = event.target;
    let name = newProduct.productName.value;
    let url = newProduct.imgURL.value;
    let price = newProduct.price.value;
    let details = newProduct.details.value;
    let invQTY = newProduct.inventoryQuantity.value;
    newProduct = new Products(name,url,price,invQTY);
    allProducts.push(newProduct);
    addToTable(newProduct);
    return newProduct;
}


let productForm = document.getElementById("add-new-item");
productForm.addEventListener("submit",productSubmit);

let tbody = document.querySelector('tbody');

//needs to account for what merchant is calling
const addToTable = function(productsObject) {
    let tr = document.createElement("tr");
    tr.id = productsObject.productName;
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
    td.innerHTML = '<button>Remove Item</button>';
    td.id = productsObject.productName;
    tr.appendChild(td);
    tbody.appendChild(tr);
}
/*

const removeFromTable = function(productName) {
    if(hasProduct(productName)) {
        removeProductByName(productName);
        document.querySelector('tbody').innerHTML = '';
        for(let i = 0; i < allProducts.length; i++) {
            addToTable(allProducts[i]);
        }
    }
}

const removeButtonOnClick = function(event) {
    event.preventDefault();
    console.log("remove!");
    tr = event.target.parentElement.parentElement;
    trId = tr.id;
    removeFromTable(trId);
}

let removeButtons = document.getElementById("");
removeButtons.addEventListener("click",removeButtonOnClick);
*/

