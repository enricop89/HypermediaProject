$(document).ready(ready);


function ready(){
    $.ajax({
        method: 'GET',
        dataType: 'jsonp',
        crossDomain: true, //localhost purposes
        
        url: "http://globogym.altervista.org/php/where.php", //Relative or absolute path to file.php file
        //data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var location=JSON.parse(response);
            var address="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].Name);
                
                el+="<div class='address'"+location[i].Address+"'></div>";             
                
            }
            
            $(".address").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

     
   
   
}