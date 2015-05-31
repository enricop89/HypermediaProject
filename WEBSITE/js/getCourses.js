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


function Ready() {
    var parameter;
    if(GetURLParameter('id')!==null && GetURLParameter('id')!==undefined)
        parameter= "?id=" + GetURLParameter('id');
    else
        parameter="";
    
    console.log(parameter);
    $.ajax({
            method: "GET",
            dataType: "jsonp", //type of data
            crossDomain: true,  //localhost purposes
            url: "http://globogym.altervista.org/php/getCourses.php" + parameter, //Relative or absolute path to                                                                                     file.php file
            //data: {number:value},
            success: function(response) {
                console.log(response);
                var course = response;
                var course_header="";
                //var course_center="";
                for(i=0; i<course.length; i++){
                    course_header="<h2>"+course[i].Name+"</h2><p class='lead'>"+course[i].Description+"</p>";
                   
                    $(".center").append(course_header);
                    $("#target-course").append("<h3>" +course[i].Target+ "</h3>");
                    $("#room-course").append("<h3>" +course[i].Room+ "</h3>");
                     $("#category-course").append("<h3>" +course[i].CategoryId + "</h3>");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });

}

