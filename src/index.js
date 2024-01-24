
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("أضيف المُنتج إلى عربة الشراء");
    })
})



document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active');
    })
})
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll(".size-option").forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active');  
    
    })
})

// حساب سعر اجمالي المنتج
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change',() => {
    const newQuantity = item.value;
    const parent = item.closest('[data-product-info]')
    const pricePerUnit =  parent.getAttribute('data-product-price');
    const totalPriceForProduct = newQuantity * pricePerUnit;
    parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$"
        

    let totalpriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
             const pricePerUnit = product.getAttribute('data-product-price');
             const quantity = product.querySelector('[data-product-quantity]').value
             const totalpriceForProduct = pricePerUnit * quantity

             totalpriceForAllProduct = totalpriceForAllProduct + totalpriceForProduct;
    })

    document.getElementById('total-price-for-all-product').innerHTML = totalpriceForAllProduct + '$'
     })

})

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
item.addEventListener('click',() => {
item.closest('[data-product-info]').remove()
calculateTotalPrice ();
})

})
// حساب السعر الاجمالي

function calculateTotalPrice ()
{
    let totalpriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
             const pricePerUnit = product.getAttribute('data-product-price');
             const quantity = product.querySelector('[data-product-quantity]').value
             const totalpriceForProduct = pricePerUnit * quantity
    
             totalpriceForAllProduct = totalpriceForAllProduct + totalpriceForProduct;
    })
    
    document.getElementById('total-price-for-all-product').innerHTML = totalpriceForAllProduct + '$'
}

document.getElementById("product-quantity")
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear();




