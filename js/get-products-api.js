const request = fetch("http://localhost:5000/api/products/");
const getData = async () => {
  let response = await request;
  let data = await response.json();
  addFeaturedProducts(data.data)
};

const addFeaturedProducts=(data)=>{
    data.forEach(element => {
        document.getElementById("featuredProducts").innerHTML += showproduct(element);
    });
}

const showproduct = (product)=>{
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="${
        product.image
      }" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href="#" onclick="addSingleProductToCart({'id':'${product._id}','name':'${product.name}','image':'${product.image}','price':'${product.price}'})"><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href="#"><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${product.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$${product.price}</h5><h6 class="text-muted ml-2"><del>$${product.price - product.price*product.discount}</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(${product.rating_count})</small>
                        </div>
                    </div>
                </div>
            </div>`

};
getData();