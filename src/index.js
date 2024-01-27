
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';
import './sass/custom.scss';
import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";
import './sass/style.scss'

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("أضيف المُنتج إلى عربة الشراء");
    })
})



document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
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



const citiesByCountry = {
    sa : ['جدة','الرياض','مكة'],
    eg : ['القاهرة','الاسكندرية'],
    jo : ['الزرقاء' , 'عمان'],
    sy : ['حلب','دمشق']
}

document.querySelectorAll('select[name="country"]').forEach(item => {

item.addEventListener('change',() =>{
   const country = item.value


   const cities = citiesByCountry[country]

   document.querySelectorAll('#paymentcities option').forEach(option => option.remove())


   const firstOption = document.createElement('option')
   const optionText = document.createTextNode('اختر المدينة')
   firstOption.appendChild(optionText)
   firstOption.setAttribute('value', '')
   firstOption.setAttribute('disabled', 'true')
   firstOption.setAttribute('selected', 'true')


   const city_options = document.getElementById('paymentcities')
   city_options.appendChild(firstOption)


   cities.forEach(city => {
    const newOption = document.createElement('option')
    const optionText = document.createTextNode(city)
    newOption.appendChild(optionText)
    newOption.setAttribute('value', city)
    city_options.appendChild(newOption)
})
})


})
// اخفاء واظهار البيانات الائتمانية

document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
item.addEventListener('change' , () => {

    const paymentmathod = item.value;


    const creditcardinput = document.querySelectorAll('#credit_card_info input');

    if (paymentmathod === 'on_delivery') {
        creditcardinput.forEach(input => {
          input.style.display = 'none'

        })
    }

    else {
        creditcardinput.forEach(input => {
            input.style.display = 'block'
  
          })
    }

})


})




document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear();