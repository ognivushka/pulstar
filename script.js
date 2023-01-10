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
clearCartBtn = document.querySelector('.clear-cart')



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
    }
    getCourseInfo()
  }

  function getCourseInfo(product){
    const productInfo ={
      image: product.querySelector('img').src,
      title: product.querySelector('.product-name').textContent,
      price: product.querySelector('.product-price').textContent,
      id: product.querySelector('a').getAttribute('data-id'),
    }
    console.log(productInfo);
  }