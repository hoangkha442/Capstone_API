const BASE_URL = "https://643e1144c72fda4a0becfbc4.mockapi.io/product"
const CART_URL = 'https://644731037bb84f5a3e39c15e.mockapi.io/cart'

function fetchDSSP(){
    axios({
        url: BASE_URL,
        method: 'GET'
    })
    .then(function(res){
        renderDSSP(res.data)
        console.log(res.data);
        // console.log('res: ', res);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
}
fetchDSSP()

function fetchCart(){
    axios({
        url: CART_URL,
        method: 'GET'
    })
    .then(function(res){
        renderCardList(res.data)
        console.log('res: ', res);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
}
fetchCart()

// add cart_list
function btnAddToCart(id){
    // debugger
    var dataCart = fetchDSSP()
    axios({
        url: CART_URL,
        method: 'POST',
        data: dataCart
    })
    .then(function(res){
        console.log('res: ', res.data);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
}

