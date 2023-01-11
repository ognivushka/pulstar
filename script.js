//MOBILE MENU

               //variables
const btnNavEl = document.querySelector(".button-mobile"),
 headerEl = document.querySelector("header");

              //event listner
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
////////////////////////////////////////////////////////////////////////////////////
//SHOPING-LIST

              //variables
const products = document.querySelector('.shop-products'), //add products to DOM
shopingCartContent = document.querySelector('.shop-content tbody'),
clearCartBtn = document.querySelector('.clear-cart'),
productName = document.querySelector('.product-name');



               //event listners
loadEventListeners()
function loadEventListeners(){
  products.addEventListener('click', buyProduct)
  shopingCartContent.addEventListener('click', removeProduct)
  clearCartBtn.addEventListener('click', clearBtn)
  document.addEventListener('DOMContentLoaded', getFromLS)
}





                //functions
  function buyProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('add-to-cart')){
      const product = e.target
    // console.log(product);
    getProductInfo(product)
    }
   
  }

  function getProductInfo(product){
    const productInfo ={
      image: product.querySelector('img'),
      title: product.querySelector('.product-name').textContent,
      price: product.querySelector('.product-price').textContent,
      id: product.querySelector('div').getAttribute('data-id'),
    }
    addIntoCart(productInfo)
  }

  function addIntoCart(product){
    const row = document.createElement('tr');
    row.innerHTML =`
      <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>
            <a href='#' class="remove" data-id="${product.id}">X</a>
        </td>
      </tr>
    `;
    shopingCartContent.appendChild(row)
    saveIntoStorage(product)
  }

  function saveIntoStorage(product){
    let products= getProductsFromStorage();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products))
  }

  function getProductsFromStorage(){
    let products;
    if(localStorage.getItem('products')===null){
      products=[]
    }else{
      products = JSON.parse(localStorage.getItem('products'))
    }
    return products
  }

  function removeProduct(e){
    let product, productId;
    if(e.target.classList.contains('remove')){
      e.target.parentElement.parentElement.remove();
      product = e.target.parentElement.parentElement;
      productId = product.querySelector('a').getAttribute('data-id')
    }
    removeProductFromLS(productId)
  }

  function removeProductFromLS(id){
    let productsLS = getProductsFromStorage();
    productsLS.forEach(function(productLS, index){
      if(productLS.id === id){
        productsLS.splice(index,1)
      }
    })
    localStorage.setItem('products', JSON.stringify(productsLS))
  }

  function clearBtn(){
    while(shopingCartContent.firstChild){
      shopingCartContent.removeChild(shopingCartContent.firstChild)
    }
    clearLS()
  }

  function clearLS(){
    localStorage.clear()
  }

  function getFromLS(){
    let productsLS = getProductsFromStorage();
    productsLS.forEach(function(product){
      const row = document.createElement('tr');
      row.innerHTML = `
         <tr>
             <td>${product.title}</td>
             <td>${product.price}</td>
             <td>
             <a href='#' class="remove" data-id="${product.id}">X</a>
             </td>
         </tr>
      `;
    shopingCartContent.appendChild(row)
    })
  }