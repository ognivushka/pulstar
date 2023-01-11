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
productName = document.querySelector('.product-name')



               //event listners
loadEventListeners()
function loadEventListeners(){
  products.addEventListener('click', buyProduct)
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
    `;
    shopingCartContent.appendChild(row)
  }