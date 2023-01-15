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
const products = document.querySelector('.shop-products'), 
shopingCartContent = document.querySelector('.shop-content tbody'),
clearCartBtn = document.querySelector('.clear-cart')

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
/////////////////////////////////////////////////////////////////////////
//CAROUSEL OF FOTOS
//variables
 const buttons = document.querySelectorAll('[data-galery-button]')

 //event listners
 buttons.forEach(function(button){
   button.addEventListener('click', ()=>{
     const offset = button.dataset.galeryButton === 'next' ? 1: -1
     const slides = button.closest('[data-galery]').querySelector('[data-slides]')

     const activeSlide = slides.querySelector('[data-active]')
     let newIndex = [...slides.children].indexOf(activeSlide)+offset
     if(newIndex < 0) newIndex = slides.children.length -1;
     if(newIndex >= slides.children.length) newIndex = 0


     slides.children[newIndex].dataset.active = true
     delete activeSlide.dataset.active
   })
 })
