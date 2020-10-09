var cart =Localstorage.get("cart");
if(cart==='null'){
    var count =0;
}else{
    var count =JSON.parse(cart).length;
}

$(".fa.fa-shopping-bag").siblings().html(count);