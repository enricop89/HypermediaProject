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
    
	$.ajax({
		method: "GET",
		dataType: "jsonp",
		crossDomain: true,
		url: "http://globogym.altervista.org/php/instructor.php", 
		success: function(response){
			var instructors = response;
			console.log(response);
			for(i=0; i<instructors.length; i++){
				var fullName = instructors[i].Name + " " + instructors[i].Surname;
				var link = "instructor.html?id="+instructors[i].InstructorId;
				var imgSrc = instructors[i].ImgLink;
				$("#instructors-list").append("<li><a href='"+link+"'><img class='img-circle' src='"+imgSrc+"'></img><h2>"+fullName+"</h2></a></li>");
			}

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
	})
}
