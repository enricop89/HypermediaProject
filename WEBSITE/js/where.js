$(document).ready(ready);


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

         address="<p class='lead'>"+location[0].Address+"</p>";
             byBus= "<p>"+location[0].ByBus+"</p>";
                byCar= "<p>"+location[0].ByCar+"</p>";
            byTrain= "<p>"+location[0].ByTrain+"</p>";

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
