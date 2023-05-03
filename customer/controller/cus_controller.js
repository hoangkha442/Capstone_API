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
          <button type="button" class="btn btn-block w-50" id='btnAddToCart' onclick="btnAddToCart(${sp.id})" >Add to cart</button>
        </div>
      </div>
    </div>`;
      contentHTML = contentHTML + contentTr;
      // console.log('contentHTML: ', contentHTML);
    }
    document.getElementById("phoneList").innerHTML = contentHTML;
  }

  function renderCardList(spArr){
    var cartHTML = ''
    for (var i = 0; i < spArr.length; i++) {
      var cart = spArr[i];
      var contentTr = `
      <div class="product">
    <div class="product__1">
      <div class="product__thumbnail">
        <img class='img-fluid pic' src="${cart.img}" alt="">
      </div>
      <div class="product__details">
        <div style="margin-bottom: 8px;"><b>${cart.name}</b></div>
        <div style="font-size: 90%;">Screen: <span class="tertiary">${cart.screen}</span></div>
        <div style="font-size: 90%;">Back Camera: <span class="tertiary">${cart.backCamera}</span></div>
        <div style="font-size: 90%;">Front Camera: <span class="tertiary">${cart.frontCamera}</span></div>
        <div style="margin-top: 8px;"><a href="#!" onclick="btnRemove('')">Remove</a></div>
      </div>
  </div>
  <div class="product__2">
    <div class="qty">
      <span><b>Quantity:</b> </span> &nbsp; &nbsp;
      <span class="minus bg-dark" onclick="btnMinus('4')">-</span>
      <span id='quantity' class="quantityResult mx-2"></span>
      <span class="plus bg-dark" onclick="btnAdd('4')">+</span>
    </div>
    <div class="product__price"><b>$${cart.price}</b></div>
  </div>
</div>
      `;
      cartHTML = cartHTML + contentTr;
      // console.log('cartHTML: ', cartHTML);
    }
    document.getElementById("cartList").innerHTML = cartHTML;
  }
  
  function layThongTinTuForm(cart) {
    var name = cart.name;
    var price = document.querySelector("#price");
    var screen = document.querySelector("#screen");
    var backCamera = document.querySelector("#backCam");
    var frontCamera = document.querySelector("#frontCam");
    var img = document.querySelector("#img");
    var desc = document.querySelector("#desc");
    var type = document.querySelector("#type");
    var cart = new Cart(
      name,
      price,
      screen,
      backCamera,
      frontCamera,
      img,
      desc,
      type
    );
    return cart
  }
  function showThongTinLenForm(cart) {
    document.querySelector("#name").value = cart.name;
    document.querySelector("#price").value = cart.price;
    document.querySelector("#screen").value = cart.screen;
    document.querySelector("#backCam").value = cart.backCamera;
    document.querySelector("#frontCam").value = cart.frontCamera;
    document.querySelector("#img").value = cart.img;
    document.querySelector("#desc").value = cart.desc;
    document.querySelector("#type").value = cart.type;
  }

  function batLoading() {
    document.getElementById("loading").style.display = "flex";
  }
  
  function tatLoading() {
    document.getElementById("loading").style.display = "none";
  }
  