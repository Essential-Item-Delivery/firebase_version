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
         $('input')[1].value=doc.data().first_name.value;
         $('input')[2].value=doc.data().last_name.value;
         $('input')[3].value=doc.data().email.value;
         $('input')[4].value=doc.data().address.value;

          //       console.log("yeyayayy")
          console.log("work on the edit button now");


          
          //updating data in the databse
         /* $("#editButton").click(function(){
           // alert("The paragraph was clicked.");
            const newData = {
                first_name: $('input')[1].value,
                last_name: $('input')[2].value,
                email: $('input')[3].value,
                address: $('input')[4].value,
        
            }
            firebase.database().ref().update(newData);
            alert("the data has updated");
            
        

          }); */
/*$('#editButton').addEventListener('click', (e) =>{
    e.preventDefault();
    
    const newData = {
        first_name: $('input')[1].value,
        last_name: $('input')[2].value,
        email: $('input')[3].value,
        address: $('input')[4].value,

    }
    rootRef.child(id.value).update(newData)
    
    });*/
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