const localOrder = JSON.parse(localStorage.getItem("Order") ?? "[]");
const details=[];
 localOrder.order_details.forEach(element => {
    details.push({"product_id":element.id,"price": Number(element.price),
    "qty": element.quantity});  
});

let login = async ()=>{
    let login_re = await fetch("http://localhost:5000/api/users/login",{method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({
        "email":"ramymibrahim@yahoo.com",
        "password":"123456"
    })
    })
    const response_loged = await login_re.json();
    let token = response_loged.token;
    localStorage.setItem("token", JSON.stringify(token));
    return response_loged.token;
    };
     login()

const postOrder = async ()=>{
    let data = {
        "sub_total_price": localOrder.sub_total_price,
        "shipping": localOrder.shipping,
        "total_price": localOrder.total_price,
        "user_id": "6346ac23bb862e01fe4b6535",
        "order_date": "2022-01-01",
        "order_details": details,
        "shipping_info": {
            "first_name": document.getElementById("first_name").value,
            "last_name": document.getElementById("last_name").value,
            "email": document.getElementById("email").value,
            "mobile_number": document.getElementById("mobile_number").value,
            "address1": document.getElementById("address1").value,
            "address2": document.getElementById("address2").value,
            "country": document.getElementById("country").value,
            "city": document.getElementById("city").value,
            "state": document.getElementById("state").value,
            "zip_code":document.getElementById("zip_code").value
        }
    };
   let request= await fetch("http://localhost:5000/api/orders", {
  method: "POST",
  headers: {"Content-Type": "application/json", "x-access-token": localStorage.getItem("token").replaceAll('"', '') }, 
  body: JSON.stringify(data)
})
let request1 =await request.json();

        console.log(request1);
     
};
