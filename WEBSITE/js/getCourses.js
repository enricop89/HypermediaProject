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
    var parameter="";
    if(GetURLParameter('id')!==null && GetURLParameter('id')!==undefined)
        parameter= "?id=" + GetURLParameter('id');
    else
         window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "http://globogym.altervista.org/404.html";

    }, 500);
    
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
                    $("#item1").attr("style","background-image: url(../img/" + course[i].ImgLink1 + ")");
                    $("#item2").attr("style","background-image: url(../img/" + course[i].ImgLink2 + ")");
                    $("#item3").attr("style","background-image: url(../img/" + course[i].ImgLink3 + ")");
                }
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
                console.log(response);
                var schedule = response;
                var table="<thead><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></thead>"
                for(i=0; i<schedule.length; i++){
                 table+="<tbody><td>" + schedule[i].Monday + "</td>" + "<td>" + schedule[i].Tuesday + "</td>" +  "<td>" + schedule[i].Wednesday + "</td>" + "<td>" + schedule[i].Thursday + "</td>" +  "<td>" + schedule[i].Friday + "</td>"  + "<td>" + schedule[i].Saturday + "</td>"  + "<td>" + schedule[i].Sunday + "</td>" + "</tbody>"   
                   
                    console.log(table);
                    $("#schedule_table").append(table);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });

}

