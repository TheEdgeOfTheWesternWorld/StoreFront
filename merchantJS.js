let productSubmit = function(event) {
    event.preventDefault();
    let newProduct = event.target;
    let name = newProduct.productName.value;
    let url = newProduct.imgURL.value;
    let price = newProduct.price.value;
    let details = newProduct.details.value;
    let invQTY = newProduct.inventoryQuantity.value;
    newProduct = new Products(name,url,price,invQTY);
    console.log(newProduct);
    return newProduct;
}

let productForm = document.getElementById("add-new-item");
productForm.addEventListener("submit",productSubmit);

