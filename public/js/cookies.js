/**
 * Uses cookies for local storage.
 */
var Cookie = (function () {

    var pub = {};

    pub.set = function (name, value, hour) {

        var date, expires;
        if (hour) {
            date = new Date();

            date.setHours(date.getHours() + hour);
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    };

    pub.get = function (name) {
        var nameEq, cookies, cookie, i;
        nameEq = encodeURIComponent(name) + "=";
        cookies = document.cookie.split(";");
        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i].trim();
            if (cookie.indexOf(nameEq) === 0) {
                return decodeURIComponent(cookie.substring(nameEq.length, cookie.length));
            }
        }
        return null;
    };

    pub.showALL = function () {
        var cookies, cookie, i, nameEq;
        var result = "empty";
        cookies = document.cookie.split(";");
        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i].trim();
            result += "\n" + cookie.substring(cookie.name, decodeURIComponent(cookie.length));
        }
        return result;

    }

    pub.clear = function (name) {
        pub.set(name, "", -1);
    };
    return pub;
}());