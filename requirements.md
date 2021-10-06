# Requirements

## [WireFrame](https://projects.invisionapp.com/freehand/document/xwRHdFRPT)

## Vision
- A webpage where customers can purchase items and merchants can sell items
- Minimize human interaction
- Local alternative to Amazon

## Scope In
- The web app will provide information to the users about each item
- The web app will allow merchants to display their wares
- Users will be able to add and remove items to their shopping cart
- The web app will allow a unique features for the merchant

## Scope Out
- No servers for storing user data

## MVP
- Customers should be able modify cart
- Merchants can modify store

## Stretch Goals
- Search Bar

```js
let searchBar = document.getElementById('searchButton');
searchBar.addEventLis
```
- Reviews
- [Merchant upload picture for new items](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
  - the `img.src = URL.createObjectURL(this.files[i]);` seems promising
  - credit: *developer.mozilla.org*
- Featured section for items

 ```js
 function featuredItem(){
     let range = allProducts.length
     let randomProduct = Math.round(Math.random()*range);
     let chosenItem = allProducts[randomProduct]

    targetIDattributetoSETnewValue('featuredName','textContent',chosenItem.name);
    targetIDattributetoSETnewValue('featuredImage','src',chosenItem.filePath;
    targetIDattributetoSETnewValue('featuredDescript','textContent',chosenItem.descript);
    targetIDattributetoSETnewValue('featuredPrice','textContent',chosenItem.price;

     let featuredItemName = document.getElementById('featuredName');
     featureItemName.textContent = chosenItem.name; 
     let featuredItemImage = document.getElementById('featuredImage');
     featuredItemImage.src = chosenItem.filePath;
     let featuredItemDescription = document.getElementById('featuredDescript');
     featuredItemDescription.textContent = chosenItem.descript;
     let featuredItemPrice = document.getElementById('featuredPrice');
     featuredItemPrice.textContent = chosenItem.price

 }

 function targetIDattributetoSETnewValue(elementBeingTargeted,whichAttributeIsBeingSet,toWhatValueitisSetTo){
     let targetEl = document.getElementById(elementBeingTargeted);
     targetEl[whichAttributeIsBeingSet]=towhatValueitisSetTo;

 }
 ```


- Have multiple merchants have their own store on page and website connects all together

## Functional Requirements
- Customers should be able modify cart
- Merchants can modify store

## Data Flow
- User lands on store page
- User continues adding items to cart until ready to check out
- User adjust and finalizes cart
- Merchant lands on store page
- Merchant is verified and switches to merchant view of store
- Merchant can adjust items for sale on page
- Merchant can check inventory due to change from sales

## [Prooblem Domain](assets/store-front.png)