/**
 * Created by yzou on 8/7/20.
 */




var indexControl = (function () {

    //global variables
    var pub = {};



    //set  drop down list to database variables
    pub.dropDownControl = function () {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            firebase.database().ref("/Store").once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childKey = childSnapshot.key;
                    console.log(childSnapshot);
                    $("#dropper").append('<li><a href="#"></a>' + childSnapshot.key + '</li>');
                    // ...
                });
            });
        });
    };

    pub.categoryDropDown = async function () {

        var  list = productControl.getCategory().then();

        console.log("list:");
        console.log(list);
        console.log(list[1]);
         $("#categoryList").append("<select id='lister'></select>");
       
         
      
            
         

            var index=0;
          


             for (index = 0; index < list.length; index++) {
                console.log("test:"+list[index]);
                await $("#lister").append("<option>list[index]</option>");
            }
       
        
        console.log(list.length);  
        console.log(list); 
            var t =[];
            t.push("1");
            t.push("2");
            console.log(t);

      return list;
    };

    return pub;

}());


$(document).ready(indexControl.dropDownControl);
$(document).ready( indexControl.categoryDropDown );