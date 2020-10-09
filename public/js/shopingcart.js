/**
 * To control the shoppong cart.
 */
var cartcontrol = (function () {

    //global variables
    var pub = {};
    var products = [];
    pub.updateQuantity= async function(){
        console.log(products);
        var total = 0;
        for(var i = 0; i<products.length;i++){
            var use = "#"+i+"quantity";
            console.log($(use).val());
            total = total +($(use).val()*products[i]);
            var tot = "#"+i+"total";
            $(tot).html("");
            $(tot).append($(use).val()*products[i]);
        }
        $("#subtotal").html("");
        $("#total").html("");
        $("#subtotal").append("$"+total);
        $("#total").append("$"+total);
    }

    pub.removeProduct = function(val){
        var values = Localstorage.get("cart");
        console.log(val);
        var cart= JSON.parse(values);
        for (var i =0; i< cart.length; i++) {
            console.log(cart[i].pid);
            if (parseInt(cart[i].pid) === val) {
                cart.splice(i, 1);
            }
        }
        Localstorage.clear("cart");
        //Localstorage.clear("cart");
        Localstorage.set("cart", JSON.stringify(cart));
        document. location. reload();
    }

    //set  drop down list to database variables
    pub.setup = function () {
        var result =Localstorage.get("cart");

        var value = Localstorage.get("cart");

        if(value===null || value ==="null" || value===""){
          //cart is empty
        }else{
           
            console.log(value);

            cart= JSON.parse(value);
            //add new item to cart
           
            //clear cookie
            var total = 0;
           for(var i =0;i < cart.length;i++){
            console.log(cart[i]);
            var p = cart[i];

                total = total + parseInt(p.unit_price);
                products.push(p.unit_price);
                var use = i+"quantity"
               var totProduct = i+"total"
            makeHTML(p.url,p.name,p.price,'1','test', p.unit_price,use, totProduct, p.pid);
           }
           //console.log(products);
           $("#subtotal").append("$"+total);
            $("#total").append("$"+total);
        }



        // $('#shoping__cart__items').append( 
        //     ' <tr> <td class="shoping__cart__item"> <img src="img/cart/cart-1.jpg" alt=""><h5>Vegetable’s Package</h5> </td>'+
        //     ' <td class="shoping__cart__price">$55.00</td>'+
        //     '<td class="shoping__cart__quantity"><div class="quantity"><div class="pro-qty"> <input type="text" value="1"> </div></div></td>'+
        //     '<td class="shoping__cart__total"> $110.00</td>'+
        //     ' <td class="shoping__cart__item__close"><span class="icon_close"></span> </td>'+
        // '</tr>'
        // );


        
        
    };

    function makeHTML(url,name,price,quantity,total, unit_price, cartProductQuan, totalPoint, num){
        $('#shoping__cart__items').append( 
            ' <tr> <td class="shoping__cart__item"> <img src="'+url+'" alt=""><h5>'+name+'</h5> </td>'+
            ' <td class="shoping__cart__price">'+price+'</td>'+
            '<td class="shoping__cart__quantity"><div class="quantity"><div class="pro-qty"> <input id ='+cartProductQuan+' type="text" value="'+quantity+'" > </div></div></td>'+
            '<td class="shoping__cart__total" id = '+totalPoint+'> $'+unit_price+'</td>'+
            ' <td class="shoping__cart__item__close"><button class="icon_close" onclick="cartcontrol.removeProduct('+num+')"></button> </td>'+
            '<td><h4 hidden>'+unit_price+'</h4></td>'+
        '</tr>'

        );
    }


    return pub;

}());


$(document).ready(cartcontrol.setup);

// $(".fa-shopping-cart").click(function(){
//     alert($(this).parent().parent().parent().parent().siblings().find('h6').text());
//    });
 
 //   <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
 //                     <div class="featured__item">
 //                         <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
 //                             <ul class="featured__item__pic__hover">
 //                                 <li><a href="#"><i class="fa fa-heart"></i></a></li>
 //                                 <li><a href="#"><i class="fa fa-retweet"></i></a></li>
 //                                 <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
 //                             </ul>
 //                         </div>
 //                         <div class="featured__item__text">
 //                             <h6><a href="#">Crab Pool Security</a></h6>
 //                             <h5>$30.00</h5>
 //                         </div>
 //                     </div>
 //                 </div>
