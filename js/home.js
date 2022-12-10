
const addSingleProductToCart = (product) => {
  console.log(product)
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
 
};