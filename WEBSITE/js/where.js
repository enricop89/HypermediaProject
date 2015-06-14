$(document).ready(ready);

var latitude,longitude,details;
function set_latlong(x,y){
    latitude = parseFloat(x);
    longitude = parseFloat(y);
}

function set_Details(text){
    details=text;
}

function ready(){
    $.ajax({
        method: 'GET',
        dataType: 'jsonp',
        crossDomain: true, //localhost purposes
        url: "http://globogym.altervista.org/php/where.php", //Relative or absolute path to file.php file

        success: function(response) {

            var location=response;
            console.log(location);
            var address="";
            var byBus="";
            var byTrain="";
            var byCar="";
            
            set_latlong(location.Lat,location.Long);
            set_Details(location. Description );

         address="<p class='lead'>"+location.Address+"</p>";
             byBus= "<p>"+location.ByBus+"</p>";
                byCar= "<p>"+location.ByCar+"</p>";
            byTrain= "<p>"+location.ByTrain+"</p>";

           $(address).insertAfter("#address_gym");
            $(byBus).insertAfter("#bus");
            $(byCar).insertAfter("#car");
            $(byTrain).insertAfter("#train");

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
    });

     
   
   
}
