/**
 * Here we specify functionalities for the administrator.
 */

var adminPanel = (function () {

    var pub = {};


    function makeHTML4(one, two, three, four) {

        return ' <tr>' +
            '       <th scope="row">' + one + '</th>' +
            '       <td>' + two + '</td>' +
            '      <td>' + three + '</td>' +
            '     <td>' + four + '</td>' +
            '</tr>';
    }
    function makeHTML5(one, two, three, four, five) {

        return ' <tr>' +
            '       <th scope="row">' + one + '</th>' +
            '       <td>' + two + '</td>' +
            '      <td>' + three + '</td>' +
            '     <td>' + four + '</td>' +
            '     <td>' + five + '</td>' +
            '</tr>';
    }


    pub.showCustomer = async function () {
        $("#otable").hide();
        $("#dtable").hide();
        $("#ctable").show();
        $("#ctable").find("tbody").html("");
        var orders = await datacontrol.getALLuser();

        for (var i = 1; i < orders.length; i++) {
            orders[i - 1].first_name;
            $("#ctable").find("tbody").append(makeHTML4(i, orders[i - 1].first_name + " " + orders[i - 1].last_name, orders[i - 1].first_name, orders[i - 1].address, orders[i - 1].email));
        }


    }

    pub.showOrder = async function () {
        $("#ctable").hide();
        $("#dtable").hide();

        $("#otable").show();
        $("#otable").find("tbody").html("");
        var orders = await datacontrol.getALLorders();

        for (var i = 1; i < orders.length; i++) {
            var cart = orders[i - 1].cart;

            $("#otable").find("tbody").append(makeHTML4(i, orders[i - 1].first_name.value + " " + orders[i - 1].last_name.value, orders[i - 1].address.value, orders[i - 1].email.value, orders[i - 1].first_name.value));
        }


    }

    pub.showDelievery = async function () {
        $("#ctable").hide();
        $("#otable").hide();

        $("#dtable").show();
        $("#dtable").find("tbody").html("");
        var orders = await datacontrol.getALLorders();

        for (var i = 1; i < orders.length; i++) {
            var cart = orders[i - 1].cart;
            var carthtml = "<ul>";
            for (var j = 0; j < cart.length; j++) {
                carthtml += "<li>ID:" + orders[i - 1].cart[j].pid + " \t name:" + orders[i - 1].cart[j].name + " x " + orders[i - 1].cart[j].unit + "</li>"

            }

            var name = orders[i - 1].first_name.value + " " + orders[i - 1].last_name.value;
            var address = orders[i - 1].address.value;
            $("#dtable").find("tbody").append(makeHTML4(i, name, address, carthtml));
        }


    }


    pub.setup = function () {
        $("#cli").click(pub.showCustomer);
        $("#oli").click(pub.showOrder);
        $("#dli").click(pub.showDelievery);

        pub.showCustomer();
        // $("#otable").hide();
        // $("#dtable").hide();
    }

    return pub;
}());

if (window.addEventListener) {
    window.addEventListener("load", adminPanel.setup);
} else if (window.attachEvent) {
    window.attachEvent("onload", adminPanel.setup);
} else {
    alert("Could not attach ’MovieCategories.setup’ to the ’window.onload’ event");
}