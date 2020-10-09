var datacontrol = (function () {

    //global variables
    var pub = {};
    var db = firebase.firestore();

    pub.getALLorders = async function () {

        var orders=[];

       await db.collection("orders")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    orders.push(doc.data());
                    // console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
            console.log(orders);
            return orders;
    }

    pub.getOrderfromUser = async function (uid) {

        var orders=[];
        var ordersID=[];
       await db.collection("order_user").doc(uid).collection("order_IDs")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    ordersID.push(doc.id);
                    // console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

             var docRef = db.collection("orders").doc(ordersID[0]);


             for(var i=0;i<ordersID.length;i++){


             }
            await docRef.get().then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    // console.log("Document first name:", doc.data().first_name);
                    
                    orders.push(doc.data());

                    // test = doc.data().first_name;
                    // return doc.data();
                    // console.log("'!test is : '");
                    // console.log(test);
                } else {
                    // doc.data() will be undefined in this case
                    //result = "error!!!";
                    console.log("No such document!");
                }
            }).catch(function (error) {
                //result = "error!!!";
                console.log("Error getting document:", error);
            });

            console.log(orders);
            return orders;
    }

    pub.getALLuser = async function () {

        var orders=[];

       await db.collection("users")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    orders.push(doc.data());
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
            console.log(orders);
            return orders;
    }

    pub.getUserName = async function (uid) {
        var docRef = db.collection("users").doc(uid);
        var test;

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name);

                test = doc.data().first_name;
                return doc.data();
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

        console.log('test is : ' + test);
        console.log("data : " + data);

        return data.first_name + " " + data.last_name;

    }

    //get all info of the uswr this one you can finish it once you added data manually without the user account
    pub.getAllInfo = async function (uid) {
        var docRef = db.collection("users").doc(uid);
        var test;

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name);

                test = doc.data().first_name;
                return doc.data();
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

        console.log('test is : ' + test);
        console.log("data : " + data);

        return data.first_name + " " + data.last_name;
    }

    pub.getUserInfo = async function (uid) {
        var docRef = db.collection("users").doc(uid);
        //var test;

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                console.log("Document first name:", doc.data().first_name);
                console.log("Document last name:", doc.data().last_name);
                console.log("Document email:", doc.data().email);
                console.log("Document address:", doc.data().address);


                return doc.data();

            } else {
                // doc.data() will be undefined in this case
                //result = "error!!!";
                console.log("No such document!");
            }
        }).catch(function (error) {
            //result = "error!!!";
            console.log("Error getting document:", error);
        });

        return data.first_name + data.last_name + data.email + data.address;
    }


    //setup public
    pub.setup = function () {


        return "test";
    };

    return pub;

}());



$(document).ready(datacontrol.setup);