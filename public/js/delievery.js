//const { findSourceMap } = require("module");

var delievery = (function () {

    var pub = {};
    var i=1;
    var last=0;
    function makeHTML4(one,two,three,four) {

        return ' <tr>' +
            '       <th scope="row">'+one+'</th>' +
            '       <td>'+two+'</td>' +
            '      <td>'+three+'</td>' +
            '     <td>'+four+'</td>' +
            '</tr>';
    }
    function makeHTML5(one,two,three,four,five) {

        return ' <tr>' +
            '       <th scope="row">'+one+'</th>' +
            '       <td>'+two+'</td>' +
            '      <td>'+three+'</td>' +
            '     <td>'+four+'</td>' +
            '     <td>'+five+'</td>' +
            '</tr>';
    }


   
  
    pub.showDelievery = async function (i) {
      
        $("#dtable").find("tbody").html("");
        var orders = await datacontrol.getALLorders();
        last=orders .length;
        var shop ="Commerce Building, Dunedin, Otago 9016, New Zealand";
        $("#mapbox-directions-origin-input").children().children("input").val(shop);

       
       
        // for(var i= 1; i<orders.length;i++){
            //var i=1;
            var cart =orders[i-1].cart;
           var carthtml="<ul>" ;
           for(var j= 0; j<cart.length;j++){
            carthtml+="<li>ID:"+orders[i-1].cart[j].pid +" \t name:"+orders[i-1].cart[j].name+" x "+ orders[i-1].cart[j].unit+"</li>"

           }

            var name =orders[i-1].first_name.value+" "+orders[i-1].last_name.value;
            var address =orders[i-1].address.value;
            var opeations =" <button class='complete'>Complete</button> <button>report</button>";
            $("#dtable").find("tbody").append(makeHTML4(name,address , carthtml,opeations));
        // }
        $("#mapbox-directions-destination-input").children().children("input").val(address);
        
    }

    pub.next = async function(){
        if(i<last){
            alert("next order");
            i++;
            await pub.showDelievery(i);
            $(".complete").click(pub.next);
        }else{
            alert("last order reached");
        }
      
    }

    pub.setup = async function () {
      
       await pub.showDelievery(i);
        $(".complete").click(pub.next);
       
    }

    return pub;
}());

if (window.addEventListener) {
    window.addEventListener("load", delievery.setup);
} else if (window.attachEvent) {
    window.attachEvent("onload", adminPdelieveryanel.setup);
} else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
}