const BASE_URL = "https://643e1144c72fda4a0becfbc4.mockapi.io/product"

function fetchDSSP(){
    axios({
        url: BASE_URL,
        method: 'GET'
    })
    .then(function(res){
        renderDSSP(res.data)
        console.log('res: ', res);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
}
fetchDSSP()