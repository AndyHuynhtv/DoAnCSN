document.getElementsByClassName("shopping-cart-div").style.display = "none";
var agiohang = new Array()
function shoppingcart(x){
    var boxsp = x.parentElement.children;
  
    boxsp[2].children[0].innerText =  boxsp[2].children[0].innerText.replace(".", "") ;
    boxsp[2].children[0].innerText =  boxsp[2].children[0].innerText.replace(".", "") ;
  
    // alert(boxsp[2].children[0].innerText);
    var aten = boxsp[0].children[2].innerText;
    var agia = parseInt(boxsp[2].children[0].innerText);
    var ahinh = boxsp[0].children[0].src;
    var asoluong = 1;

    var asp = new Array(ahinh, agia, aten, asoluong);
    agiohang.push(asp);
    alert(asp);
}




