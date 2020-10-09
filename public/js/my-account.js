var db = firebase.firestore();
//When the user is signed in 
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("user is logged in" + user);
        $("#accountAppend").append('<li ><a href="./my-account.html?' + '" >' + '</a></li>');
        myAccount.accountDetails(firebase.auth().currentUser.uid);

    } else {
        console.log("not logged in");
        console.log("check if the account page is remved")
    }
});
//add all the functions related to the my-account page here
var myAccount = (function () {


    var pub = {};

    function makeHTML5(one,two,three,four,five) {

        return ' <tr>' +
            '       <th scope="row">'+one+'</th>' +
            '       <td>'+two+'</td>' +
            '      <td>'+three+'</td>' +
            '     <td>'+four+'</td>' +
            '     <td>'+five+'</td>' +
            '</tr>';
    }

    pub.showOrder = async function () {
        $("#orders").show();
        $("#account-main-page").hide();
        var uid  = firebase.auth().currentUser.uid;
        $("#orders").find("tbody").html("");
        var orders = await datacontrol.getALLorders();
       
        for(var i= 1; i<orders.length;i++){
            if(uid===orders[i-1].uid){
                var cart =orders[i-1].cart;
                var carthtml="<ul>" ;
                for(var j= 0; j<cart.length;j++){
                 carthtml+="<li>ID:"+orders[i-1].cart[j].pid +" \t name:"+orders[i-1].cart[j].name+" x "+ orders[i-1].cart[j].unit+"</li>"
     
                }
     
                 var name =orders[i-1].first_name.value+" "+orders[i-1].last_name.value;
                 var address =orders[i-1].address.value;
                 $("#orders").find("tbody").append(makeHTML5(i, name,address ,100, carthtml));
            }
          
        }

        
    }


    //Function to automaticallly fill the checkout form if the user is logged in
    pub.accountDetails = async function (uid) {
        // const data = await datacontrol.getUserInfo(uid);

        var docRef = db.collection("users").doc(uid);
        //var test;

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {

                console.log(uid + "i am the uid");

                $('input')[1].value = doc.data().first_name;
                $('input')[2].value = doc.data().last_name;
                $('input')[3].value = doc.data().email;
                $('input')[4].value = doc.data().address;


                //Afetr clicking this button the data will be editable.
                $("#editButton").click(function () {
                    // alert("The paragraph was clicked.");
                    $("#firstName").attr('readonly', false);
                    $("#lastName").attr('readonly', false);
                    $("#email").attr('readonly', false);
                    $("#address").attr('readonly', false);
                    // alert("Successfully updated!");

                });
                //after clicking this user data will be updated in firestore database and the account details will become red only again.
                $("#updateButton").click(function () {
                    const newData = {
                        first_name: $('input')[1].value,
                        //first_name: $('input')[1].value,
                        last_name: $('input')[2].value,
                        email: $('input')[3].value,
                        address: $('input')[4].value,

                    }
                    console.log(newData, "Here is the new data");
                    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).update(newData);

                    console.log("User info should be updated ")
                    alert("Account Updated!");
                    $("#firstName").attr('readonly', true);
                    $("#lastName").attr('readonly', true);
                    $("#email").attr('readonly', true);
                    $("#address").attr('readonly', true);

                    //location.reload();

                });


            }
        });

    }

    pub.showAccount =function(){
        $("#orders").hide();
      
        $("#account-main-page").show();
    }

    //setup function
    pub.setup = function () {
        $("#orders").hide();
        $("#olink").click(pub.showOrder);
        $("#alink").click(pub.showAccount);
        //pub.accountDetails();
    };
    return pub;

}());

$(document).ready(myAccount.setup);