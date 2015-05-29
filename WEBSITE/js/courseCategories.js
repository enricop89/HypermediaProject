$(document).ready(Ready);

function Ready() {
    console.log("I'm ready!");

    $.ajax({
            method: "GET",
            dataType: "jsonp", //type of data
            crossDomain: true,  //localhost purposes
            url: "../php/getCategories.php", //Relative or absolute path to file.php file
            //data: {number:value},
            success: function(response) {
                //console.log(response);
                var categories = response;
                var el="";
                for(i=0; i<categories.length; i++){
                    el="<div id='category' class='containers col-sm-6 col-xs-12'><a class='btn btn-primary' href="+categories[i].LinkToPage+">"+categories[i].Description+" <img src="+categories[i].ImgLink+"></a></div>"
                    $("#category-list").append(el);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });

}
