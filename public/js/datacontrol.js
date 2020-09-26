var datacontrol = (function () {

    //global variables
    var pub = {};
    var db = firebase.firestore();


    pub.getUserName = async function (uid) {
        var docRef = db.collection("users").doc(uid);
        var test;

        var data = await docRef.get().then( function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name.value);

                test=  doc.data().first_name.value;
                return  doc.data();
                console.log("'!test is : '");
                console.log(test);
            } else {
                // doc.data() will be undefined in this case
                //result = "error!!!";
                console.log("No such document!");
            }
        }).catch(function (error) {
            //result = "error!!!";
            console.log("Error getting document:", error);
        });

        console.log('test is : '+test);
        console.log("data : " + data);

        return  data.first_name.value+" "+ data.last_name.value;
      
    }

    //get all info of the uswr this one you can finish it once you added data manually without the user account
    pub.getAllInfo = async function(uid) {
        var docRef = db.collection("users").doc(uid);
        var test;

        var data = await docRef.get().then( function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name.value);

                test=  doc.data().first_name.value;
                return  doc.data();
                console.log("'!test is : '");
                console.log(test);
            } else {
                // doc.data() will be undefined in this case
                //result = "error!!!";
                console.log("No such document!");
            }
        }).catch(function (error) {
            //result = "error!!!";
            console.log("Error getting document:", error);
        });

        console.log('test is : '+test);
        console.log("data : " + data);

        return  data.first_name.value+" "+ data.last_name.value;
    }

    //
    pub.getUserInfo = async function(uid) {
        var docRef = db.collection("users").doc(uid);
        //var test;

        var data = await docRef.get().then( function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name.value);
                console.log("Document last name:", doc.data().last_name.value);
                console.log("Document email:", doc.data().email.value);
                console.log("Document address:", doc.data().address.value);
                
              
                return  doc.data();
              
            } else {
                // doc.data() will be undefined in this case
                //result = "error!!!";
                console.log("No such document!");
            }
        }).catch(function (error) {
            //result = "error!!!";
            console.log("Error getting document:", error);
        });

        return data.first_name.value;
    }

    //setup public
    pub.setup = function () {

        return "test";
    };

    return pub;

}());



$(document).ready(datacontrol.setup);