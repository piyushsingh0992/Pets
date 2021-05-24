export function findProduct(ProductArray, productId) {
  
  return ProductArray.find((item) => item.id === productId);
 
}

export function isPresentInCart(cart, productId){
  
  let pre= cart.find(item=>{
    return item.id===productId});
   
  return pre;


 
}

export function recommendations(ProductArray, productId) {
  let recommendedArray = [];
  if (productId) {
    let currentProduct = findProduct(ProductArray, productId);
    recommendedArray = ProductArray.filter((item) => {
      if (
        item.outOfStock === false &&
        item.tags.animal === currentProduct.tags.animal &&
        item.tags.category === currentProduct.tags.category &&
        item.id != productId
      ) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    recommendedArray = ProductArray.filter((item) => {
      if (item.outOfStock === false && item.fastDelivery === true) {
        return true;
      } else {
        return false;
      }
    });
  }

  return recommendedArray.slice(0,4);
}
