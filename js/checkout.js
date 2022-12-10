const order = JSON.parse(localStorage.getItem("Order") || "[]");

const showOrderTotal = ()=>{
    let products = order.order_details;
    products.forEach(element => {
        document.getElementById("order-products").innerHTML += showProduct(element.product);
    });
    document.getElementById("order-subtotal").innerHTML += showSubToatal(order.sub_total_price);
    document.getElementById("order-shipping").innerHTML += showshipping(order.shipping);
    document.getElementById("order-total").innerHTML += showtotal(order.total_price);
    
};

const showProduct=(p)=>{
    return`<div class="d-flex justify-content-between">
    <p>${p.name}</p>
    <p>$${p.price}</p>
   </div>`
};

const showSubToatal=(p)=>{
    return`<h6>$${p}</h6>`
};
const showtotal=(p)=>{
    return`<h5>$${p}</h5>`
};
const showshipping=(p)=>{
    return`<h6 class="font-weight-medium">$${p}</h6>`
};

showOrderTotal();




