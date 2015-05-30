$(document).ready(ready);


function ready(){
    $.ajax({
        method: 'POST',
        dataType: 'jsonp',
        crossDomain: true, //localhost purposes
        url: "http://globogym.altervista.org/where.php", //Relative or absolute path to file.php file
       
        success: function(response) {
            console.log(JSON.parse(response));
            var location=JSON.parse(response);
            var address="";
            for(var i=0;i<courses.length;i++){
                console.log(location[i].Address);
                
                el+="<div class='address'>"+location[i].Address+"</div>";             
                console.log(el);
            }
            
            //$(".address").html(el);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }
    });

     
   
   
}