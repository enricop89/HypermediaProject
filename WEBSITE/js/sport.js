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

function Ready(){
    console.log("I'm ready!");

//
//get sport info from table CourseCategory in DB
//
    $.ajax({
        method: "GET",
        dataType: "jsonp", //type of data
        crossDomain: true, //localhost purposes
        url: "http://globogym.altervista.org/php/getSportInfo.php", //Relative or absolute path to file.php file
        data: {id:7},
        success: function(response){
            var info = response;
            var el1="";
            var el2="";
            for(i=0; i<info.length; i++){
                el1="<div id='sport-description' class='col-md-6 wow fadeInDown'><p>"+info[i].Info+"</p></div>"
                el2="<div id='sport-photo' class='col-md-6 wow fadeInDown'><img src="+info[i].InfoImgLink+"></div>"
                $("#sport-info").append(el1);
                $("#sport-info").append(el2);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
    })

//
//get related instructors from table Sport in DB
//
    $.ajax({
        method: "GET",
        dataType: "jsonp", //type of data
        crossDomain: true, //localhost purposes
        url: "http://globogym.altervista.org/php/getSportInstructors.php", //Relative or absolute path to file.php file
        //data: {number:value},
        success: function(response){
            var instructors = response;
            var el="";
            for(i=0; i<instructors.length; i++){
                el="<div class='col-md-3 col-sm-4 wow fadeInDown' id='instr'><a href="+instructors[i].InstructorLink+"><img src="+instructors[i].InstructorImg+" class='img-circle'><h4>"+instructors[i].InstructorName+"</h4></a></div>"
                $("#sport-instructors").append(el);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
    })

//
//get related courses from table Sport in DB
//
    $.ajax({
        method: "GET",
        dataType: "jsonp", //type of data
        crossDomain: true, //localhost purposes
        url: "http://globogym.altervista.org/php/getSportCourses.php", //Relative or absolute path to file.php file
        //data: {number:value},
        success: function(response){
            var courses = response;
            var el="";
            for(i=0; i<courses.length; i++){
                el="<a class='btn btn-primary col-md-2 col-xs-12 wow fadeInDown' href="+courses[i].CourseLink+">"+courses[i].CourseName+"</a>"
                $("#sport-courses").append(el);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
    })
}
