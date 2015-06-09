$(document).ready(Ready);

function GetURLParameter(sParam){

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++){
      var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
  }

}

function setUrlParameter(param){
    
return param;
}



function Ready() {
    var parameter="";
    var category_id="";//salvo parametro per category_id
    
    if(GetURLParameter('id')!==null && GetURLParameter('id')!==undefined)
        parameter= "?id=" + GetURLParameter('id');
    else
         window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "http://globogym.altervista.org/404.html";

    }, 200);

   
    $.ajax({
            method: "GET",
            dataType: "jsonp", //type of data
            crossDomain: true,  //localhost purposes
            url: "http://globogym.altervista.org/php/getCourses.php" + parameter, //Relative or absolute path to                                                                                     file.php file
            //data: {number:value},
            success: function(response) {
                var course = response;
                var course_header="";
                category_id="?id=" + setUrlParameter(course[0].CategoryId);
                console.log(category_id);
                    course_header="<h2>"+course[0].Name+"</h2><p class='lead'>"+course[0].Description+"</p>";

                    $(".center").append(course_header);
                    $("#target-course").append("<h3 style='text-transform:uppercase;'>" +course[0].Target+ "</h3>");
                    $("#room-course").append("<h3 style='text-transform:uppercase;'>" +course[0].Room+ "</h3>");
                    $("#item1").attr("style","background-image: url(./img/" + course[0].ImgLink1 + ")");
                    $("#item2").attr("style","background-image: url(./img/" + course[0].ImgLink2 + ")");
                    $("#item3").attr("style","background-image: url(./img/" + course[0].ImgLink3 + ")");
                
                /***get category course***/
                $.ajax({
                            method: "GET",
                            dataType: "jsonp", //type of data
                            crossDomain: true,  //localhost purposes
                            url: "http://globogym.altervista.org/php/getCourseCategory.php" + category_id , //Relative                                                                      or absolute path to file.php file

                            success: function(response) {
                                var category_object = response;
                                

                                    $("#category-course").append("<h3 style='text-transform:uppercase;'>" +category_object[0].Description  + "</h3>");
                                /*redirect to the course category*/
                                    var course_category_link= "http://globogym.altervista.org/" +                       category_object[0].Description.substring(0,category_object[0].Description.length-1).toLowerCase() + ".html";
                             

                                    document.getElementById("category_icon").addEventListener("click", function () {

                                        window.location.href = course_category_link;

                                    });
                                     $("#category_icon").attr("style","cursor:pointer");

                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown) {
                                alert("Status: " + textStatus); alert("Error: " + errorThrown);
                            }
                        });
/***finish category course***/
                    
                
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });
    
    
   
    
    
    
    $.ajax({
            method: "GET",
            dataType: "jsonp", //type of data
            crossDomain: true,  //localhost purposes
            url: "http://globogym.altervista.org/php/getSchedule.php" + parameter, //Relative or absolute path to                                                                                     file.php file
            //data: {number:value},
            success: function(response) {
               
                var schedule = response;
                var table="<thead><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></thead>"
               
                 table+="<tbody><td>" + schedule[0].Monday + "</td>" + "<td>" + schedule[0].Tuesday + "</td>" +  "<td>" + schedule[0].Wednesday + "</td>" + "<td>" + schedule[0].Thursday + "</td>" +  "<td>" + schedule[0].Friday + "</td>"  + "<td>" + schedule[0].Saturday + "</td>"  + "<td>" + schedule[0].Sunday + "</td>" + "</tbody>"

                 $("#schedule_table").append(table);
                
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });
    
    
    
}

