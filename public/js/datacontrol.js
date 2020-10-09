/**
 * Add the user order to the database.
 * Gets all the orders for a specific user and user account inforamtion.
 */
var datacontrol = (function () {

    var pub = {};
    var db = firebase.firestore();

    pub.getALLorders = async function () {
        var orders = [];
        await db.collection("orders")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    orders.push(doc.data());
                });
            })
            .catch(function (error) {
            });
        return orders;
    }

    pub.getOrderfromUser = async function (uid) {

        var orders = [];
        var ordersID = [];
        await db.collection("order_user").doc(uid).collection("order_IDs")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    ordersID.push(doc.id);
                });
            })
            .catch(function (error) {
            });

        var docRef = db.collection("orders").doc(ordersID[0]);


        for (var i = 0; i < ordersID.length; i++) {


        }
        await docRef.get().then(function (doc) {
            if (doc.exists) {

                orders.push(doc.data());
            } else {
            }
        }).catch(function (error) {

        });
        return orders;
    }

    pub.getALLuser = async function () {
        var orders = [];

        await db.collection("users")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    orders.push(doc.data());
                });
            })
            .catch(function (error) {
            });
        return orders;
    }

    pub.getUserName = async function (uid) {
        var docRef = db.collection("users").doc(uid);
        var test;

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {

                test = doc.data().first_name;
                return doc.data();
            } else {
            }
        }).catch(function (error) {
        });

        return data.first_name + " " + data.last_name;

    }

    /**
     * Get all info of the user this one you can finish it once you added data manually without the user account.
     * @param {uid} uid 
     */
    pub.getAllInfo = async function (uid) {
        var docRef = db.collection("users").doc(uid);
        var test;

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {

                test = doc.data().first_name;
                return doc.data();

            } else {
            }
        }).catch(function (error) {
        });


        return data.first_name + " " + data.last_name;
    }

    pub.getUserInfo = async function (uid) {
        var docRef = db.collection("users").doc(uid);

        var data = await docRef.get().then(function (doc) {
            if (doc.exists) {
                return doc.data();

            } else {
            }
        }).catch(function (error) {

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