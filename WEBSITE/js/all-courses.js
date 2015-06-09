$(document).ready(Ready);

function Ready(){
    
	$.ajax({
		method: "GET",
		dataType: "jsonp",
		crossDomain: true,
		url: "http://globogym.altervista.org/php/getCourses.php?category=true", 
		success: function(response){
			var courses = response;
			console.log(response);
			for(i=0; i<courses.length; i++){
				var name = courses[i].Name;
				var link = "course.html?id="+courses[i].Id;
				var categoryLink = "category.html?id="+courses[i].Id;
				var categoryName = courses[i].Description;
				var imgSrc = courses[i].ImgLink;
				var target = courses[i].Target;
				$("#courses-list").append("<li><h2><a href='"+link+"'>"+name+"</a>, <small><a href='"+categoryLink+"'>"+categoryName+"</a> &ndash; "+target+"</small></h2></li>");
			}

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("Status: " + textStatus); alert("Error: " + errorThrown);
		}
	})
	
}
