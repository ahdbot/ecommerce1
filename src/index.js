window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))
document.querySelectorAll('.add-to-cart-btn').forEach(item => {
item.addEventListener("click",() => {

alert('اضيف المنتج الى عربة الشراء');
})

})

console.log("أهلا بكم في متجر عربي")
console.log("أهلا بكم في متجر عربي")