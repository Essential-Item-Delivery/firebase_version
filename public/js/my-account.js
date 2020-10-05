var db = firebase.firestore();
//When the user is signed in 
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("user is logged in" +user);
        //$("#accountAppend").append(<li><a href="./my-account.html">My Account</a></li>);
        $("#accountAppend").append('<li ><a href="./my-account.html?'+'" >' + '</a></li>');
        myAccount.accountDetails(firebase.auth().currentUser.uid);
        //checkout.fill_form(firebase.auth().currentUser.uid);
        //console.log("Calling this function")
        
    } else {
        console.log("not logged in");
        //$("#my-account.html").remove();
       // $("#loggerRemove").remove();

        console.log("check if the account page is remved")
    }
});
//add all the functions related to the my-account page here
var myAccount = (function(){

    
    var pub = {};

    //Function to automaticallly fill the checkout form if the user is logged in
    pub.accountDetails = async function(uid){
        // const data = await datacontrol.getUserInfo(uid);
        
        var docRef = db.collection("users").doc(uid);
        //var test;
 
        var data = await docRef.get().then( function (doc) {
            if (doc.exists) {

         console.log(uid+"i am the uid");

        $('input')[1].value="i am here"
         $('input')[1].value=doc.data().first_name;
         $('input')[2].value=doc.data().last_name;
         $('input')[3].value=doc.data().email;
         $('input')[4].value=doc.data().address;

        


          
          //updating data in the databse
          $("#editButton").click(function(){
           // alert("The paragraph was clicked.");
            const newData = {
                first_name: $('input')[1].value,
                last_name: $('input')[2].value,
                email: $('input')[3].value,
                address: $('input')[4].value,
        
            }
            db.collection("users").doc(firebase.auth().currentUser.uid).update(newData);
            //db.collection("users").doc("uid").update(newData);
            //firebase.database().ref().update(newData);
            //rootRef.child(uid.value).update(newData)
            //alert("the data has updated");
            
        

<<<<<<< HEAD
          }); */

$('#editButton').addEventListener('click', (e) =>{
=======
          }); 
/*$('#editButton').addEventListener('click', (e) =>{
>>>>>>> 4fa5aabedd0e3f7098805bbf7fc736e38b8c1409
    e.preventDefault();
    
    const newData = {
        first_name: $('input')[1].value,
        last_name: $('input')[2].value,
        email: $('input')[3].value,
        address: $('input')[4].value,

    }
    console.log(newData);
    db.collection("users").doc(firebase.auth().currentUser.uid).update(newData);
    
    });
            }
         });
         
 
     }

    

    //setup function
    pub.setup = function () {
        
        //pub.accountDetails();
    };
    return pub;

}());

$(document).ready(myAccount.setup);