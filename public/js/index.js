//to add the append the acccount page when the user is looged in.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
       // console.log("Account page should be here. logged in" +user);
        $("#accountAppend").append('<li ><a href="./my-account.html?" >' + "My Account" +'</a></li>');
    
        
    } else {
        console.log("not logged in");
    }
});

/**
 * Created by yzou on 8/7/20.
 */



var indexControl = (function () {

    //global variables
    var pub = {};


    //This will set products on the index page
    async function setItems() {
        console.log("start to set items in index page");

        var products = [];

        // var allproducts = await firebase.database().ref("/Store").once('value');
        var t = await productControl.getAllproducts();
        
        //############################
        //get array of all shop name        
        var shops =  Object.keys(t.val());
        var catge=[];
        for(var i =0 ; i<shops.length-1; i++){
            console.log(shops[i]);
            for(var j =4; j<8; j++){
               var p =Object.entries(t.val())[i][1][j];
               console.log(p);
               var img_id = parseInt(p.ProductID)+1;
               //var url = await firebase.storage().ref("/images/"+shops[i]+"/Product/product"+p.ProductID+".png").getDownloadURL();
               var img_url ='/images/Products/'+shops[i]+'/product'+img_id+'.png';
               console.log(p.Category + escapeHtml(p.Category));
               var laber = escapeHtml(p.Category);
               catge.push(escapeHtml(p.Category));
              
                makeHTML(laber,p.ProductID,p.ProductName,p.UnitPrice,img_url);
            }
        }
        //testing for cates
        console.log(  Array.from(new Set(catge)));
       var unique= Array.from(new Set(catge));
     
        //get array of product use index
        Object.entries(t.val())[0][1];

        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });


        
           
           
        


        //get imgs
       // await firebase.storage().ref("/images/CountDown/Product/product1.png").getDownloadURL();
        // final StorageReference storageRef = storage.getReference();

        // final StorageReference ImagesRef = storageRef.child("images/"+mAu.getCurrentUser().getUid()+".jpg");

        //#############################

       // console.log(t.val());
        
     

         return;
    }
    function escapeHtml(unsafe) {
        return unsafe
            //  .replace(/&/g, "&amp;")
            //  .replace(/</g, "&lt;")
            //  .replace(/>/g, "&gt;")
            //  .replace(/"/g, "&quot;")
            //  .replace(/'/g, "&#039;")
             .replace(/ /g, "&nbsp;");
     }
    function makeHTML(label ,pid , name ,  price ,url, unit_price){
        $("#setPopular").append(
        '<div class="col-lg-3 col-md-4 col-sm-6 mix '+escapeHtml(label)+'">' +
        '   <div class="featured__item">'+
        '       <div class="featured__item__pic set-bg" data-setbg="'+url+'">' +
        '           <ul class="featured__item__pic__hover">' +
        '               <li><a ><i class="fa fa-heart"></i></a></li>' +
        '               <li><a ><i class="fa fa-retweet"></i></a></li>' +
        '               <li><a ><i class="fa fa-shopping-cart"></i></a>  <p hidden>'+pid+'</p> </li>' +
        '           </ul>' +
        '       </div>' +
        '       <div class="featured__item__text">' +
        '           <h6><a >'+name+'</a></h6>' +
        '           <h5>'+price+'</h5>' +
        '       </div>' +
        '   </div>' +
        '</div>' );
    }

    //hide the on load icon
    function hidespinner() {

        $('.spinner').hide();
    }


    // //set  drop down list to database variables
    // pub.dropDownControl = function () {
    //     // $("#dropper").ready(function () {

    //     $("#dropper").html("");

    //     firebase.database().ref("/Store").once('value', function (snapshot) {
    //         snapshot.forEach(function (childSnapshot) {
    //             var childKey = childSnapshot.key;
    //             //console.log(childKey);
    //             $("#dropper").append('<li ><a href="./shop-grid.html?'+childSnapshot.key+'" >' + childSnapshot.key + '</a></li>');
    //             // ...
    //         });
    //     });
    //     // });
    // };

  //  pub.categoryDropDown = async function () {
    //    var list = productControl.getCategory().then();
    //    return list;
   // };

    pub.setup = async function () {
        // $(".fa-shopping-cart").click(function () {

        //     alert($(this).parent().parent().parent().parent().siblings().find('h6').text());

        //   //  Localstorage.set("cart", $(this).parent().parent().parent().parent().siblings().find('h6').text(), 100);

        // });

        //load data into index #muti thread
       // pub.dropDownControl();
      //  pub.categoryDropDown();

        // #singel thread 
        //load iteams 
        //await setItems();
        //load cart
        await cartmodule.setup();
        //stop loading spinner
        await setTimeout(hidespinner, 500);



         /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }

    }

    return pub;

}());

$(document).ready(indexControl.setup);
// $(document).ready(indexControl.dropDownControl);
// $(document).ready(indexControl.categoryDropDown);
// $(document).ready(indexControl.setItems);
