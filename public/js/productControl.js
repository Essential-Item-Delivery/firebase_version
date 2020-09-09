var productControl = (function () {
    // Get a reference to the database service
    var db = firebase.database();
    //global variables
    var pub = {};

    pub.getCategory = async function() {
        var categories = [],i=0;
           await firebase.database().ref("/Store").once('value',  function(snapshot) {
               $("#categoryList").append("<select id='lister'></select>");
              snapshot.forEach(   function(childSnapshot) {
                    var path = "/Store/"+childSnapshot.key;
                     firebase.database().ref().child(path).once('value', function(snapshotChild) {
                          snapshotChild.forEach( function(child) {
                            var path1 = path+"/"+child.key+"/Category";
                                firebase.database().ref().child(path1).once('value',   function(cat) {
                                if(!categories.includes(cat.node_.value_)){
                                     categories.push(cat.node_.value_);
                                     var word = cat.node_.value_;
                                    // console.log(categories);
                                    $("#lister").append('<option>'+word+'</option>');
                                }
                            });
                        });
                    });
                });
            });

        // console.log("array:");
        console.log(categories);
         return  categories;
    }

    pub.indexProductSet = async function(){
        var products = [];
        firebase.database().ref("/Store").once('value', function (snapshot) {
            snapshot.forEach( function (childSnapshot) {
                var path = "/Store/" + childSnapshot.key;
                var num = 0;
                firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                    await snapshotChild.forEach( function (child1) {
                        var path1 = path + "/" + child1.key;
                        //console.log(child1);

                        //console.log(num);
                        firebase.database().ref().child(path1).on('value', async function (snappy) {
                            var x = []
                            num++;
                            await snappy.forEach( function (child2) {
                                x.push(child2.node_.value_);
                                //console.log(child2);
                            });
                            //$("#setPopular").append('');
                            products.push(x);
                            if(num>4 && num<9){
                                console.log(num);
                                $("#setPopular").append('           <div class="row featured__filter"  id="setPopular">\n' +
                                    '                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat tester">\n' +
                                    '                    <div class="featured__item">\n' +
                                    '                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">\n' +
                                    '                            <ul class="featured__item__pic__hover">\n' +
                                    '                                <li><a href="#"><i class="fa fa-heart"></i></a></li>\n' +
                                    '                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>\n' +
                                    '                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>\n' +
                                    '                            </ul>\n' +
                                    '                        </div>\n' +
                                    '                        <div class="featured__item__text">\n' +
                                    '                            <h6><a href="#">'+x[3]+'</a></h6>\n' +
                                    '                            <h5>'+x[4]+'</h5>\n' +
                                    '                        </div>\n' +
                                    '                    </div>\n' +
                                    '                </div>');
                            }
                        });
                    });
                });
            });
        });
    }

    pub.getProduct =async function() {
        var products = [];
             firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach( function (childSnapshot) {
                    var path = "/Store/" + childSnapshot.key;
                    var num = 0;
                     firebase.database().ref().child(path).once('value', async function (snapshotChild) {
                        await snapshotChild.forEach( function (child1) {
                            var path1 = path + "/" + child1.key;
                            //console.log(child1);
                            num++;
                            //console.log(num);
                             firebase.database().ref().child(path1).on('value', async function (snappy) {
                                 var x = []
                                await snappy.forEach( function (child2) {
                                    x.push(child2.node_.value_);
                                    //console.log(child2);
                                });
                                 products.push(x);
                                 console.log(x);
                            });
                        });
                    });
                });
            });
       
        // console.log("array:");
         console.log(products);
        return products;
    }


    //setup public
    pub.setup = function () {


    };

    return pub;

}());



//$(document).ready(productControl.getProduct());