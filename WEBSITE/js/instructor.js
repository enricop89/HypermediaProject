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
			dataType: "jsonp",
			crossDomain: true,
			url: "http://globogym.altervista.org/php/instructor.php"+parameter, 
			success: function(response){
				var instructor = response;

				$("#instructor-name").html(instructor.Name+" "+instructor.Surname);
				$("#instructor-name-2").html(instructor.Name+" "+instructor.Surname);
				$("#instructor-description").html(instructor.Description);
				$("#instructor-photo").html("<img src='"+instructor.ImgLink+"' class='img-circle'>");

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
		})

		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true, //localhost purposes
			url: "http://globogym.altervista.org/php/instructorCourses.php"+parameter, 
			success: function(response){
				var courses = response;
				var el="";
				for(i=0; i<courses.length; i++){
                   
					el="<li><h2><a href=course.html?id="+courses[i].Id+">"+courses[i].Name+"      </a><small><a href='category.html?id=" + courses[i].CategoryId  + "'>(" +courses[i].CategoryName + ")</small></a></h2> </li>"
                    
					$("#instructor-course-list").append(el);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
		})
		
		$.ajax({
			method: "GET",
			dataType: "jsonp",
			crossDomain: true,
			url: "http://globogym.altervista.org/php/instructorAwards.php"+parameter,
			success: function(response){
				for(i=0; i<response.length; i++){
					var award = response[i].Description;
					$("#instructor-awards-list").append("<li>"+award+"</li>");
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
		});
	}
    else
	{
        window.setTimeout(function(){
			window.location.href = "404.html";
		}, 200);
	}
}
