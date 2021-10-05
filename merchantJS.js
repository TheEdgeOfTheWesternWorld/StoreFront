let productSubmit = function(event) {
    event.preventDefault();
    let newProduct = event.target;
    let name = newProduct.productName.value;
    let url = newProduct.imgURL.value;
    let price = newProduct.price.value;
    let details = newProduct.details.value;
    let invQTY = newProduct.inventoryQuantity.value;
    newProduct = new Products(name,url,price,invQTY);
    addToTable(newProduct);
    return newProduct;
}


let productForm = document.getElementById("add-new-item");
productForm.addEventListener("submit",productSubmit);

let tbody = document.querySelector('tbody');

const addToTable = function(productsObject) {
    let tr = document.createElement("tr");
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
    td.innerHTML = '<button>Remove Item</button>'
    tr.appendChild(td);
    tbody.appendChild(tr);
}

