$(document).ready(Ready);

function makeCourseHtml(course)
{
	var name = course.Name;
	var link = "course.html?id="+course.Id;
	var categoryLink = "category.html?id="+course.CategoryId;
	var categoryName = course.Description;
	var imgSrc = course.ImgLink;
	var target = course.Target;
	var level = course.Level;
	return "<li><h2><a href='"+link+"'>"+name+"</a>, <small><a href='"+categoryLink+"'>"+categoryName+"</a> Level "+level+"</small></h2></li>";
}

function Ready(){
    
	$.ajax({
		method: "GET",
		dataType: "jsonp",
		crossDomain: true,
		url: "http://globogym.altervista.org/php/getCourses.php", 
		success: function(courses){
			for(i=0; i<courses.length; i++){
				$("#courses-list").append(makeCourseHtml(courses[i]));
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
		url: "http://globogym.altervista.org/php/getCourses.php?byLevel=true", 
		success: function(courses){
			for(i=0; i<courses.length; i++){
				$("#courses-list-bylevel").append(makeCourseHtml(courses[i]));
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("Status: " + textStatus); alert("Error: " + errorThrown);
		}
	})
	
}
