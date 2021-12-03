function wishl(){
    var a = document.getElementById("det");
    var b = document.getElementsByClassName("c11").value;
    document.write(a);
}
let carts = document.querySelectorAll(".add-cart");

let products = [{
    name:"shirt1" ,
    tag: "shirt1" , 
    price: 549,
    inCart:0

},
{
    name:"shirt2" ,
    tag: "shirt2" , 
    price: 799,
    inCart:0

},
{
    name:"Wrogn" ,
    tag: "shirt3" , 
    price: 1199,
    inCart:0

},
{name: "Roadster",tag:"shirt4",price: 450,  inCart:0},{name: "HRX",tag:"shirt5",price: 1380,  inCart:0},{name: "ether",tag:"shirt6",price: 649,  inCart:0},{name: "Roadster",tag:"shirt7",price: 449,  inCart:0},{name: "HRX",tag:"shirt8",price: 1499,  inCart:0},{name: "HRX",tag:"jean1",price: 1499,  inCart:0},{name: "HRX",tag:"jean2",price: 1499,  inCart:0},{name: "HRX",tag:"jean3",price: 1499,  inCart:0},{name: "HRX",tag:"jean4",price: 1499,  inCart:0},{name: "HRX",tag:"jean5",price: 1499,  inCart:0},{name: "HRX",tag:"jean6",price: 1499,  inCart:0},{name: "HRX",tag:"jean7",price: 1499,  inCart:0},{name: "HRX",tag:"jean8",price: 1499,  inCart:0}
]

for(let i = 0; i < carts.length ; i++){
   carts[i].addEventListener("click",() => {
       cartNumber(products[i]);
       totalCost(products[i]);
   })
}
function onLoadCartNumber(){
    let proNumbers = localStorage.getItem("cartNumber");
if(proNumbers){
    document.querySelector(".cart span").textContent =proNumbers ;
}

}
function cartNumber(products){
   
    let proNumbers = localStorage.getItem("cartNumber");

    proNumbers = parseInt(proNumbers);

    if(proNumbers){
        localStorage.setItem("cartNumber" ,proNumbers + 1 );
        document.querySelector(".cart span").textContent =proNumbers + 1;
    }

    else{
        localStorage.setItem("cartNumber" ,1);
        document.querySelector(".cart span").textContent = 1;
    }
setItems(products);
}
function setItems(products){
    // console.log("my product is", products);
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
  
if(cartItems != null){
    if(cartItems[products.tag] == undefined){
        cartItems =  {
            ...cartItems,
            [products.tag]:products
        }
        }
        cartItems[products.tag].inCart +=1;
    }
    

else
{
    products.inCart =1;
    cartItems={
        [products.tag]:products
    }

}

  
     localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
function totalCost(products){
    // console.log("the product price is ",products.price);
     let cartCost = localStorage.getItem("totalCost");
    //  cartCost = parseInt(cartCost);
     console.log("my cartcost is ",cartCost);
     console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost+ products.price );
    }
    else{
        localStorage.setItem("totalCost", products.price );
    }
    }
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

 let proContainer = document.querySelector(".products");
console.log(cartItems);
    if(cartItems &&  proContainer){
        proContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            proContainer.innerHTML += `
            <div class = "product">
            <i class="far fa-times-circle"></i>
            <img src= "./imagemen/${item.tag}.webp">
            <span>${item.name}</span>
           </div>
           <div class = "price">${item.price} </div>
           <div class = "quantity">
           <i class="fas fa-arrow-circle-left"></i>
           <span>${item.inCart}</span>
           <i class="fas fa-arrow-circle-right"></i>
           </div>`;
        })

    }
}

// const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click",function(){
// let hexColor = '#';
// for(let i=0 ; i<6;i++){
//     hexColor += hex[getranNumber()];
// }
// color.textContent = hexColor;
// document.body.style.backgroundColor = hexColor;

// })
// function getranNumber(){
//     return Math.floor(Math.random()*hex.length);
// }


onLoadCartNumber();
displayCart();
