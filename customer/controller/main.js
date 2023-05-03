const BASE_URL = "https://643e1144c72fda4a0becfbc4.mockapi.io/product";
const CART_URL = "https://644731037bb84f5a3e39c15e.mockapi.io/cart";
const cart = [];
const cartItem = [];

// DANH SÁCH SẢN PHẨM
function fetchDSSP() {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (res) {
      renderDSSP(res.data);
      var prd = res.data;
      console.log("prd: ", prd);
      for (var i = 0; i < prd.length; i++) {
        cart.push(prd[i]);
      }
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
fetchDSSP();

function fetchCart() {
  axios({
    url: CART_URL,
    method: "GET",
  })
    .then(function (res) {
      console.log(res.data);
      renderCardList(res.data);
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
fetchCart();

// ADD CARD LIST
function btnAddToCart(id) {
  //   debugger
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      var item = cart[i];
      cartItem.push(item);
      console.log("cartItem: ", cartItem);
      break;
    }
  }
  axios({
    url: CART_URL,
    method: "POST",
  })
    .then(function (res) {
      res.data = cartItem;
      renderCardList(res.data);
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
fetchCart();

// const findItemById = (arrCart, id) => {
//     debugger
//     let item;
//     arrCart.forEach((ele) => {
//       if (ele.Product.id == id) {
//         item = ele;
//         return;
//       }
//     });
//     console.log(item);
//   };

// function findId(id){
//     console.log('id: ', id);
// }
