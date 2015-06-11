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
	if(GetURLParameter('id')!==null && GetURLParameter('id')!==undefined)
	{
        var parameter = "?id=" + GetURLParameter('id');
	
		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true, //localhost purposes
			url: "http://globogym.altervista.org/php/getCategoryInfo.php"+parameter, //Relative or absolute path to file.php file
			success: function(response){
				var info = response;
				var el1="";
				var el2="";
				for(i=0; i<info.length; i++){
					el1="<div id='category-description' class='col-md-6 wow fadeInDown'><p>"+info[i].Info+"</p></div>"
					el2="<div id='category-photo' class='col-md-6 wow fadeInDown'><img src="+info[i].InfoImgLink+"></div>"
					$("#category-info").append(el1);
					$("#category-info").append(el2);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("Status: " + textStatus); alert("Error: " + errorThrown);
				}
		})

		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true, //localhost purposes
			url: "http://globogym.altervista.org/php/getCategoryInstructors.php"+parameter, //Relative or absolute path to file.php file
			success: function(response){
				var instructors = response;
				var el="";
				for(i=0; i<instructors.length; i++){
					var fullName = instructors[i].Name + " " + instructors[i].Surname;
					var link = "instructor.html?id="+instructors[i].InstructorId
					el="<div class='col-md-3 col-sm-4 wow fadeInDown' id='instr'><a href="+link+"><img src="+instructors[i].ImgLink+" class='img-circle'><h4>"+fullName+"</h4></a></div>"
					$("#category-instructors").append(el);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("Status: " + textStatus); alert("Error: " + errorThrown);
				}
		})

		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true, //localhost purposes
			url: "http://globogym.altervista.org/php/getCategoryCourses.php"+parameter, //Relative or absolute path to file.php file
			//data: {number:value},
			success: function(response){
				var courses = response;
				var el="";
				for(i=0; i<courses.length; i++){
					el="<a class='btn btn-primary col-md-2 col-xs-12 wow fadeInDown' href=course.html?id="+courses[i].Id+">"+courses[i].Name+"</a>"
					$("#category-courses").append(el);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("Status: " + textStatus); alert("Error: " + errorThrown);
				}
		})
	}
    else
	{
        window.setTimeout(function(){
			window.location.href = "404.html";
		}, 200);
	}
}
