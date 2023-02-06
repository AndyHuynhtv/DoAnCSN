
function openapp() {
  if (document.getElementById('frame-info-phone')) {

      if (document.getElementById('frame-info-phone').style.display == 'none') {
          document.getElementById('frame-info-phone').style.display = 'block';
          document.getElementById('myDIV').style.display = 'none';
      }
      else {
          document.getElementById('frame-info-phone').style.display = 'none';
          document.getElementById('myDIV').style.display = 'block';
      }
  }
}


function closeapp() {
  if (document.getElementById('myDIV')) {

      if (document.getElementById('myDIV').style.display == 'none') {
          document.getElementById('myDIV').style.display = 'block';
          document.getElementById('frame-info-phone').style.display = 'none';
      }
      else {
          document.getElementById('myDIV').style.display = 'none';
          document.getElementById('frame-info-phone').style.display = 'block';
      }
  }
}


function openPhoneColorBlack() {
        document.getElementById('frame-inside').style.display = 'block';
        document.getElementById('frame-inside1').style.display = 'none';
        document.getElementById('frame-inside2').style.display = 'none';
        document.getElementById('frame-inside3').style.display = 'none';
}
function openPhoneColorWhite() {
    document.getElementById('frame-inside').style.display = 'none';
    document.getElementById('frame-inside1').style.display = 'block';
    document.getElementById('frame-inside2').style.display = 'none';
    document.getElementById('frame-inside3').style.display = 'none';
}
function openPhoneColorPurple() {
    document.getElementById('frame-inside').style.display = 'none';
    document.getElementById('frame-inside1').style.display = 'none';
    document.getElementById('frame-inside2').style.display = 'block';
    document.getElementById('frame-inside3').style.display = 'none';
}

function openPhoneColorGold() {
    document.getElementById('frame-inside').style.display = 'none';
    document.getElementById('frame-inside1').style.display = 'none';
    document.getElementById('frame-inside3').style.display = 'block';
    document.getElementById('frame-inside2').style.display = 'none';
}

function over(){
    
}



// const btn = document.querySelectorAll("button.group-show-main");
// console.log(btn);

// function updateTotalItem(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const p = arr[i];
//         total += p.count;
//     }
//     return total;
// }

// function c(x){
//     var boxsp = x.parentElement.children;
//     alert(boxsp[2].innerText);
// }


// function showcart(){
//     var x = document/getElementById("showcart");
//     if(x.style.display == "none"){
//         x.style.display == "block"
//     }else{
//         x.style.display == "none"
//     }
// }


// function testshow(x){

// }
// Tạo giỏ hàng và chức năng

// var giohang = new Array();
// function themgiohang(x){
//     var boxsp = x.parentElement.children;
//     var hinh = boxsp[0].children[0].src;
//     var gia = boxsp[2].innerText;
//     var ten = boxsp[0].children[2].innerText;
//     var soluong = 1;
//     var sp = new Array(hinh, gia, ten, soluong);
    
//     giohang.push(sp);
//     showcountsp();
//     sessionStorage.setItem("giohang",JSON.stringify(giohang));

// }



// function showcountsp(){
//     document.getElementById("countsp").innerHTML = giohang.length;
// }


// function showmycart(){
//     var ttgh = "";
//     var tong = 0;
//     for(let i = 0; i < giohang.length; i++){
//         tong += giohang[i][2];
//         ttgh += '<tr>'+
//         '<td>'+(i+1)+'</td>'+
//         '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
//         '<td>'+giohang[i][1]+'</td>'+
//         '<td>'+giohang[i][2]+'</td>'+
//         '<td>'+
//             '<div>1</div>'+
//         '</td>'+
//     '</tr>';
//     }
//     ttgh += '<tr>'+
//     '<th colspan="5">Tổng đơn hàng</th>'+
//     '<th>'+
//         '<div>'+tong+'</div>'+
//     '</th>'+
//     '</tr>';
//     document.getElementById("mycart").innerHTML = ttgh;
// }


// function showgiohang_trangthanhtoan(){
//     var gh = sessionStorage.getItem("giohang");
//     var giohang = JSON.parse(gh);
//     var ttgh = "";
//     var tong = 0;
//     for(let i = 0; i < giohang.length; i++){
//         tong += giohang[i][2];
//         ttgh += '<tr>'+
//         '<td>'+(i+1)+'</td>'+
//         '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
//         '<td>'+giohang[i][1]+'</td>'+
//         '<td>'+giohang[i][2]+'</td>'+
//         '<td>'+
//             '<div>1</div>'+
//         '</td>'+
//     '</tr>';
//     }
//     ttgh += '<tr>'+
//     '<th colspan="5">Tổng đơn hàng</th>'+
//     '<th>'+
//         '<div>'+tong+'/div>'+
//     '</th>'+
//     '</tr>';
//     document.getElementById("mycart").innerHTML = ttgh;
// }



// Chuyển giá trị tiền tệ
// function show(x){
// x = document.getElementsByClassName("price").innerText;
// const formatter = new Intl.NumberFormat('vi-VN', {
//         style: 'currency',
//         currency: 'VND',
//       })
//     formatter.format(x);
// }

// const btn = document.querySelectorAll("button.body");
// console.log(btn);


  

