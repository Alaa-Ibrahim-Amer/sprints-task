
let data = {
                "sub_total_price": 100.0,
                "shipping": 10.0,
                "total_price": 110.0,
                "user_id": "6346ac23bb862e01fe4b6535",
                "order_date": "2022-01-01",
                "order_details": [
                    {
                        "product_id": "6346c15ea060efd7cae40589",
                        "price": 25,
                        "qty": 2
                    },
                    {
                        "product_id": "6346c186a060efd7cae4058b",
                        "price": 25,
                        "qty": 2
                    }
                ],
                "shipping_info": {
                    "first_name": "Alaa",
                    "last_name": "Ibrahim*****************************************************************",
                    "email": "ramymibrahim@yahoo.com",
                    "mobile_number": "01092812848",
                    "address1": "20 M A",
                    "address2": "",
                    "country": "Egypt",
                    "city": "Cairo",
                    "state": "Zamalek",
                    "zip_code": "11211"
                }
            };

const requestbody = fetch("http://localhost:5000/api/orders", {
  method: "POST",
  headers: {'Content-Type': 'application/json', 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM0NmFjMjNiYjg2MmUwMWZlNGI2NTM1IiwiZW1haWwiOiJyYW15bWlicmFoaW1AeWFob28uY29tIiwiaWF0IjoxNjcwNjQxOTY2LCJleHAiOjE2NzA2NDkxNjZ9.u_HmOR4c71ryX687-TboGdECBtgpl1r-q7XqQsQp3YU'}, 
  body: JSON.stringify(data)
})

const PpostOrder = async ()=>{
    const response_order = await requestbody()
    response_order.json().then(data => {
        console.log(data);
      });
};

