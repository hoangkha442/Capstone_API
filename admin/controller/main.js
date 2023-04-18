var idSelected = null
const BASE_URL = "https://643e1144c72fda4a0becfbc4.mockapi.io/product"
function fetchDSSP() {
//   batLoading();
  axios({
    url: "https://643e1144c72fda4a0becfbc4.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
    //   tatLoading();
      // gọi function renderDSSV trong then() => nếu gọi ngoài then sẽ ko có dữ liệu đem đi render
    //   debugger
      renderDSSP(res.data)
    })
    .catch(function (err) {
    //   tatLoading();
      console.log("err", err);
    });
}
fetchDSSP();

// DELETE
function xoaSP(id){
  batLoading()
    axios({
        url: BASE_URL + '/' + id,
        method: 'DELETE'
    })
    .then(function(res){
      tatLoading()
        console.log('res',res);
        fetchDSSP()
        Toastify({
          text: "Xoá sản phẩm thành công",
          offset: {
            x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        }).showToast();
    })
    .catch(function(err){
        console.log('err: ', err);
        tatLoading()
    })
}
// ADD
document.querySelector('#btnAddPhone').onclick = function(id){
  batLoading()
  var dataSp = layThongTinTuForm();
  console.log('dataSp: ', dataSp);
  axios({
    url: BASE_URL,
    method: 'POST',
    data: dataSp
  })
  .then(function(res){
    tatLoading()
    console.log('res: ', res);
    Toastify({
      text: "Thêm sản phẩm thành công",
      offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    }).showToast();
    fetchDSSP()
  })
  .catch(function(err){
    tatLoading()
    // console.log('err: ', err);

  })
}

//EDIT
function suaSP(id){
  idSelected = id
  axios({
    url:`https://643e1144c72fda4a0becfbc4.mockapi.io/product/${id}`,
    method: "GET",
  })
  .then(function(res){
    showThongTinLenForm(res.data)
  })
  .catch(function(err){
    console.log(err);
  })
}

// UPDATE

document.querySelector('#btnUpdate').onclick = function(id){
  batLoading()
  axios({
    url: `${BASE_URL}/${idSelected}`,
    method: 'PUT',
    data: layThongTinTuForm()
  })
  .then(function(res){
    Toastify({
      text: "Cập nhật sản phẩm thành công",
      offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    }).showToast();
    tatLoading()
    fetchDSSP()
  })
  .catch(function(err){
    tatLoading()
    console.log(err);
  })
}
