function renderDSSP(spArr) {
    var contentHTML = "";
    for (var i = 0; i < spArr.length; i++) {
      var sp = spArr[i];
      // sp là item trong array dssp
      var contentTr = `<div class="col-lg-3 col-md-6">
      <div class="card text-black h-100">
      <div class="content-overlay"></div>
      <img class='img-fluid pic' src="${sp.img}" alt="">
        <div class="content-details fadeIn-top">
        <h3 class="pb-5">Specifications</h3>
              <div class="d-flex justify-content-start py-1">
            <span class="text-light"><b>Screen:</b></span>
            <span class="text-light"> ${sp.screen}</span>
          </div>
          <div class="d-flex  py-1 text-left">
            <span class="text-light"><b>Back Camera:</b> ${sp.backCamera}</span>
          </div>
          <div class="d-flex justify-content-start py-1">
            <span class="text-light"><b>Front Camera:</b> ${sp.frontCamera}</span>
          </div>  
        </div>
        <div class="card-body">
          <div class="text-center">
            <h5 class="card-title pt-3">${sp.name}</h5>
            <span class="text-muted mb-2">$${sp.price}</span>
            <span class="text-danger"><s>$${sp.price + 300}</s></span>
          </div>
          <div class="mt-3 brand-box text-center">
            <span>${sp.type}</span>
          </div>
          <div class="d-flex justify-content-start pt-3">
            <span><b>Description:</b>${sp.desc}</span>
          </div>
          <div class="d-flex justify-content-between pt-3">
            <div class="text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <span class="text-success"><b>In Stock</b></span>
          </div>
          <button type="button" class="btn btn-block w-50" onclick="btnAddToCart()">Add to cart</button>
        </div>
      </div>
    </div>`;
      contentHTML = contentHTML + contentTr;
      console.log('contentHTML: ', contentHTML);
    }
    document.getElementById("phoneList").innerHTML = contentHTML;
  }
  
  function layThongTinTuForm() {
    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var screen = document.querySelector("#screen").value;
    var backCamera = document.querySelector("#backCam").value;
    var frontCamera = document.querySelector("#frontCam").value;
    var img = document.querySelector("#img").value;
    var desc = document.querySelector("#desc").value;
    var type = document.querySelector("#type").value;
  
    var sp = new Product(
      name,
      price,
      screen,
      backCamera,
      frontCamera,
      img,
      desc,
      type
    );
    return sp;
  }
  
  function showThongTinLenForm(sp) {
    document.querySelector("#name").value = sp.name;
    document.querySelector("#price").value = sp.price;
    document.querySelector("#screen").value = sp.screen;
    document.querySelector("#backCam").value = sp.backCamera;
    document.querySelector("#frontCam").value = sp.frontCamera;
    document.querySelector("#img").value = sp.img;
    document.querySelector("#desc").value = sp.desc;
    document.querySelector("#type").value = sp.type;
  }
  function batLoading() {
    document.getElementById("loading").style.display = "flex";
  }
  
  function tatLoading() {
    document.getElementById("loading").style.display = "none";
  }
  