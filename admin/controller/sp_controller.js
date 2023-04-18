function renderDSSP(spArr) {
  var contentHTML = "";
  for (var i = 0; i < spArr.length; i++) {
    var sp = spArr[i];
    // sp là item trong array dssp
    var contentTr = ` <tr>
            <td>${sp.id}</td>
            <td>${sp.name}</td>
            <td>${sp.price}</td>
            <td><img class='img-fluid pic' src="${sp.img}" alt=""></td>
            <td>${sp.desc}</td>
            <td>
               <button onclick="xoaSP(${sp.id})" class="btn btn-danger" >Xoá</button>
               <button 
               data-toggle="modal"
               data-target="#exampleModalCenter" onclick="suaSP(${sp.id})"
               class="btn btn-secondary" >Sửa</button>
            </td>
    </tr> `;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tablePhone").innerHTML = contentHTML;
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
