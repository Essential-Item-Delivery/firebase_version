var datacontrol = (function () {

    //global variables
    var pub = {};
    var db = firebase.firestore();
   
   
    pub.getUserName = function (uid) {
        var docRef = db.collection("users").doc(uid);
        var result;
        
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name.value);
                result= doc.data().first_name.value;
            } else {
                // doc.data() will be undefined in this case
                result= "error!!!";
                console.log("No such document!");
            }
        }).catch(function(error) {
            result= "error!!!";
            console.log("Error getting document:", error);
        });

        return result;
    }

    //setup public
    pub.setup = function () {
       

    };

    return pub;

}());



$(document).ready(datacontrol.setup);