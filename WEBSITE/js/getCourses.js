$(document).ready(Ready);

function GetURLParameter(sParam){ //function to get URLParamter

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
	  	var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function Ready() {
    var parameter="";
    var category_id="";//salvo parametro per category_id
    var instructor_id="";//salvo parametro per instructor_id
    
    if(GetURLParameter('id')!==null && GetURLParameter('id')!==undefined)
	{
        parameter= "?id=" + GetURLParameter('id');
       
		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true,  //localhost purposes
			url: "http://globogym.altervista.org/php/getCourses.php" + parameter, //Relative or absolute path to                                                                                     file.php file
			//data: {number:value},
			success: function(response) {
				var course = response;
				var course_header="";
				category_id="?id=" + course.CategoryId;
				instructor_id="?id=" + course.InstructorId;
				course_header="<h2>"+course.Name+"</h2><p class='lead'>"+course.Description+"</p>";
				$("#allcoursesId").attr("href","./allCourses.html");
				$("#course-name").html(course.Name);
				$(".center").append(course_header);
				$("#target-course").append("<h3 style='text-transform:uppercase;'>" +course.Target+ "</h3>");
				$("#room-course").append("<h3 style='text-transform:uppercase;'>" +course.Room+ "</h3>");
				$("#item1").attr("style","background-image: url(" + course.ImgLink1 + ")");
				$("#item2").attr("style","background-image: url(" + course.ImgLink2 + ")");
				$("#item3").attr("style","background-image: url(" + course.ImgLink3 + ")");

			}, //succes of the course ajax

			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
		}); //close the course ajax request;
    
		console.log(window.instructor_id,window.category_id);
    
     	/***get category course***/
		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true,  //localhost purposes
			url: "http://globogym.altervista.org/php/getCourseCategory.php" + parameter , //Relative                                                                      or absolute path to file.php file

			success: function(response) {
				var category_object = response;
				$("#category-course").append("<h3 style='text-transform:uppercase;'>" +category_object.Description  + "</h3>");
				/*redirect to the course category*/
				var course_category_link= category_object.LinkToPage ;
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
    
           
                
 		/***get instructor ***/
		$.ajax({
			method: "GET",
			dataType: "jsonp", //type of data
			crossDomain: true,  //localhost purposes
			url: "http://globogym.altervista.org/php/getCourseInstructor.php" + parameter , //Relative                                                                      or absolute path to file.php file

			success: function(response) {
				var instructor_object = response;

				$("#instructor_div").append("<img id='instructor_icon' src=" + instructor_object.ImgLink +" class='img-circle'>");
				$("#instructor_div").append(" <h4><span>" + instructor_object.Name + " " + instructor_object.Surname  + "</span></h4>");

				/*redirect to the instructor*/
				var instructor_link= "http://globogym.altervista.org/instructor.html?id=" + instructor_object.InstructorId;

				document.getElementById("instructor_icon").addEventListener("click", function () {
					window.location.href = instructor_link;
				});
				
			 	$("#instructor_icon").attr("style","cursor:pointer");
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("Status: " + textStatus); alert("Error: " + errorThrown);
			}
		});
		/***finish instructor ***/
    
   		/****schedule ajax*****/
          
    	$.ajax({
            method: "GET",
            dataType: "jsonp", //type of data
            crossDomain: true,  //localhost purposes
            url: "http://globogym.altervista.org/php/getSchedule.php" + parameter, //Relative or absolute path to                                                                                     file.php file
            //data: {number:value},
            success: function(response) {
               
                var schedule = response;
                var table="<thead><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></thead>"
               
                 table+="<tbody><td>" + schedule.Monday + "</td>" + "<td>" + schedule.Tuesday + "</td>" +  "<td>" + schedule.Wednesday + "</td>" + "<td>" + schedule.Thursday + "</td>" +  "<td>" + schedule.Friday + "</td>"  + "<td>" + schedule.Saturday + "</td>"  + "<td>" + schedule.Sunday + "</td>" + "</tbody>"

                 $("#schedule_table").append(table);
                
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });
	}
    else
	{
        window.setTimeout(function(){

			// Move to a new location or you can do something else
			window.location.href = "404.html";

		}, 200);
   	}    
}

