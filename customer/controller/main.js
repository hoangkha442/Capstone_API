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

function selectOption(){
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then(function (res) {
      var selectList = document.getElementById("selectList").value;
      console.log("selectList: ", selectList);
      var result = cart.filter(function(item){
            if (item.type === selectList) {
              return item.type === selectList
            }else{
              return cart
            }
      })
      renderDSSP(result)
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
selectOption()



function fetchCart() {
  axios({
    url: CART_URL,
    method: "GET",
  })
    .then(function (res) {
      renderCardList(res.data);
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
fetchCart();

// ADD CARD LIST
// function btnAddToCart(id) {
//   //   debugger
//   for (var i = 0; i < cart.length; i++) {
//     if (cart[i].id == id) {
//       var item = cart[i];
//       cartItem.push(item);
//       console.log("cartItem: ", cartItem);
//       break;
//     }
//   }
//   axios({
//     url: CART_URL,
//     method: "POST"
//   })
//     .then(function (res) {
//       res.data = cartItem;
//       renderCardList(res.data);
//     })
//     .catch(function (err) {
//       console.log("err: ", err);
//     });
// }
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
  console.log("get data: ", cartItem);
  axios({
    url: CART_URL,
    method: "POST",
    data: cartItem[0],
  })
    .then(function (res) {
      res.data = cartItem;
      // console.log("get data");
      renderCardList(res.data);
    })
    .catch(function (err) {
      console.log("err: ", err);
    });
}
fetchCart();
